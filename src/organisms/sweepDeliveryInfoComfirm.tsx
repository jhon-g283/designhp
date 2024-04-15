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
const OrderConfirmComponent = () => {
  // Redux{}

  const initItems: CartItemProps[] = [
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

  const addresNumber = '123-4567';
  const addres = '東京都 千代田区 丸の内１丁目 2-3 '; //住所1+2
  const addres2 = 'マンション456号室'; //住所1+2
  const name = '田中 太郎'; //住所1+2
  const tell = '123-4567-8910'; //住所1+2

  const statmentType = 'クレジットカード';

  const creditNumber = '************-8910';

  const creditLimit = '****';

  return (
    <>
      <div className={styles.cartComponentWrapper}>
        <div className={styles.deliveryInfoTitleWrapper}>
          <p className={styles.deliveryInfoTitle}>配送情報入力</p>
        </div>

        <ProgressComponents progress="3" />

        <div className={styles.deliveryInfoAreaWrapper}>
          <div className={styles.deliveryInfoInputAreaOuterWrapper}>
            <div className={styles.deliveryInfoTitleTextWrapper}>
              <InputTitle className={styles.deliveryInfoTitleText}>
                配送先住所
              </InputTitle>
            </div>
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
            {/* <div className={styles.deliveryConfirmAddresWrapper2}>
              <div className={styles.deliveryInfoName}></div>
              <p>{addres2}</p>
            </div> */}

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

            {/* divとinline-flex,gapかwidh:100%で実装していく */}

            <div className={styles.deliveryInfoTitleTextWrapper}>
              <InputTitle
                className={`${styles.deliveryInfoTitleText} ${styles.deliveryInfoTitleTextAddMargin}`}
              >
                決済情報
              </InputTitle>
            </div>

            <div className={styles.deliveryConfirmAddresTell}>
              <div className={styles.deliveryInfoName}>
                <p>決済</p>
              </div>
              <div>
                <p>{statmentType}</p>
                <p>{creditNumber}</p>
                <p>{creditLimit}</p>
              </div>
            </div>
          </div>
          <div className={styles.deliveryInfoCartListArea}>
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
          <button className={styles.deliveryInfoConfirmButton}>
            確認画面へ
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmComponent;
