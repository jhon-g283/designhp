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

const cartReducerSlice = createSlice({
  name: "cartInfo",
  initialState: initialState, //初期のStateセット
  reducers: {
    addCart(state, action) {
      // カートボタンで追加した時の処理
      console.log("action addCart ");

      // カートとして追加されるデータ
      const addData: itemData = action.payload;

      // 現在のカートデータ
      const currentCartList = current(state.itemDataArry);

      // すでに追加済みか確認
      const check = currentCartList?.find((item) => {
        return item.itemId == addData.itemId;
      });

      if (check !== undefined) {
        // すでに追加済みなら何もしない
        console.log("has same id item");
        // return;
        // ？上書きにする？
      }

      //カート数更新
      const newCount: number =
        state?.totalCountcount != undefined ? state?.totalCountcount + 1 : 0; //カート数をインクリメント

      //追加するデータ
      const pushData: itemData = Object.assign(
        { cartId: newCount }, //cartIdを追加する（Idはカート数から番号を作る）
        addData
      );

      // カートデータ更新
      state.itemDataArry = current(state.itemDataArry)?.concat(pushData);

      // カート数更新
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

export const { addCart, removeCart } = cartReducerSlice.actions; // Action Createrをエクスポート

// 現在のcountの値を取得するためのSelectorをexportする
export const selectCount = ({ cartInfo }: { cartInfo: cartData }) =>
  cartInfo.totalCountcount;

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default cartReducerSlice.reducer;
