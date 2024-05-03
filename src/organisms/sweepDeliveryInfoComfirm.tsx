import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';

import 'react-datepicker/dist/react-datepicker.css';

import ProgressComponents from '../molecules/sweepProgressComponents';
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { cartData, itemData, utilStrage, deliveryInfoData } from '../types';
import InputTitle from '../atoms/sweepDeliveryInputTitle';
import { useRouter } from 'next/router';
import { CART_DELIVERY_INPUT, ORDER_COMPLETE } from '../common/sweep/setting';
import DeliveryCartListComponent from '../molecules/sweepDeliveryCartItemList';
import { initialState } from '../store/reducers/utileStrageSlice';
import { resetCart } from '../store/reducers/addCartDataSlice';

// ヘッダー部分のコンポーネント
const OrderConfirmComponent = () => {
  const dispatch = useDispatch();
  //  Reduxカート情報取得
  const cartItemData: itemData[] = useSelector(
    (state: { cartreducer: cartData }) =>
      state.cartreducer?.itemDataArry ? state.cartreducer.itemDataArry : []
  ); //商品リスト取得(カート数)

  const deliveryInfo: deliveryInfoData = useSelector(
    (state: { utileStrageReducer: utilStrage }) =>
      state.utileStrageReducer?.deliveryInfo
        ? state.utileStrageReducer.deliveryInfo
        : initialState.deliveryInfo
  ); //住所情報

  // ルーターと遷移先設定
  const router = useRouter();

  // 合計
  const subTotalPrice = cartItemData
    .map((item) => {
      const itemCount = item.count || 0;
      const itemPrice = item.price || 0;
      const price = itemCount * itemPrice;
      return price;
    })
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  // 送料追加
  const totalPrice = subTotalPrice + 500;

  // 郵便番号
  const addresNumber =
    deliveryInfo?.addressNumber !== undefined
      ? deliveryInfo?.addressNumber.slice(0, 3) +
        '-' +
        deliveryInfo?.addressNumber.slice(3, deliveryInfo?.addressNumber.length)
      : '123-4567';
  // 住所
  const addres =
    deliveryInfo?.address1 + deliveryInfo?.address2 ||
    '東京都 千代田区 丸の内１丁目 2-3 '; //住所1+2

  const addres2 = deliveryInfo?.address3 || ''; //住所1+2
  // 氏名
  const name = deliveryInfo?.addressName || '田中 太郎'; //住所1+2

  // 電話番号
  const tell = deliveryInfo?.phoneNumber || '123-4567-8910'; //住所1+2
  const mail = deliveryInfo?.phoneMail || 'chocolate@sweep.jp'; //住所1+2

  const statmentType = 'クレジットカード';

  // クレジット番号をマスクする
  const creditNumberData = deliveryInfo?.creditCardNumber || '1234123456788910';

  const unmask = creditNumberData.slice(-4);
  const mask = creditNumberData
    .replace(/./g, '*')
    .slice(0, creditNumberData.length - 4);

  const creditNumber = mask + '-' + unmask;

  const limit = deliveryInfo?.creditCardExpiration || '****';

  const creditLimit = limit.replace(/./g, '*');

  return (
    <>
      <div className={styles.cartComponentWrapper}>
        <div className={styles.deliveryInfoTitleWrapper}>
          <p className={styles.deliveryInfoTitle}>配送情報入力</p>
        </div>

        <ProgressComponents progress="3" />

        <div className={styles.deliveryInfoAreaWrapper}>
          <div className={`${styles.deliveryInfoInputAreaOuterWrapper} `}>
            <div className={styles.deliveryInfoTitleTextWrapper}>
              <InputTitle className={styles.deliveryInfoTitleText}>
                配送先住所
              </InputTitle>
            </div>
            <div className={styles.deliveryInfoInputAreaInnerWrapper}>
              <div className={styles.deliveryConfirmAddresNumberWrapper}>
                <div className={styles.deliveryInfoName}>
                  <p>郵便番号</p>
                </div>
                <p>{addresNumber}</p>
              </div>
              <div className={styles.deliveryConfirmAddresWrapper}>
                <div className={styles.deliveryInfoName}>
                  <p>住所</p>
                </div>
                <div>
                  <p>{addres}</p>
                  <p>{addres2}</p>
                </div>
              </div>

              <div className={styles.deliveryConfirmAddresName}>
                <div className={styles.deliveryInfoName}>
                  <p>氏名</p>
                </div>
                <p>{name}</p>
              </div>

              <div className={styles.deliveryConfirmAddresTell}>
                <div className={styles.deliveryInfoName}>
                  <p>電話番号</p>
                </div>
                <p>{tell}</p>
              </div>
              <div className={styles.deliveryConfirmAddresMail}>
                <div className={styles.deliveryInfoName}>
                  <p>メール</p>
                </div>
                <p>{mail}</p>
              </div>
              <div className={styles.deliveryInfoConfirmBorder}>
                <svg
                  width="446"
                  height="1"
                  viewBox="0 0 446 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="4.37114e-08"
                    y1="0.5"
                    x2="446"
                    y2="0.500039"
                    stroke="#A4A4A4"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.deliveryInfoTitleTextWrapper}>
              <InputTitle
                className={`${styles.deliveryInfoTitleText} ${styles.deliveryInfoConfirmStatmentTitle}`}
              >
                決済情報
              </InputTitle>
            </div>

            <div className={styles.deliveryInfoInputAreaInnerWrapper}>
              <div className={styles.deliveryConfirmStatmentWrapper}>
                <div className={styles.deliveryInfoName}>
                  <p>決済</p>
                </div>
                <div>
                  <p>{statmentType}</p>
                  <p>
                    <span>番号</span>
                    {creditNumber}
                  </p>
                  <p>
                    <span>期限</span>
                    {creditLimit}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.deliveryComfirmModifyButtonWrapper}>
              <button
                className={styles.deliveryComfirmModifyButton}
                onClick={() => {
                  // クリックで商品ページへ
                  router.push({
                    pathname: CART_DELIVERY_INPUT,
                  });
                }}
              >
                入力内容を訂正する
              </button>
            </div>
          </div>
          <div className={styles.deliveryInfoCartListArea}>
            {/* カート内データ */}
            <DeliveryCartListComponent cartItemsList={cartItemData} />

            <div className={styles.deliveryInfoSubtotalArea}>
              <p>小計</p>
              <p>{subTotalPrice.toLocaleString()}</p>
            </div>
            <div className={styles.deliveryInfodeliveryCostArea}>
              <p>配送費</p>
              <p>¥500</p>
            </div>
            <div className={styles.deliveryInfodeliveryTotalArea}>
              <p>合計</p>
              <p>¥{totalPrice.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className={styles.deliveryInfoConfirmButtonWrapper}>
          <button
            className={styles.deliveryInfoConfirmButton}
            onClick={() => {
              dispatch(resetCart(''));
              // クリックで商品ページへ
              router.push({
                pathname: ORDER_COMPLETE,
              });
            }}
          >
            注文確定
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmComponent;
