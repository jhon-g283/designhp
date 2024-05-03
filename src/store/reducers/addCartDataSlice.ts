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
        return item.itemId == addData.itemId && item.code == addData.code;
      });

      if (check !== undefined) {
        // すでに追加済みならカート内の数量だけ変更
        console.log("has same id item");

        const id = addData.itemId;
        const code = addData.code;

        state.itemDataArry = currentCartList?.map((item) => {
          // 商品IDとコードが同じなら個数を更新
          if (item.itemId == id && item.code == code) {
            item.count == addData.count;
          }
          return item;
        });

        // 処理終了
        return;
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
      state.itemDataArry = currentCartList?.concat(pushData);

      // カート数更新
      state.totalCountcount = newCount;
    },

    editCart(state, action) {
      // カートの数量変更
      console.log(action.payload);

      // 送られたデータ
      const payloadData = action.payload;
      const newCount = payloadData.count; //個数
      const id = payloadData.cartId; //カートID
      // 現在のカートデータを更新
      const newCartList = current(state.itemDataArry)?.map((item) => {
        return { ...item, count: id == item.cartId ? newCount : item.count };
      });

      // カート更新
      state.itemDataArry = newCartList;
    },
    removeCart(state, action) {
      // カートの削除
      // 送られたデータ
      const payloadData = action.payload;
      const id = payloadData.cartId; //カートID

      // 現在のカートデータ
      const currentCartList = current(state.itemDataArry);
      const upDateCartList = currentCartList?.filter((item) => {
        // 選択されたカートID以外のもののみにする
        return item.cartId !== id;
      });

      //カート数更新
      const newCount: number =
        state?.totalCountcount != undefined ? state?.totalCountcount - 1 : 0; //カート数をインクリメント

      // カート更新
      state.itemDataArry = upDateCartList;

      // カート数更新
      state.totalCountcount = newCount;

      console.log("remove cart id:" + action.payload);
    },
    resetCart(state, action) {
      // カートデータリセット（購入完了時など）

      state.itemDataArry = initialState.itemDataArry;
      state.totalCountcount = 0;
    },
  },
  extraReducers: (builder) => {
    // 通信中
  },
});

// selectorをエクスポート

export const { addCart, removeCart, editCart, resetCart } =
  cartReducerSlice.actions; // Action Createrをエクスポート

// 現在のcountの値を取得するためのSelectorをexportする
export const selectCount = ({ cartInfo }: { cartInfo: cartData }) =>
  cartInfo.totalCountcount;

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default cartReducerSlice.reducer;
