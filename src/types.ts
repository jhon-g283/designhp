// typescript型情報の定義ファイル

// Redux カートの商品情報取得
export interface cartData {
  itemDataArry?: itemData[]; //カートのデータ配列
  totalCountcount?: number; //カート数(合計)
  status: string;
}

// カート用の商品データ
export interface itemData {
  itemId?: number; //商品ID
  itemName?: any; //商品名
  imageUrl?: any; //画像Url１
  imageUrl2?: any; //画像Url２
  price?: number; //価格
  count?: number; //商品の個数
}

// Reduxの型の設定　商品一覧
export interface dataList {
  itemlist?: {
    id?: number;
    itemName?: any; //商品名
    imageUrl?: any; //画像URL
    price?: any; //価格
    evaluation?: any; //口コミ
    code?: string; //商品コード
  }[];
  status: string;
}

// API用：商品情報取得
export interface itemDetailArray {
  itemDetail: itemDetail;
}

// Reduxの型の設定　商品詳細
export interface itemDetail {
  itemDetailInfo?: {
    id?: number;
    itemName?: any;
    imageUrl?: any;
    imageUrl2?: any;
    priceHole?: any;
    pricePieace?: any;
    kcal?: any;
    code?: string;
    discription?: string;
    shopname?: string;
    options?: {
      name: string;
      param: any;
    }[];
  };
  status?: string;
}

//API用 お知らせデータ
export interface infomationArray {
  data: infoData[]; //
}

// Redux 用 お知らせデータ
export interface infoDataList {
  data: infoData[]; //
  status: string; //
}

// お知らせ情報データ部分
export interface infoData {
  date: string; //日付（後でDateになおす）
  title: string; //タイトル
  message: string; //メッセージ
  type: string; //お知らせのタイプ
}
