import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reviewList } from "../../types";

// ToDo検索失敗やエラー発生時のデフォルト値設定やペイロードの値チェック
//
//

// Stateの初期値の定義
export const initState: reviewList = {
  reviewList: [],

  status: "init",
};

//問合せURL
const domain = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000/"; //環境変数鵜より取得
const baseulr: string = domain + "api/sweep/getReviewListApi?";

// APIへの問い合わせ関数（fetchで取得する部分）
const getItems = async (url: string) => {
  const requestUrl = url;
  console.log("fetch! review " + url);
  const result = await fetch(requestUrl)
    .then((responce) => {
      // console.log("fetch responce reducer");
      // console.log(responce);
      return responce.json();
    })
    .then((data: reviewList) => {
      // console.log("fetch data reducer");
      // console.log(data);
      // const str: string = "data.name";
      return data;
    })
    .catch(() => {
      // エラー発生時
      return { status: "error" };
    });

  return result;
};

// Thunk
// 第１引数：返り値の型
// 第２引数：受け渡す引数の型
export const fetchReviewItemList = createAsyncThunk<reviewList, string>(
  "fetchReviewItemList", //ユニーク値設定
  async (query, thunkAPI) => {
    const requestUrl = baseulr;
    const result = getItems(requestUrl); // API問い合わせ
    return result;
  }
);

const getReviewListSlice = createSlice({
  name: "getReviewListData",
  initialState: initState, //初期のStateセット
  reducers: {},
  extraReducers: (builder) => {
    // 通信中
    builder.addCase(fetchReviewItemList.pending, (state, action) => {
      console.log("pending--getPickUpListSlice");
      state.status = "pending";
    });

    // 通信完了
    builder.addCase(fetchReviewItemList.fulfilled, (state, action) => {
      console.log("success--getPickUpListSlice");

      const item = action.payload.reviewList; //payloadから取得したデータを取り出す(商品リスト)

      if (item != undefined) {
        // stateへ取得内容をセット
        state.reviewList = item;
      }

      state.status = "success";
    });

    // 通信失敗
    builder.addCase(fetchReviewItemList.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

// selectorをエクスポート
export const resultOfReviewList = (reViewListData: reviewList) =>
  reViewListData;

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default getReviewListSlice.reducer;
