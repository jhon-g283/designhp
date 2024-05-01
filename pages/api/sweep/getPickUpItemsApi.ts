import type { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import {
  itemDataList,
  categoryList,
  searchReaultDataAPI,
} from "../../../src/types";

import jsonItemListData from "../stbdata/itemList.json"; //商品データ用のjson

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

  const picuUpArray = queryPicuUp.split(",");

  // 商品リスト（返却用のデータをjsonから取得してフィルター）

  const itemListResult: itemDataList[] = picuUpArray
    ?.map((query) => {
      const result = jsonItemListData.itemlist.find((item) => {
        return item.id == query;
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
