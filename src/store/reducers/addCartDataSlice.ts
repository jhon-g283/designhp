import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { cartData, itemData } from "../../types";

// ToDo カート情報の全量分の追加（Id連番含む）
//
//

// State初期値の設定
const initialState: cartData = {
  itemDataArry: [],
  totalCountcount: 0,
  status: "load",
};

//問合せURL

const cartReducer = createSlice({
  name: "cartInfo",
  initialState: initialState, //初期のStateセット
  reducers: {
    addCart(state, action) {
      // カートボタンで追加した時の処理
      console.log("action addCart ");
      console.log(state);

      //追加するデータ
      const newCount: number =
        state?.totalCountcount != undefined ? state?.totalCountcount + 1 : 0; //カート数をインクリメント

      state.totalCountcount = newCount;
    },
    removeCart(state, action) {
      // カートの削除

      console.log("remove cart id:" + action.payload);
    },
  },
  extraReducers: (builder) => {
    // 通信中
  },
});

// selectorをエクスポート

export const { addCart, removeCart } = cartReducer.actions; // Action Createrをエクスポート

// 現在のcountの値を取得するためのSelectorをexportする
export const selectCount = ({ cartInfo }: { cartInfo: cartData }) =>
  cartInfo.totalCountcount;

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default cartReducer.reducer;
