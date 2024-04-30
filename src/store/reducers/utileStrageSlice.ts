import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { utilStrage } from "../../types";

// ToDo カート情報の全量分の追加（Id連番含む）
//
//

// State初期値の設定
export const initialState: utilStrage = {
  deliveryInfo: {
    addressNumber: "",
    address: "",
    address2: "",
    name: "",
    telephone: "",
    email: "",
    paymentType: "",
    creditCardNumber: "",
    creditCardExpiration: "",
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
      const payload = action.payload;
    },
    upDateRecentry(state, action) {
      // カートボタンで追加した時の処理
      console.log("action upDateRecentry ");
    },
  },
  extraReducers: (builder) => {
    // 通信中
  },
});

// selectorをエクスポート

export const { upDateDeliveryInfo } = utileStrageReducerSlice.actions; // Action Createrをエクスポート

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default utileStrageReducerSlice.reducer;
