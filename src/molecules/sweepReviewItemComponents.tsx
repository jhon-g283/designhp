import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';

// ヘッダー部分のコンポーネント

interface Props {
  imageUrl?: string; //画像Url
  itemName?: string; //商品名
  price?: string; //価格
  review?: string;
  linkParam?: string;
  reviewerInfo?: string;
  commentText?: string;
}

const ReviewItem = ({
  imageUrl = '',
  itemName = '',
  price = '',
  review = '',
  linkParam = '',
  reviewerInfo = '',
  commentText = '',
}: Props) => {
  const link = 'domein:::::' + linkParam;
  return (
    <>
      <div className={styles.reviewBoxWrapper}>
        <Image
          // src="/img/FirstSectionImg2-2.png"
          src={imageUrl}
          width={236} // Specify different width values based on device or viewport size
          height={244}
          alt="Your Image"
          className={styles.imgPC}
        ></Image>
        <div className={''}>
          <a>{itemName}</a>
          <a>{price}</a>
          <div>
            <a>{reviewerInfo}</a>
            <a>{review}</a>
          </div>
          <p>コメント</p>
          <p>{commentText}</p>

          <div>
            <a href={link}>商品詳細へ</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
