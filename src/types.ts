// typescript型情報の定義ファイル

// Redux カートの商品情報取得
export interface cartData {
  itemDataArry?: itemData[]; //カートのデータ配列
  totalCountcount?: number; //カート数(合計)
  status: string;
}

// カート用のデータ
export interface itemData {
  itemId?: number; //商品ID
  itemName?: any; //商品名
  imageUrl?: any; //画像Url１
  imageUrl2?: any; //画像Url２
  price?: number; //価格
  count?: number; //商品の個数
}
