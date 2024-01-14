// お知らせ情報用のAPI
import type { NextApiRequest, NextApiResponse } from "next";
import { newsDataResponse } from "../../src/types";
import jsonData from "./stbdata/newsList.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<newsDataResponse>
) {
  console.log("req infomationApi");

  // お知らせデータのjsonをそのまま返却
  res.status(200).json(jsonData);
}
