import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import { createReviewStars } from '../common/sweep/createReviewStars';
import { addCart } from '../store/reducers/addCartDataSlice';
import { useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み

// ヘッダー部分のコンポーネント

export interface CartItemProps {
  imageUrl: string; //画像Url
  itemName?: string; //商品名
  price?: string; //価格
  count: string;
  updateState?: () => void;
  linkParam?: string;
}

const CartItemBox = ({
  imageUrl = '',
  itemName = '',
  price = '',
  count = '',

  updateState = () => {},
  linkParam,
}: CartItemProps) => {
  const dispatch = useDispatch();
  const addCartFunction = () => {
    console.log('add cart');
    dispatch(addCart('77'));
  };

  const link = 'domein:::::' + linkParam;

  const totalPrice = parseInt(price) * parseInt(count);

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
        <div className={styles.cartItemBoxItemTextWrapper}>
          <p className={styles.cartItemName}>{itemName}</p>
          <p className={styles.cartItemPrice}>¥{price}</p>
        </div>
        <div className={styles.cartItemBoxButtonArea}>
          <div className={styles.cartItemContButtonOuterWrapper}>
            <button
              className={styles.itemDetailContMinusButton}
              onClick={() => {
                //   decreaseCount(count);
              }}
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="8.5" x2="16" y2="8.5" stroke="black" />
              </svg>
            </button>
            <div className={styles.cartItemContWrapper}>
              <a className={styles.cartItemCont}>{count}</a>
            </div>

            <button
              className={styles.itemDetailContPlusButton}
              onClick={() => {
                //   increaseCount(count);
              }}
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </button>
          </div>
          <div className={styles.cartItemDeleteButtonWrapper}>
            <button className={styles.cartItemDeleteButton}>削除</button>
          </div>
        </div>
        <div className={styles.cartItemTotalPriceWrapper}>
          <p className={styles.cartItemTotalPrice}>¥{totalPrice}</p>
        </div>
      </div>
    </>
  );
};

export { CartItemBox as CartItemBox };
