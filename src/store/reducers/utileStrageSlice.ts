import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { utilStrage } from "../../types";

// ToDo カート情報の全量分の追加（Id連番含む）
//
//

// State初期値の設定
export const initialState: utilStrage = {
  deliveryInfo: {
    paymentType: "",
  },
  recently: [],
};

//問合せURL

const utileStrageReducerSlice = createSlice({
  name: "utilStrage",
  initialState: initialState, //初期のStateセット
  reducers: {
    upDateDeliveryInfo(state, action) {
      // カートボタンで追加した時の処理
      console.log("action upDateDeliveryInfo ");
      const payloadData = action.payload;
      // 住所情報更新
      state.deliveryInfo = payloadData;
    },
    upDateRecentry(state, action) {
      const payloadData = action.payload;

      const recentlyData =
        current(state.recently).indexOf(payloadData) == -1
          ? [...current(state.recently), payloadData]
          : [...current(state.recently)];

      // recentlyData.push(payloadData);

      state.recently =
        recentlyData.length > 4 ? recentlyData.slice(-4) : recentlyData;

      // カートボタンで追加した時の処理
      console.log("action upDateRecentry ");
    },
  },
  extraReducers: (builder) => {
    // 通信中
  },
});

// selectorをエクスポート

export const { upDateDeliveryInfo, upDateRecentry } =
  utileStrageReducerSlice.actions; // Action Createrをエクスポート

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default utileStrageReducerSlice.reducer;
