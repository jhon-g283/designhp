// Reducerのエリアス
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/addCartDataSlice";

export type AppDispatch = typeof store.dispatch; // dispatchの方で怒られるので追加

export const store = configureStore({
  reducer: {
    // reducer名：インポートしたReducerファイル(XX.reducer)
    // useSelectorで引数のstate.Reducer名で読み込むのに必要
    cartreducer: cartReducer,
  },
});
