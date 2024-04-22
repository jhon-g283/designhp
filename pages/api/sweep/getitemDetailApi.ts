// ケーキの詳細情報の取得用API

import type { NextApiRequest, NextApiResponse } from "next";
import { itemDetail } from "../../../src/types";
import jsonData from "../stbdata/itemDetails.json"; //データ用のJson
import { initialState } from "../../../src/store/reducers/getItemDetailSlice";
// ToDo
// interfaceを１つにまとめる
//

export default function searchCakesData(
  req: NextApiRequest,
  res: NextApiResponse<itemDetail>
) {
  console.log("req");
  console.log(req.query);

  const queryId = req.query?.id || 1; //クエリ取得

  const json = jsonData;

  const initData = initialState.itemDetailData;

  const itemData = json.itemDetailList.find((item) => {
    return item.id == queryId;
  });

  let result: itemDetail = { itemDetailData: itemData, status: "" }; //返却値用の変数

  if (itemData == undefined) {
    result.itemDetailData = initData;
  }

  // 教訓：レスポンスはRedux側でも見ること
  //　TypeScriptの型定義でもレスポンス取得受信で入ってくるデータの方まではチェックしないみたい
  //　そのせいでインデックス名が二重になってた
  res.status(200).json(result);
}
