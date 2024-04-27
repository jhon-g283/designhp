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

  const initItems = [
    {
      imageUrl: '/imgSweep/itemDetail_Item_Bitter.jpg',
      itemName: 'ビターチョコ', //商品名
      price: 600, //価格
      count: 1,
      updateState: () => {},
      linkParam: 'string',
    },
    {
      imageUrl: '/imgSweep/itemDetail_Item_Bitter.jpg',
      itemName: 'ビターチョコ', //商品名
      price: 600, //価格
      count: 2,
      updateState: () => {},
      linkParam: 'string',
    },
  ];

  const subTotalPrice = initItems
    .map((item) => {
      const price = item.count * item.price;
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
  const mail = 'chocolate@sweep.jp'; //住所1+2

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
              <button className={styles.deliveryComfirmModifyButton}>
                入力内容を訂正する
              </button>
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
          <button className={styles.deliveryInfoConfirmButton}>注文確定</button>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmComponent;
