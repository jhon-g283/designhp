import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import { createReviewStars } from '../common/sweep/createReviewStars';
import { addCart } from '../store/reducers/addCartDataSlice';
import { useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み

// ヘッダー部分のコンポーネント

interface Props {
  imageUrl: string; //画像Url
  itemName?: string; //商品名
  price?: string; //価格
  review: string;
  linkParam: string;
}

const TopPageItemBox = ({
  imageUrl = '',
  itemName = '',
  price = '',
  review = '0',
  linkParam,
}: Props) => {
  const dispatch = useDispatch();
  const addCartFunction = () => {
    console.log('add cart');
    dispatch(addCart('77'));
  };

  const link = 'domein:::::' + linkParam;

  const starCount = parseInt(review);

  const stars = createReviewStars(
    starCount,
    '#000000',
    '#A7A7A7',
    'top_item_box'
  );

  return (
    <>
      <div className={styles.topItemBox}>
        <div className={styles.topItemBoxImageWrapper} onClick={() => {}}>
          <Image
            src={imageUrl}
            // width={236} // Specify different width values based on device or viewport size
            // height={244}
            alt="Your Image"
            fill={true}
            className={styles.positionOverWrittenRelationOnSP}
          ></Image>
        </div>

        <div className={styles.topItemInfoWrapper}>
          <div className={styles.topItemNameWrapper}>
            <p className={styles.topItemName}>{itemName}</p>
          </div>

          <p className={styles.topItemPrice}>
            <span className={styles.priceSpan}>価格</span>¥{price}
          </p>
          <p className={styles.topItemReview}>
            <span>
              <span className={styles.priceSpan}>クチコミ</span>

              {stars}
            </span>
          </p>
          {/* <div>
            <a href={link}>商品詳細へ</a>
          </div> */}
        </div>

        <div className={styles.topItemButtonWrapper}>
          <button
            className={styles.topItemButton}
            onClick={() => addCartFunction()}
          >
            カートへ
          </button>
        </div>
      </div>
    </>
  );
};

const ItemBox = ({
  imageUrl = '',
  itemName = '',
  price = '',
  review = '0',
  linkParam,
}: Props) => {
  const dispatch = useDispatch();
  const addCartFunction = () => {
    console.log('add cart');
    dispatch(addCart('77'));
  };

  const link = 'domein:::::' + linkParam;

  const starCount = parseInt(review);

  const stars = createReviewStars(
    starCount,
    '#000000',
    '#A7A7A7',
    'top_item_box'
  );

  return (
    <>
      <div className={styles.itemBox}>
        <div className={styles.itemBoxImageWrapper} onClick={() => {}}>
          <Image
            src={imageUrl}
            // width={236} // Specify different width values based on device or viewport size
            // height={244}
            alt="Your Image"
            fill={true}
            className={styles.positionOverWrittenRelationOnSP}
          ></Image>
        </div>

        <div className={styles.itemBoxInfoWrapper}>
          <div className={styles.itemBoxNameWrapper}>
            <p className={styles.itemBoxName}>{itemName}</p>
          </div>

          <p className={styles.itemBoxPrice}>
            <span className={styles.priceSpan}>価格</span>¥{price}
          </p>
          <p className={styles.itemBoxReview}>
            <span>
              <span className={styles.priceSpan}>クチコミ</span>

              {stars}
            </span>
          </p>
          <div className={styles.itemBoxLinkWrapper}>
            <a className={styles.itemBoxLink} href={link}>
              商品詳細へ
            </a>
            <svg
              width="5"
              height="9"
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.353553"
                y1="0.646447"
                x2="3.88909"
                y2="4.18198"
                stroke="black"
              />
              <path d="M4.17189 4.22118L0.519162 7.8739" stroke="black" />
            </svg>
          </div>
        </div>

        <div className={styles.itemBoxButtonWrapper}>
          <button
            className={styles.itemBoxButton}
            onClick={() => addCartFunction()}
          >
            カートへ
          </button>
        </div>
      </div>
    </>
  );
};

export { TopPageItemBox as TopPageItemBox, ItemBox as ItemBox };
