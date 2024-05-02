import type { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import {
  itemDataList,
  categoryList,
  searchReaultDataAPI,
} from "../../../src/types";

import jsonItemListData from "../stbdata/itemList.json"; //商品データ用のjson
import jsonCategoryData from "../stbdata/categoryList.json"; //カテゴリーの概要文用のjson
import jsonDetailData from "../stbdata/itemDetails.json";

// 検索用のAPI
export default function searchItemList(
  req: NextApiRequest,
  res: NextApiResponse<searchReaultDataAPI>
) {
  console.log("req");
  console.log(req.query);

  // カテゴリ（queryパラメータ）
  const queryCategory =
    req.query["Category"] != undefined &&
    typeof req.query["Category"] == "string"
      ? req.query["Category"]
      : "";

  // サイズ（queryパラメータ）
  const querySize =
    req.query["Size"] != undefined && typeof req.query["Size"] == "string"
      ? req.query["Size"]
      : "";

  // インデックス用の変数
  let listNumber = 0;
  // 商品詳細用のデータから商品一覧の検索結果用のリストを作成
  const itemListResult: itemDataList[] =
    jsonDetailData.itemDetailList
      .flatMap((item, index) => {
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
      })
      .filter((item) => {
        // サイズがAもしくは同じものか？
        const sizeFlag = querySize == "A" || querySize == item.size;
        // 同じカテゴリーか？
        const categoryFlag = item.categoryId == queryCategory;
        // 同じサイズとカテゴリーのものでフィルタリング
        return sizeFlag && categoryFlag;
      }) || [];

  // console.log(listData);

  // 商品リスト（返却用のデータをjsonから取得してフィルター）
  // const itemListResult: itemDataList[] =
  //   listData != undefined
  //     ? listData.filter((item) => {
  //         // サイズがAもしくは同じものか？
  //         const sizeFlag = querySize == "A" || querySize == item.size;
  //         // 同じカテゴリーか？
  //         const categoryFlag = item.categoryId == queryCategory;
  //         // 同じサイズとカテゴリーのものでフィルタリング
  //         return sizeFlag && categoryFlag;
  //       })
  //     : [];

  // カテゴリーの概要文章の取得（返却用のデータをjsonから取得してフィルター）
  const categoryListResult: categoryList[] =
    jsonCategoryData.categories != undefined
      ? jsonCategoryData.categories.filter((item) => {
          // 同じカテゴリーのものだけ返却
          return item.categoryId == queryCategory;
        })
      : [];

  // 返却値
  const result: searchReaultDataAPI = {
    itemlist: itemListResult,
    categories: categoryListResult,
  };

  res.status(200).json(result);
}
