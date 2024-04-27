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
const OrderConpleteComponent = () => {
  // Redux{}

  return (
    <>
      <div className={styles.cartComponentWrapper}>
        <div className={styles.deliveryInfoTitleWrapper}>
          <p className={styles.deliveryInfoTitle}>注文完了</p>
        </div>

        <ProgressComponents progress="4" />

        <div className={styles.orderCompleteWrapper}>
          <div className={styles.orderCompleteTitle}>
            <p>ご購入ありがとうございました。</p>
          </div>

          <p>
            商品の発送準備が整い次第<br></br>
            発送のご連絡・商品発送を行いますので <br></br>
            今しばらくお待ちください。
          </p>
        </div>
        <div className={styles.continueShoppingButtonWrapper}>
          <button>引き続き買い物を続ける</button>
        </div>
      </div>
    </>
  );
};

export default OrderConpleteComponent;
