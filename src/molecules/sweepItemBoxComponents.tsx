import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';

// ヘッダー部分のコンポーネント

interface Props {
  imageUrl: string; //画像Url
  itemName?: string; //商品名
  price?: string; //価格
  review: string;
  linkParam: string;
}
const star = (
  <svg
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.37976 11.738L3.87776 7.286L0.265758 4.864H4.68976L6.27176 0.0899992L7.88176 4.864H12.2778L8.66576 7.286L10.1918 11.738L6.27176 8.896L2.37976 11.738Z"
      fill="black"
    />
  </svg>
);

// レビューの星を生成する処理
const createReviewStars = (reviewCount: number) => {
  let starArray = [];

  for (let i = 0; i < 5; i++) {
    // レビューの数値より低い場合は星の色を黒くする。
    const flag = i < reviewCount;
    const color = flag ? '#000000' : '#A7A7A7';
    //
    const star = (
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.37976 11.738L3.87776 7.286L0.265758 4.864H4.68976L6.27176 0.0899992L7.88176 4.864H12.2778L8.66576 7.286L10.1918 11.738L6.27176 8.896L2.37976 11.738Z"
          fill={color}
        />
      </svg>
    );
    // 配列に詰めて返却
    starArray.push(star);
  }
  return starArray;
};

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

  const stars = createReviewStars(starCount);

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
