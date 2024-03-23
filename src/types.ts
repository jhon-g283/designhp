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
export interface searchResultData {
  itemlist?: itemDataList[];
  categories?: categoryList[];
  status: string;
}

// API用：（商品の検索結果）（lineupで表示）
export interface searchReaultDataAPI {
  itemlist?: itemDataList[]; //商品リスト
  categories?: categoryList[]; //カテゴリの概要文
  status?: string; //取得状況
}

// 商品リストの中身
export interface itemDataList {
  id?: string;
  itemName?: string; // 商品名
  imageUrl?: string; // 画像URL
  price?: string; // 価格
  evaluation?: any; // 口コミ
  code?: string; // 商品コード
  categoryId?: string; // 商品カテゴリ
  size?: string; // 商品サイズ
}

// カテゴリの概要文の構造
export interface categoryList {
  categoryId?: string; // 商品カテゴリ
  categoryName?: string; // 商品カテゴリ名（表示用）
  categoryDescription?: string; // 商品カテゴリの概要（表示用）
  categoryDetail?: string; // 商品カテゴリの説明文（表示用）
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
export interface newsDataResponse {
  data: newsData[]; //
}

// Redux 用 お知らせ(一覧)データ
export interface newsDataList {
  data: newsData[]; //
  status: string; //
}

// お知らせ情報データ部分
export interface newsData {
  date: string; //日付（後でDateになおす）
  title: string; //タイトル
  imageUrl: string; //メッセージ
  type: string; //お知らせのタイプ
}
