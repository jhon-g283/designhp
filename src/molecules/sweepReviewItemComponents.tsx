import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import animationStyle from '../../styles/sweep/sweepanimation.module.css';
import { createReviewStars } from '../common/sweep/createReviewStars';
import { useRouter } from 'next/router';
import { ITEM_DETAIL_LINK } from '../common/sweep/setting';
// ヘッダー部分のコンポーネント

interface Props {
  imageUrl?: string; //画像Url
  itemName?: string; //商品名
  price?: number; //価格
  review?: number;
  linkParam?: string;
  reviewerInfo?: string;
  commentText?: string;
}

const ReviewItem = ({
  imageUrl = '',
  itemName = '',
  price = 0,
  review = 0,
  linkParam = '',
  reviewerInfo = '',
  commentText = '',
}: Props) => {
  // ルーターと遷移先設定
  const router = useRouter();
  const url = `${ITEM_DETAIL_LINK}?${linkParam}`;

  const starCount = review;

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
            <a
              className={`${styles.reviewLink} ${animationStyle.topItemBoxAnker}`}
              onClick={() => {
                // クリックで商品ページへ
                router.push(url);
              }}
            >
              商品ページへ
            </a>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="4.97765"
                y2="-0.5"
                transform="matrix(0.692852 0.72108 -0.721033 0.692901 2.95605 1.61963)"
                stroke="white"
              />
              <path d="M6.73341 4.20799L3.1692 7.6463" stroke="white" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
