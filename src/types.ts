// typescript型情報の定義ファイル

import exp from "constants";

// Redux カートの商品情報取得
export interface cartData {
  itemDataArry?: itemData[]; //カートのデータ配列
  totalCountcount?: number; //カート数(合計)
  status: string;
}

// カート用の商品データ
export interface itemData {
  cartId?: string; //カート内の商品ID (カートの商品追加後に設定する)
  itemId: number; //商品ID
  code?: string; //コード
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
  listId: number;
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
  id: string; //id
  date: string; //日付（後でDateになおす）
  title: string; //タイトル
  imageUrl: string; //画像
  detailImagePC: string; //お知らせ詳細用画像（PC）
  detailImageSP: string; //お知らせ詳細用画像（SP）
  type: string; //お知らせのタイプ
  description: string; //お知らせ内容
  // ニュース詳細の内容
  newsDetail: {
    label: string; //ラベル
    title: string; //タイトル
    text: string; //本文
  }[];
}

// API用：商品情報取得
export interface itemDetailAPI {
  itemDetailList: itemDetailData[];
  status: string;
}

// API用：商品情報取得
export interface itemDetail {
  itemDetailData?: itemDetailData;
  status: string;
}

// // Reduxの型の設定　商品詳細
export interface itemDetailData {
  id: string; //商品ID
  code: string; //コード　　[サイズ-XX]
  category: string; //カテゴリ
  itemName: string; //商品名
  imageUrl1: string; //画像
  imageUrl2: string; //
  imageUrl3: string; //
  price: string[]; //価格
  pieces: string[]; //サイズ
  imageUrlCartThumbnail?: string; //カート用サムネイル
  description: string; //商品説明
  evaluation: string[]; //評価値
  itemFeaturesCode: string; //特徴用のコード
  itemFeatures: itemFeaturesData[]; //特徴のデータ配列
  reviewCodes?: string[]; //レビューのコード
  review?: itemDetailReviewData[]; //
}

// 商品詳細の特徴用データ(API)
export interface itemFeaturesListData {
  itemFeaturesList: {
    name: string;
    data: itemFeaturesData[];
  }[];
}

// 商品詳細の特徴用データ
export interface itemFeaturesData {
  featureTitle: string; //タイトル（大）
  featureImage: string; //画像
  featureSubTitle1: string; //サブタイトル１
  featureDescription1: string; //説明文１
  featureSubTitle2: string; //サブタイトル２
  featureDescription2: string; //説明文２
}

// 商品詳細のレビュー部分
export interface itemDetailReviewData {
  reviewId: string;

  review: number;
  reviewTitle: string;

  reviewerName: string;
  reviewerGender: string;
  reviewerAge: string;

  commentText: string;
}

// レビュー一覧のデータ
export interface reviewList {
  reviewList: reviewData[];
}

// レビューのデータ
export interface reviewData {
  reviewId: string;
  id: string; //
  code: string;
  imageUrl: string; //商品リストと同じ
  itemName: string; //商品リストと同じ
  price: number; //商品リストと同じ
  review: number;
  linkParam: string;

  reviewerInfo: string;
  reviewerName: string;
  reviewerGender: string;
  reviewerAge: string;
  reviewerJob: string;

  reviewTitle: string;
  commentText: string;
}

// その他データ保持などの処理用
export interface utilStrage {
  deliveryInfo: deliveryInfoData; //住所情報

  recently: string[]; //最近見た諸品
}

export interface deliveryInfoData {
  [key: string]: string; //　郵便番号
  // addressNumber: string; //　郵便番号
  // address: string; // 住所1
  // address2: string; // 住所2
  // name: string; // 氏名
  // telephone: string; // 電話番号
  // email: string; // メールアドレス
  // paymentType: string; // 支払い方法
  // creditCardNumber: string; // クレジットカード番号
  // creditCardExpiration: string; // クレジットカード有効期限
}
