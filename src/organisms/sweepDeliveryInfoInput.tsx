import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';

import 'react-datepicker/dist/react-datepicker.css';
import {
  CartItemBox,
  CartItemProps,
} from '../molecules/sweepCartItemBoxComponents';
import ProgressComponents from '../molecules/sweepProgressComponents';
import Image from 'next/image';
import InputTitle from '../atoms/sweepDeliveryInputTitle';
import { current } from '@reduxjs/toolkit';
import DeliveryCartListComponent from '../molecules/sweepDeliveryCartItemList';

// ヘッダー部分のコンポーネント
const OrderInputComponent = () => {
  // Redux{}

  const initItems: any[] = [
    {
      imageUrl: '/imgSweep/itemDetail_Item_Bitter.jpg',
      itemName: 'ビターチョコ', //商品名
      price: '600', //価格
      count: '1',
      updateState: () => {},
      linkParam: 'string',
    },
    {
      imageUrl: '/imgSweep/itemDetail_Item_Bitter.jpg',
      itemName: 'ビターチョコ', //商品名
      price: '600', //価格
      count: '2',
      updateState: () => {},
      linkParam: 'string',
    },
  ];

  const subTotalPrice = initItems
    .map((item) => {
      const price = parseInt(item.count) * parseInt(item.price);
      return price;
    })
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  // 現在選択中のボタン(数値と配列のインデックスを連動させる。)
  const [cartItemListInfo, updateCartItemListInfo] = useState(initItems);

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
            <DeliveryCartListComponent cartItemsList={initItems} />

            <div className={styles.deliveryInfoSubtotalArea}>
              <p>小計</p>
              <p>{subTotalPrice}</p>
            </div>
            <div className={styles.deliveryInfodeliveryCostArea}>
              <p>配送費</p>
              <p>¥500</p>
            </div>
            <div className={styles.deliveryInfodeliveryTotalArea}>
              <p>合計</p>
              <p>¥{subTotalPrice.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className={styles.deliveryInfoConfirmButtonWrapper}>
          <button
            className={`${styles.deliveryInfoConfirmButton} ${styles.deliveryInfoConfirmButtonAddMarginSP}`}
          >
            確認画面へ
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderInputComponent;
