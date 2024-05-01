import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { itemDetailData, itemDetail } from "../../types";

// State初期値の設定
export const initialState: itemDetail = {
  itemDetailData: {
    id: "1",
    code: "bit01",
    itemName: "****",
    category: "ベーシック",
    imageUrl1: "/imgSweep/itemDetail_Item_Bitter.jpg",
    imageUrl2: "/imgSweep/itemDetail_Item_Bitter.jpg",
    imageUrl3: "/imgSweep/itemDetail_Item_Bitter.jpg",
    price: ["500", "1000"],
    pieces: [""],
    description:
      "ベーシックな苦味が特徴で初めての方にとてもおすすめのチョコです。",
    evaluation: ["4", "3", "2", "4"],
    itemFeaturesCode: "",
    itemFeatures: [
      {
        featureTitle: "ビターチョコの特徴",
        featureImage: "/imgSweep/ItemDetail_Feature_1.jpg",
        featureSubTitle1: "口に広がる程よい苦味",
        featureDescription1:
          "ベーシックな苦味で食後に甘いものが苦手な方でも、甘いものが好きな方でもすぐ口に入る味わい。",
        featureSubTitle2: "ノンカフェイン",
        featureDescription2:
          "他のチョコレートとは違い、眠りを妨げるカフェインなどは一切使用しておりません。",
      },
      {
        featureTitle: "こだわりの原材料",
        featureImage: "/imgSweep/ItemDetail_Feature_1.jpg",
        featureSubTitle1: "カカオ",
        featureDescription1:
          "原料に使用するカカオなどは質にこだわり現地の農家から直接仕入れを行っています。",
        featureSubTitle2: "砂糖",
        featureDescription2:
          "砂糖は海外産でなく国産の砂糖を使用しています。沖縄産の黒糖を材料に使用することで甘すぎず、苦過ぎない程よい味わいにしています。",
      },
    ],
    reviewCodes: [],
  },

  status: "***",
};

//問合せURL
const domain = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000/"; //環境変数鵜より取得
const baseulr: string = domain + "api/sweep/getitemDetailApi?";
// const baseUrl: string = 'http://localhost:3000/api/getitemDetailApi?';

// APIへの問い合わせ関数（fetchで取得する部分）
const getItems = async (requestUrl: string) => {
  console.log("fetch! reducer!");

  const result = await fetch(requestUrl)
    .then((responce) => {
      // console.log("fetch responce reducer");
      // console.log(responce);
      return responce.json();
    })
    .then((data: itemDetail) => {
      // console.log("fetch data reducer");

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
export const fetchDetails = createAsyncThunk<itemDetail, string>(
  "fetchItem_Cake",
  async (id: string, thunkAPI) => {
    const requesrUrl: string = baseulr + "id=" + id;

    const result = await getItems(requesrUrl); // API問い合わせ
    return result;
  }
);

//https:future-architect.github.io/articles/20200501/

const getItemDetailSlice = createSlice({
  name: "cakeList",
  initialState: initialState, //初期のStateセット
  reducers: {},
  extraReducers: (builder) => {
    // 通信中
    builder.addCase(fetchDetails.pending, (state, action) => {
      state.status = "pending";

      console.log("pending--");

      console.log(state.status);
    });

    // 通信完了
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      // state.loading = true;
      const item = action.payload.itemDetailData; //payloadから取得したデータを取り出す

      console.log("payload sucess detail");
      console.log(item);

      if (item != undefined) {
        state.itemDetailData = item;
      }

      state.status = "success";

      console.log(action.payload);
      // console.log(state.itemlist);
      // console.log(state.status);
    });

    // 通信失敗
    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

// selectorをエクスポート
export const searchItemDetail = (itemDetail: itemDetail) => itemDetail;

// Reducerをエクスポート
// 読み込み時にはuseSelectで[state.設定したreducer名.State名]で読み込む
export default getItemDetailSlice.reducer;
