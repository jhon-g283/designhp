import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { cartData, itemData } from '../types';
import { editCart, removeCart } from '../store/reducers/addCartDataSlice';
import Image from 'next/image';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CartItemBox,
  CartItemProps,
} from '../molecules/sweepCartItemBoxComponents';
import ProgressComponents from '../molecules/sweepProgressComponents';

import { useRouter } from 'next/router';
import { CART_DELIVERY_INPUT, ITEM_LINEUP } from '../common/sweep/setting';

// ヘッダー部分のコンポーネント
const CartItemComponent = () => {
  // Reduxカート情報取得
  const dispatch = useDispatch();
  const cartItemData: itemData[] = useSelector(
    (state: { cartreducer: cartData }) =>
      state.cartreducer?.itemDataArry ? state.cartreducer.itemDataArry : []
  ); //商品リスト取得(カート数)

  // ルーターと遷移先設定
  const router = useRouter();
  const url = `${CART_DELIVERY_INPUT}`;

  // 配達時刻
  const SelectTimeTag = styled.select`
    /* 矢印を消す*/
    -webkit-appearance: none;
    appearance: none;

    /* 画像を背景へセット*/
    background-image: url('/imgSweep/SelectArrow.svg');
    background-repeat: no-repeat;
    background-size: 11px 11px; /* 画像のサイズ（幅 高さ）*/
    background-position: right 11.5px center; /* 画像の位置 */
    @media (max-width: 768px) {
      background-size: 6px 6px; /* 画像のサイズ（幅 高さ）*/
    }
  `;

  // カート数変更用関数
  const upDateCount = (cariId: string, count?: number) => {
    // 個数が引数にあるかどうかでカート内容の変更が削除を切り替える
    if (count !== undefined) {
      // カート数変更(dispatch)
      dispatch(editCart({ cartId: cariId, count: count }));
    } else {
      // カート削除

      dispatch(removeCart({ cartId: cariId }));
    }
  };

  // カートデータの生成
  const cartData: CartItemProps[] = cartItemData.map((item) => {
    const itemCount = item.count !== undefined ? item.count : 0; //カート数
    const itemPrice = item.price !== undefined ? item.price : 0; //価格
    const param = `id=${item?.itemId}&code=${item?.code}`; //商品ID+コード
    const cartId = item.cartId !== undefined ? item.cartId : ''; //カートID

    const result = {
      cartId: cartId,
      imageUrl: item.imageUrl,
      itemName: item.itemName, //商品名
      price: itemPrice, //価格
      count: itemCount,
      updateState: (id: string, count?: number) => {
        // 更新用の関数
        upDateCount(id, count);
      },
      linkParam: param,
    };

    return result;
  });

  // 合計金額
  const totalPrice = cartData.reduce(
    (prev, current) => current.count * current.price + prev,
    0
  );

  const hasItemInCart = cartData.length > 0;

  const [startDate, setStartDate] = useState(new Date());

  const imageUrl = '/imgSweep/CartIcon.svg';

  if (!hasItemInCart) {
    return (
      <div
        className={`${styles.cartComponentWrapper} ${styles.addCartComponentPadding}`}
      >
        <div
          className={`${styles.cartAreaTitleWrapper} ${styles.cartTitleAddBorder}`}
        >
          <p className={styles.cartAreaTitle}>カート</p>
        </div>
        <div className={styles.cartAreaItemTitleWordWrapper}>
          <p
            className={`${styles.cartAreaItemTitleWord} ${styles.cartAreaItemTitleWordPaddingPlus}`}
          >
            カート内に商品がありません。
          </p>
        </div>

        <div className={styles.cartItemsNoItemAreaWrapper}>
          <div className={styles.cartItemsCartIconWrapper}>
            <div className={styles.cartItemsCartIcon}>
              <Image
                src={imageUrl}
                // width={129} // Specify different width values based on device or viewport size
                // height={110}
                alt="Your Image"
                fill={true}
              ></Image>
            </div>
          </div>
        </div>
        <div className={styles.cartItemsGoLineup}>
          <button
            onClick={() => {
              // クリックで商品ページへ
              router.push({
                pathname: ITEM_LINEUP,
              });
            }}
          >
            欲しい商品を探す
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.cartComponentWrapper}>
        <div className={styles.cartAreaTitleWrapper}>
          <p className={styles.cartAreaTitle}>カート</p>
        </div>

        <ProgressComponents progress="1" />

        <div className={styles.cartAreaItemTitleWordWrapper}>
          <p className={styles.cartAreaItemTitleWord}>カート内商品</p>
        </div>
        <div className={styles.cartAreaItemAreaWrapper}>
          <div className={styles.cartAreaItemListWrapper}>
            {/* title */}

            <div className={` ${styles.cartItemListTitleWrapper} `}>
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
            {cartData.map((item, index) => {
              return (
                <CartItemBox
                  cartId={item.cartId}
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
                <a className={`${styles.imgSP} ${styles.totalPriceSP}`}>
                  {totalPrice.toLocaleString()}円
                </a>
              </div>
              <div className={styles.cartItemSubTotalPriceWrapper}>
                <a className={styles.cartBottom}>
                  {totalPrice.toLocaleString()}円
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.cartItemsAttentionWrapper}>
            <p className={styles.cartItemsAttention}> 注意事項</p>
          </div>
          <div className={styles.cartItemsAttentionDescriptWrapper}>
            <p className={styles.cartItemsAttentionDescript}>
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

                <DatePicker
                  showIcon
                  selected={startDate}
                  toggleCalendarOnIconClick
                  onChange={(date) => setStartDate(date || new Date())}
                  minDate={new Date()}
                  dateFormat="yyyy/MM/dd"
                  className={`${styles.calendarInput} `}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`${styles.calendarInputSVG} `}
                    >
                      <rect
                        x="0.5"
                        y="6.5"
                        width="15"
                        height="9"
                        fill="#D9D9D9"
                        stroke="#7F6767"
                      />
                      <rect width="16" height="5" fill="#7F6767" />
                    </svg>
                  }
                />
              </div>
              <div className={styles.deliveryTimeWrapper}>
                <p>時間帯</p>

                <SelectTimeTag>
                  <option>指定なし</option>
                  <option>午前中</option>
                  <option>12時〜14時</option>
                  <option>14時〜16時</option>
                  <option>16時〜18時</option>
                  <option>18時〜20時</option>
                  <option>20時以降</option>
                </SelectTimeTag>
              </div>
            </div>

            <p className={styles.clickAttention}>
              クリックで希望の配達日・時間帯に変更
            </p>

            <div className={styles.goToDeliveryInformationWrapper}>
              <button
                className={styles.goToDeliveryInformation}
                onClick={() => {
                  // クリックで商品ページへ
                  router.push({
                    pathname: url,
                  });
                }}
              >
                決済・配達情報入力へ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemComponent;
