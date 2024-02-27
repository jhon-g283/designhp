import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import { createReviewStars } from '../common/sweep/createReviewStars';

// ヘッダー部分のコンポーネント

interface Props {
  imageUrl: string; //画像Url
  itemName?: string; //商品名
  price?: string; //価格
  review: string;
  linkParam: string;
}

const addCartFunction = () => {
  console.log('add cart');
};

const TopPageItemBox = ({
  imageUrl = '',
  itemName = '',
  price = '',
  review = '0',
  linkParam,
}: Props) => {
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
            // src="/img/FirstSectionImg2-2.png"
            src={imageUrl}
            // width={236} // Specify different width values based on device or viewport size
            // height={244}
            alt="Your Image"
            fill={true}
            className={styles.imgPC}
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
            <span className={styles.priceSpan}>クチコミ</span>

            {stars}
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
  review = '',
  linkParam,
}: Props) => {
  const link = 'domein:::::' + linkParam;
  return (
    <>
      <div className={styles.itemBox}>
        <Image
          // src="/img/FirstSectionImg2-2.png"
          src={imageUrl}
          width={236} // Specify different width values based on device or viewport size
          height={244}
          alt="Your Image"
          className={styles.imgPC}
        ></Image>
        <div className={''}>
          <p>{itemName}</p>
          <p>価格¥{price}</p>
          <p>{review}</p>
          <div>
            <a href={link}>商品詳細へ</a>
          </div>

          <button>カートへ</button>
        </div>
      </div>
    </>
  );
};

export { TopPageItemBox as TopPageItemBox };
