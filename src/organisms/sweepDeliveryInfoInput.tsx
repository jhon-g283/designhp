import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { AppDispatch } from '../store/index'; //方で怒られるので入れた
import { cartData, itemData, utilStrage, deliveryInfoData } from '../types';
import ProgressComponents from '../molecules/sweepProgressComponents';

import InputTitle from '../atoms/sweepDeliveryInputTitle';

import DeliveryCartListComponent from '../molecules/sweepDeliveryCartItemList';
import { useRouter } from 'next/router';
import { CART_DELIVERY_CONFIRM } from '../common/sweep/setting';
import {
  initialState,
  upDateDeliveryInfo,
} from '../store/reducers/utileStrageSlice';
import { DeliveryInfoProps } from '../../pages/sweep/cart/deliveryinfoInput';

// ヘッダー部分のコンポーネント
const OrderInputComponent = (props: DeliveryInfoProps) => {
  const modify = props.isModifyInfo;
  // Reduxカート情報取得
  const dispatch = useDispatch<AppDispatch>();
  const cartItemData: itemData[] = useSelector(
    (state: { cartreducer: cartData }) =>
      state.cartreducer?.itemDataArry ? state.cartreducer.itemDataArry : []
  ); //商品リスト取得(カート数)

  const deliveryInfo: deliveryInfoData = useSelector(
    (state: { utileStrageReducer: utilStrage }) =>
      state.utileStrageReducer?.deliveryInfo !== undefined && modify
        ? state.utileStrageReducer.deliveryInfo
        : initialState.deliveryInfo
  ); //住所情報

  const [deliveryInfoState, setDeliveryInfoState] =
    useState<deliveryInfoData>(deliveryInfo);

  // イベントから　nameとValueを取り出してState更新する関数
  const upDateDeliveryInfoState = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.name;
    const val = event.target.value;

    setDeliveryInfoState((prevState) => ({
      // スプレッドで開いてnameと同じプロパティのみを更新
      ...prevState,
      [name]: val,
    }));
  };

  useEffect(() => {
    // 確認画面からの遷移なら入力情報を初期表示でセット
    if (modify) {
      // nameのあるinputを全て取得
      const inputs = document.querySelectorAll<HTMLInputElement>('input[name]');

      // 要素の分だけループする
      inputs.forEach((element) => {
        const name = element.getAttribute('name');

        if (name !== null) {
          const val = deliveryInfoState[name];
          element.value = val; // 値を更新
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ルーターと遷移先設定
  const router = useRouter();
  const url = `${CART_DELIVERY_CONFIRM}`;

  // 小計
  const subTotalPrice = cartItemData
    .map((item) => {
      const itemCount = item.count || 0;
      const itemPrice = item.price || 0;
      const price = itemCount * itemPrice;
      return price;
    })
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  // 送料を追加
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
                  name="creditCardNumber"
                  onChange={(event) => {
                    upDateDeliveryInfoState(event);
                  }}
                />
                <input
                  className={styles.creditCardNumber2}
                  placeholder="yy/mm"
                  name="creditCardExpiration"
                  onChange={(event) => {
                    upDateDeliveryInfoState(event);
                  }}
                />
                <input
                  className={styles.creditCardNumber3}
                  placeholder="CVC"
                  name="creditCardCVC"
                  onChange={(event) => {
                    upDateDeliveryInfoState(event);
                  }}
                />
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
              <input
                id={styles.addressNumber}
                name="addressNumber"
                placeholder="123-4567"
                onChange={(event) => {
                  upDateDeliveryInfoState(event);
                }}
              />
              <p>住所</p>
              <input
                id={styles.address1}
                name="address1"
                placeholder="都道府県"
                onChange={(event) => {
                  upDateDeliveryInfoState(event);
                }}
              />
              <input
                id={styles.address2}
                name="address2"
                placeholder="市区町村、番地"
                onChange={(event) => {
                  upDateDeliveryInfoState(event);
                }}
              />
              <input
                id={styles.address3}
                name="address3"
                placeholder="マンション名　号室  ※任意"
                onChange={(event) => {
                  upDateDeliveryInfoState(event);
                }}
              />
              <p>氏名</p>
              <input
                id={styles.addressName}
                name="addressName"
                placeholder="田中　太郎"
                onChange={(event) => {
                  upDateDeliveryInfoState(event);
                }}
              />
              <p>電話番号</p>
              <input
                id={styles.phoneNumber}
                name="phoneNumber"
                placeholder="123-456-7890"
                onChange={(event) => {
                  upDateDeliveryInfoState(event);
                }}
              />
              <p>メール</p>
              <input
                id={styles.phoneMail}
                name="email"
                placeholder="chocolate@sweep.jp"
                onChange={(event) => {
                  upDateDeliveryInfoState(event);
                }}
              />
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
              // 配送情報を保存する
              dispatch(upDateDeliveryInfo(deliveryInfoState));
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
