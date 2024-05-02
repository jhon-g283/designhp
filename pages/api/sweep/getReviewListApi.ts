// お知らせ情報用のAPI
import type { NextApiRequest, NextApiResponse } from "next";
import { reviewListResutl } from "../../../src/types";
import jsonData from "../stbdata/reviewList.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<reviewListResutl>
) {
  console.log("req infomationApi");

  // クエリがある場合
  // if (req.query !== undefined) {
  //   const queryId = req.query?.id || 1; //クエリ取得

  //   const resultData = jsonData.data.filter((item) => {
  //     return item.id === queryId;
  //   });

  //    res.status(200).json({ data: resultData });
  // }

  // お知らせデータのjsonをそのまま返却
  res.status(200).json(jsonData);
}
