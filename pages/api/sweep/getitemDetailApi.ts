// ケーキの詳細情報の取得用API

import type { NextApiRequest, NextApiResponse } from "next";
import {
  itemDetail,
  itemFeaturesData,
  itemFeaturesListData,
  itemDetailReviewData,
  reviewList,
} from "../../../src/types";
import jsonDataDetail from "../stbdata/itemDetails.json"; //データ用のJson
import jsonDataFeature from "../stbdata/itemFeatureList.json"; //データ用のJson
import jsonDataReview from "../stbdata/reviewList.json"; //データ用のJson

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

  const json = jsonDataDetail;
  const jsonFeature: itemFeaturesListData = jsonDataFeature;
  const jsonReview: reviewList = jsonDataReview;

  const initData = initialState.itemDetailData;

  // 商品詳細のデータをidをキーに取得
  const itemData = json.itemDetailList.find((item) => {
    return item.id == queryId;
  });

  // 特徴のデータをコードをもとに取得
  const featureData: itemFeaturesData[] = jsonFeature.itemFeaturesList.flatMap(
    (item) => {
      if (item.name == itemData?.itemFeaturesCode) {
        return item.data;
      }
      return [];
    }
  );

  // 詳細データからレビュー情報取得
  const revewData: itemDetailReviewData[] =
    itemData?.reviewCodes.map((item) => {
      // レビューIDをキーに取得
      const filtered = jsonReview.reviewList.find((reviewItem) => {
        return reviewItem.reviewId == item;
      });

      const result: itemDetailReviewData = {
        reviewId: filtered?.reviewId || "",
        review: filtered?.review || 0,
        reviewTitle: filtered?.reviewTitle || "",
        reviewerName: filtered?.reviewerName || "",
        reviewerGender: filtered?.reviewerGender || "",
        reviewerAge: filtered?.reviewerAge || "",
        commentText: filtered?.commentText || "",
      };
      return result;
    }) || [];

  // 返却値
  const result: itemDetail = {
    itemDetailData:
      itemData !== undefined
        ? // 中身のitemFeaturesを更新して返却
          { ...itemData, itemFeatures: featureData, review: revewData }
        : // 初期値
          initData,
    status: "",
  }; //返却値用の変数

  // 教訓：レスポンスはRedux側でも見ること
  //　TypeScriptの型定義でもレスポンス取得受信で入ってくるデータの方まではチェックしないみたい
  //　そのせいでインデックス名が二重になってた
  res.status(200).json(result);
}
