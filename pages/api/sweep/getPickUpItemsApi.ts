import type { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import {
  itemDataList,
  categoryList,
  searchReaultDataAPI,
} from "../../../src/types";

import jsonItemListData from "../stbdata/itemList.json"; //商品データ用のjson
import jsonDetailData from "../stbdata/itemDetails.json";

// 検索用のAPI
export default function getPickUpItemsList(
  req: NextApiRequest,
  res: NextApiResponse<searchReaultDataAPI>
) {
  console.log("req");
  console.log(req.query);

  // カテゴリ（queryパラメータ）
  const queryPicuUp =
    req.query["PickUp"] != undefined && typeof req.query["PickUp"] == "string"
      ? req.query["PickUp"]
      : "";

  // クエリーから絞り込み条件用の配列を作成
  const picuUpArray = queryPicuUp.split(",").map((item) => {
    const data = item.split("-");
    return { id: data[0] || "1", code: data[1] || "S" };
  });

  // インデックス用の変数
  let listNumber = 0;
  // 商品詳細用のデータから商品一覧の検索結果用のリストを作成
  const itemList: itemDataList[] = jsonDetailData.itemDetailList.flatMap(
    (item, index) => {
      // 商品のバリーションの数繰り返す
      return item.pieces.map((peaceData, peaceDataIndex) => {
        const size = ["S", "M", "L"];

        listNumber = listNumber + 1;
        return {
          listId: listNumber,
          id: item.id,
          itemName: item.itemName + item.pieces[peaceDataIndex], // 商品名
          imageUrl: item.imageUrlCartThumbnail, // 画像URL
          price: item.price[peaceDataIndex] || "0", // 価格
          evaluation: item.evaluation[0], // 口コミ
          code: size[peaceDataIndex] || "S", // 商品コード
          categoryId: item.category, // 商品カテゴリ
          size: size[peaceDataIndex] || "S", // 商品サイズ
        };
      });
    }
  );

  // 商品リスト（返却用にフィルター）
  const itemListResult: itemDataList[] = picuUpArray
    ?.map((query) => {
      const result = itemList.find((item) => {
        // IDとコードが同じ
        return item.id == query.id && item.code == query.code;
      });

      return result;
    })
    .filter((item) => item !== undefined) as itemDataList[];

  // 返却値
  const result: searchReaultDataAPI = {
    itemlist: itemListResult,
  };

  res.status(200).json(result);
}
