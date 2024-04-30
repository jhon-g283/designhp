// Reducerのエリアス
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducerSlice from "./reducers/addCartDataSlice";
import getItemListSlice from "./reducers/searchItemsSlice";
import getNewsListSlice from "./reducers/getNewsDataSlice";
import getItemDetailSlice from "./reducers/getItemDetailSlice";
import getPickUpListListSlice from "./reducers/getPickUpListDataSlice";
import utileStrageReducerSlice from "./reducers/utileStrageSlice";

export type AppDispatch = typeof store.dispatch; // dispatchの方で怒られるので追加

// Reducer、CombineでStateをまとめる
const reducers = combineReducers({
  cartreducer: cartReducerSlice, //カートの状態をcartreducerというStateにする。中身はcartReducer
  itemListReducer: getItemListSlice,
  newsListReducer: getNewsListSlice,
  itemDetailReducer: getItemDetailSlice,
  pickUpListReducer: getPickUpListListSlice,
  utileStrageReducer: utileStrageReducerSlice,

  // reducer: {
  //   // reducer名：インポートしたReducerファイル(XX.reducer)
  //   // useSelectorで引数のstate.Reducer名で読み込むのに必要
  //   cartreducer: cartReducer,
  // },
});

// persistReducerの必須項目の引数（デフォルト値を設定）
const persistConfig = {
  key: "root", // 永続化のキー
  storage, // 使用するストレージエンジン
  whitelist: ["cartreducer", "utileStrageReducer"], //cartreducerのみを永続化する
};

// 永続化が適用されるpersistReducerにconfigとreducerをセットしてルートReducer作成
const persistedReducer = persistReducer(persistConfig, reducers);

// StoreにReducerとmiddlewareを設定
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // JSON としてシリアライズを無効
    }),
});
