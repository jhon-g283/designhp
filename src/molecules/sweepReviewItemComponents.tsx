import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import { createReviewStars } from '../common/sweep/createReviewStars';

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

  const starCount = parseInt(review);

  const stars = createReviewStars(
    starCount,
    '#FFFFFF',
    '#A7A7A7',
    'review_item_box'
  );

  return (
    <>
      <div className={styles.reviewBoxWrapper}>
        <div className={styles.reviewImageWrapper}>
          <Image
            // src="/img/FirstSectionImg2-2.png"
            src={imageUrl}
            // width={236} // Specify different width values based on device or viewport size
            // height={244}
            alt="Your Image"
            fill={true}
            className={styles.positionOverWrittenRelationOnSP}
          ></Image>
        </div>

        <div className={styles.reviewTextWrapper}>
          <div className={styles.reviewTextInnerWrapper}>
            <div className={styles.reviewItemNameWrapper}>
              <a className={styles.reviewItemName}>{itemName}</a>
              <a className={styles.reviewItemPrice}>¥{price}</a>
            </div>

            <div className={styles.reviewInfoWrapper}>
              <a className={styles.reviewReviewer}>{reviewerInfo}</a>
              <span className={styles.reviewStar}>{stars}</span>
            </div>

            <div className={styles.reviewCommentWrapper}>
              <p className={styles.reviewCommentWord}>コメント</p>
              <p className={styles.reviewComment}>{commentText}</p>
              {/* 処理追加 */}
            </div>
          </div>

          <div className={styles.reviewLinkWrapper}>
            <a className={styles.reviewLink} href={link}>
              商品ページへ
            </a>
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.35355"
                y1="0.646447"
                x2="4.88909"
                y2="4.18198"
                stroke="white"
              />
              <path d="M4.62404 4.27538L0.971311 7.9281" stroke="white" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
