import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import styled from 'styled-components';

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

  const InputDateTag = styled.input`
    &::-webkit-calendar-picker-indicator {
      background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"%3E%3Crect x="0.5" y="6.5" width="15" height="9" fill="%23D9D9D9" stroke="%237F6767"/%3E%3Crect width="16" height="5" fill="%237F6767"/%3E%3C/svg%3E')
        no-repeat;
    }
  `;

  //   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  //   <rect x="0.5" y="6.5" width="15" height="9" fill="#D9D9D9" stroke="#7F6767"/>
  //   <rect width="16" height="5" fill="#7F6767"/>
  // </svg>
  // background:url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="18" height="18" viewBox="0 0 24 24"%3E%3Cpath fill="%230098c2" d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"%2F%3E%3Cpath fill="%230098c2" d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z"%2F%3E%3C%2Fsvg%3E');

  // .deliveryDateWrapper > input[type='date']::-webkit-calendar-picker-indicator {
  //   /* position: absolute;   width: 100%;  height: 100%; */
  //   /* color: rgba(0, 0, 0, 0); */
  //   /* opacity: 1; */
  //   /* display: block; */
  //   background: url(http://urbanqee.com/html/nenrei/img/calender-icon-blue-w16.jpg)
  //     no-repeat;
  //   /* width: 16px; */
  //   /* height: 16px; */
  //   /* border-width: thin; */
  // }

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
            <div className={styles.cartItemListTitleWrapper}>
              <div className={styles.cartItemBoxImageWrapper}>
                <a className={styles.cartItemTitleText}>商品</a>
              </div>
              <div className={styles.cartItemBoxItemTextWrapper}>
                <a className={styles.cartItemTitleText}></a>
              </div>
              <div className={styles.cartItemBoxButtonArea}>
                <a className={styles.cartItemTitleText}>個数</a>
              </div>
              <div className={styles.cartItemSubTotalPriceWrapper}>
                <a className={styles.cartItemTitleText}>小計</a>
              </div>
            </div>

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

            <div className={styles.cartItemListBottomAreaWrapper}>
              <div className={styles.cartItemBoxImageWrapper}>
                <a className={styles.cartBottom}></a>
              </div>
              <div className={styles.cartItemBoxItemTextWrapper}>
                <a className={styles.cartBottom}></a>
              </div>
              <div className={styles.cartItemBoxButtonArea}>
                <a className={styles.cartBottom}>合計金額</a>
              </div>
              <div className={styles.cartItemSubTotalPriceWrapper}>
                <a className={styles.cartBottom}>2200円</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.cartItemsAttentionWrapper}>
            <p className={styles.cartItemsAttention}> 注意事項</p>
          </div>
          <div className={styles.cartItemsAttentionDescriptWrapper}>
            <p>
              本サービスは一部の冷凍・冷蔵商品の商品を除き、基本は通常配達での配送になります。
              <br></br>
              ポスト配達、置き配希望の場合は季節・気温にご注意ください。夏季など気温の高い季節は対面やコンビニ受け取りをおすすめします。
              <br></br>
              ご配達を防ぐために住所情報はお間違えのないように入力をお願いいたします。
            </p>
          </div>
        </div>
        <div className={styles.deliveryDateArea}>
          <div>
            <div className={styles.deliveryDateTitleWrapper}>
              <p className={styles.deliveryDateTitle}>お届け予定日</p>
            </div>
            <div className={styles.deliverruDateInputItems}>
              <div className={styles.deliveryDateWrapper}>
                <p>日付</p>

                <InputDateTag type="date"></InputDateTag>
              </div>
              <div className={styles.deliveryTimeWrapper}>
                <p>時間帯</p>
                <select>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                </select>
              </div>
            </div>

            <p className={styles.clickAttention}>
              クリックで希望の配達日・時間帯に変更
            </p>

            <button className={styles.goToDeliveryInformation}>
              決済・配達情報入力へ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemComponent;
