import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { itemData, dataList } from "../../types";

// ToDo方の宣言（Interface）を１まとめにする
//
//

// ToDo検索失敗やエラー発生時のデフォルト値設定やペイロードの値チェック
//
//

// State初期値の設定
const initialState: dataList = {
  itemlist: [
    {
      itemName: "**",
      imageUrl: "",
      price: "",
      evaluation: "",
      code: "",
    },
  ],
  status: "***",
};

//問合せURL
const domain = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000/"; //環境変数鵜より取得
const baseulr: string = domain + "api/searchCakeApi?";

// APIへの問い合わせ関数（fetchで取得する部分）
const getItems = async (url: string) => {
  const requestUrl = url;
  console.log("fetch! cake reducer! " + url);
  const result = await fetch(requestUrl)
    .then((responce) => {
      // console.log("fetch responce reducer");
      // console.log(responce);
      return responce.json();
    })
    .then((data: dataList) => {
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
export const fetchItems = createAsyncThunk<dataList, string>(
  "fetchItem_Cake",
  async (query, thunkAPI) => {
    const result = getItems(baseulr + query); // API問い合わせ
    return result;
  }
);

//https:future-architect.github.io/articles/20200501/

const getItemListSlice = createSlice({
  name: "cakeDetailData",
  initialState: initialState, //初期のStateセット
  reducers: {},
  extraReducers: (builder) => {
    // 通信中
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = "pending";

      console.log("pending--cake");
      console.log(state);
      console.log(state.status);
    });

    // 通信完了
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      // state.loading = true;
      const item = action.payload.itemlist; //payloadから取得したデータを取り出す

      // console.log("payload");

      console.log("success--cake");

      if (item != undefined) {
        state.itemlist = item;
      }

      state.status = "success";

      // console.log(action.payload);
      // console.log(state.itemlist);
      // console.log(state.status);
    });

    // 通信失敗
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

// selectorをエクスポート
export const resultOfCakeDetail = (cakeDetailData: dataList) => cakeDetailData;

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default getItemListSlice.reducer;
