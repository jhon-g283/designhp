import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { cartData, itemData } from '../types';
import ProgressComponents from '../molecules/sweepProgressComponents';

import InputTitle from '../atoms/sweepDeliveryInputTitle';

import DeliveryCartListComponent from '../molecules/sweepDeliveryCartItemList';
import { useRouter } from 'next/router';
import { CART_DELIVERY_CONFIRM } from '../common/sweep/setting';

// ヘッダー部分のコンポーネント
const OrderInputComponent = () => {
  // Reduxカート情報取得

  const cartItemData: itemData[] = useSelector(
    (state: { cartreducer: cartData }) =>
      state.cartreducer?.itemDataArry ? state.cartreducer.itemDataArry : []
  ); //商品リスト取得(カート数)

  // ルーターと遷移先設定
  const router = useRouter();
  const url = `${CART_DELIVERY_CONFIRM}`;

  const subTotalPrice = cartItemData
    .map((item) => {
      const itemCount = item.count || 0;
      const itemPrice = item.price || 0;
      const price = itemCount * itemPrice;
      return price;
    })
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  const totalPrice = subTotalPrice + 500;

  return (
    <>
      <div className={styles.cartComponentWrapper}>
        <div className={styles.deliveryInfoTitleWrapper}>
          <p className={styles.deliveryInfoTitle}>配送情報入力</p>
        </div>

        <ProgressComponents progress="2" />

        <div className={styles.deliveryInfoAreaWrapper}>
          <div className={styles.deliveryInfoInputAreaOuterWrapper}>
            <div className={styles.deliveryInfoTitleTextWrapper}>
              <InputTitle className={styles.deliveryInfoTitleText}>
                決済情報
              </InputTitle>
            </div>

            <div className={styles.deliveryInfoSubTextWrapper}>
              <p className={styles.deliveryInfoSubText}>
                クレジット、またはスマホ・コンビニ決済からお選びいただけます。
              </p>
            </div>

            <button className={styles.deliverySmartInfosettlementButton}>
              スマホ・コンビニ決済はこちら
            </button>
            <p>または</p>
            <div className={styles.creditCardNumberAreaWrapper}>
              <p>クレジットカード番号</p>
              <div className={styles.creditCardNumberArea}>
                <input
                  className={styles.creditCardNumber1}
                  placeholder="1234-5678-9000"
                />
                <input
                  className={styles.creditCardNumber2}
                  placeholder="yy/mm"
                />
                <input className={styles.creditCardNumber3} placeholder="CVC" />
              </div>
            </div>

            <div className={styles.deliveryInfoTitleTextWrapper}>
              <InputTitle
                className={`${styles.deliveryInfoTitleText} ${styles.deliveryInfoTitleTextAddMargin}`}
              >
                配送先住所
              </InputTitle>
            </div>

            <div className={styles.deliveryInfoInputArea}>
              <p>郵便番号</p>
              <input id={styles.addressNumber} placeholder="123-4567" />
              <p>住所</p>
              <input id={styles.address1} placeholder="都道府県" />
              <input id={styles.address2} placeholder="市区町村、番地" />
              <input
                id={styles.address3}
                placeholder="マンション名　号室  ※任意"
              />
              <p>氏名</p>
              <input id={styles.addressName} placeholder="田中　太郎" />
              <p>電話番号</p>
              <input id={styles.phoneNumber} placeholder="123-456-7890" />
              <p>メール</p>
              <input id={styles.phoneMail} placeholder="chocolate@sweep.jp" />
            </div>
          </div>
          <div className={`${styles.deliveryInfoCartListArea} ${styles.imgPC}`}>
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
            className={`${styles.deliveryInfoConfirmButton} ${styles.deliveryInfoConfirmButtonAddMarginSP}`}
            onClick={() => {
              // クリックで商品ページへ
              router.push({
                pathname: url,
              });
            }}
          >
            確認画面へ
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderInputComponent;
