// Reducerのエリアス
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./reducers/addCartDataSlice";

export type AppDispatch = typeof store.dispatch; // dispatchの方で怒られるので追加

const reducers = combineReducers({
  cartreducer: cartReducer,

  // reducer: {
  //   // reducer名：インポートしたReducerファイル(XX.reducer)
  //   // useSelectorで引数のstate.Reducer名で読み込むのに必要
  //   cartreducer: cartReducer,
  // },
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
