import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import { createReviewStars } from '../common/sweep/createReviewStars';
import { addCart } from '../store/reducers/addCartDataSlice';
import { useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み

// ヘッダー部分のコンポーネント

export interface CartItemProps {
  cartId: string;
  imageUrl: string; //画像Url
  itemName?: string; //商品名
  price: number; //価格
  count: number;
  updateState?: (id: string, count: number) => void;
  linkParam?: string;
}

const CartItemBox = ({
  imageUrl = '',
  itemName = '',
  price = 0,
  count = 0,
  cartId = '',
  updateState = (id: string, count: number) => {},
  linkParam,
}: CartItemProps) => {
  const link = 'domein:::::' + linkParam;

  // 小計
  const totalPrice = price * count;

  return (
    <>
      <div className={styles.cartItemBox}>
        <div className={styles.cartItemBoxImageWrapper} onClick={() => {}}>
          <Image
            src={imageUrl}
            // width={236} // Specify different width values based on device or viewport size
            // height={244}
            alt="Your Image"
            fill={true}
            className={styles.positionOverWrittenRelationOnSP}
          ></Image>
        </div>
        <div className={`${styles.cartItemBoxItemInnerWrapper}`}>
          <div className={`${styles.cartItemBoxItemTextWrapper}`}>
            <p className={styles.cartItemName}>{itemName}</p>
            <p className={styles.cartItemPrice}>¥{price.toLocaleString()}</p>
          </div>
          <div className={styles.cartItemBoxButtonArea}>
            <div className={styles.cartItemContButtonOuterWrapper}>
              <button
                className={styles.itemDetailContMinusButton}
                onClick={() => {
                  // Reduxの商品数をcartIdをもとに更新
                  const decrementCount = count == 1 ? 1 : count - 1;

                  // カート更新(dispatch)
                  updateState(cartId, decrementCount);
                }}
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.imgPC}
                >
                  <line y1="8.5" x2="16" y2="8.5" stroke="black" />
                </svg>
                <svg
                  width="8.5"
                  height="9"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.imgSP}
                >
                  <line
                    x1="0.373047"
                    y1="9.07129"
                    x2="16.373"
                    y2="9.07129"
                    stroke="black"
                  />
                </svg>
              </button>
              <svg
                width="2"
                height="23"
                viewBox="0 0 1 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.imgPC}
              >
                <line
                  x1="0.25"
                  y1="1.45968e-08"
                  x2="0.249999"
                  y2="23"
                  stroke="#A4A4A4"
                  strokeWidth="0.5"
                />
              </svg>

              <svg
                width="2"
                height="11.5"
                viewBox="0 0 1 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.imgSP}
              >
                <line
                  x1="0.623047"
                  y1="0.571289"
                  x2="0.623046"
                  y2="23.5713"
                  stroke="#A4A4A4"
                  strokeWidth="0.5"
                />
              </svg>

              <div className={styles.cartItemContWrapper}>
                <a className={styles.cartItemCont}>{count}</a>
              </div>

              <svg
                width="2"
                height="23"
                viewBox="0 0 1 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.imgPC}
              >
                <line
                  x1="0.25"
                  y1="1.45968e-08"
                  x2="0.249999"
                  y2="23"
                  stroke="#A4A4A4"
                  strokeWidth="0.5"
                />
              </svg>

              <svg
                width="2"
                height="11.5"
                viewBox="0 0 1 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.imgSP}
              >
                <line
                  x1="0.623047"
                  y1="0.571289"
                  x2="0.623046"
                  y2="23.5713"
                  stroke="#A4A4A4"
                  strokeWidth="0.5"
                />
              </svg>

              <button
                className={styles.itemDetailContPlusButton}
                onClick={() => {
                  // Reduxの商品数をcartIdをもとに更新
                  const incrementCount = count + 1;

                  // カート更新(dispatch)
                  updateState(cartId, incrementCount);
                }}
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.imgPC}
                >
                  <line y1="8.5" x2="16" y2="8.5" stroke="black" />
                  <line
                    x1="8.5"
                    y1="2.20764e-08"
                    x2="8.5"
                    y2="17"
                    stroke="black"
                  />
                </svg>
                <svg
                  width="8.5"
                  height="9"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.imgSP}
                >
                  <line
                    x1="0.373047"
                    y1="9.07129"
                    x2="16.373"
                    y2="9.07129"
                    stroke="black"
                  />
                  <line
                    x1="8.87305"
                    y1="0.571289"
                    x2="8.87305"
                    y2="17.5713"
                    stroke="black"
                  />
                </svg>
              </button>
            </div>
            <p className={`${styles.cartItemSubTotalPriceSP} ${styles.imgSP}`}>
              小計 ¥{totalPrice.toLocaleString()}
            </p>
            <div className={styles.cartItemDeleteButtonWrapper}>
              <button className={styles.cartItemDeleteButton}>削除</button>
            </div>
          </div>
          <div className={styles.cartItemSubTotalPriceWrapper}>
            <p className={styles.cartItemSubTotalPrice}>¥{totalPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { CartItemBox as CartItemBox };
