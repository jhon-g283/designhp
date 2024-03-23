import type { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import {
  itemDataList,
  categoryList,
  searchReaultDataAPI,
} from "../../../src/types";

import jsonItemListData from "../stbdata/itemList.json"; //商品データ用のjson
import jsonCategoryData from "../stbdata/categoryList.json"; //カテゴリーの概要文用のjson

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

  // 商品リスト（返却用のデータをjsonから取得してフィルター）
  const itemListResult: itemDataList[] =
    jsonItemListData.itemlist != undefined
      ? jsonItemListData.itemlist.filter((item) => {
          // サイズがAもしくは同じものか？
          const sizeFlag = querySize == "A" || querySize == item.size;
          // 同じカテゴリーか？
          const categoryFlag = item.categoryId == queryCategory;
          // 同じサイズとカテゴリーのものでフィルタリング
          return sizeFlag && categoryFlag;
        })
      : [];

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
