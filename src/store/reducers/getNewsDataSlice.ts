// お知らせ一覧のデータ取得用
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newsDataList } from "../../types";

// ToDo検索失敗やエラー発生時のデフォルト値設定やペイロードの値チェック
//
//

// next やっぱり忘れるDispatch
//
//

// State初期値の設定
const initialState: newsDataList = {
  data: [],
  status: "***",
};

//問合せURL
const domain = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000/"; //環境変数鵜より取得
const baseulr: string = domain + "api/newsListApi";

console.log(domain);
// APIへの問い合わせ関数（fetchで取得する部分）
const getNewsItems = async (url: string) => {
  const requestUrl = url;
  console.log("fetch! cake reducer! " + url);
  const result = await fetch(requestUrl)
    .then((responce) => {
      console.log("fetch responce reducer info");
      // console.log(responce);
      return responce.json();
    })
    .then((data: newsDataList) => {
      console.log("fetch data reducer info");
      console.log(data);
      // const str: string = "data.name";
      return data;
    })
    .catch(() => {
      // エラー発生時
      return { status: "error", data: [] };
    });

  return result;
};

// Thunk
// 第１引数：返り値の型
// 第２引数：受け渡す引数の型
export const fetchInfomations = createAsyncThunk<newsDataList, string>(
  "fetchItem_Cake",
  async (query, thunkAPI) => {
    const result = getNewsItems(baseulr + query); // API問い合わせ
    return result;
  }
);

const getNewsListSlice = createSlice({
  name: "newsListData",
  initialState: initialState, //初期のStateセット
  reducers: {},
  extraReducers: (builder) => {
    // 通信中
    builder.addCase(fetchInfomations.pending, (state, action) => {
      state.status = "pending";
    });

    // 通信完了
    builder.addCase(fetchInfomations.fulfilled, (state, action) => {
      // state.loading = true;
      const item = action.payload.data; //payloadから取得したデータを取り出す

      state.data = item;

      console.log("success--info");

      state.status = "success";
    });

    // 通信失敗
    builder.addCase(fetchInfomations.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

// selectorをエクスポート
export const infomationList = (infomationListData: newsDataList) =>
  infomationListData;

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default getNewsListSlice.reducer;
