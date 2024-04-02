import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';

import {
  CartItemBox,
  CartItemProps,
} from '../molecules/sweepCartItemBoxComponents';
import ProgressComponents from '../molecules/sweepProgressComponents';
import Image from 'next/image';
import { it } from 'node:test';

// ヘッダー部分のコンポーネント
const CartItemComponent = () => {
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

  // 現在選択中のボタン(数値と配列のインデックスを連動させる。)
  const [cartItemListInfo, updateCartItemListInfo] = useState(initItems);

  return (
    <>
      <div className={styles.cartComponentWrapper}>
        <div className={styles.cartAreaTitleWrapper}>
          <p className={styles.cartAreaTitle}>カート</p>
        </div>

        <ProgressComponents></ProgressComponents>

        <div className={styles.cartAreaItemTitleWordWrapper}>
          <p className={styles.cartAreaItemTitleWord}>カート内商品</p>
        </div>
        <div className={styles.cartAreaItemAreaWrapper}>
          <div className={styles.cartAreaItemListWrapper}>
            {/* title */}
            {/* list */}
            {cartItemListInfo.map((item, index) => {
              return (
                <CartItemBox
                  imageUrl={item.imageUrl}
                  itemName={item.itemName}
                  price={item.price}
                  updateState={item.updateState}
                  linkParam={item.linkParam}
                  count={item.count}
                  key={'cartItemBox_key_' + index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemComponent;
