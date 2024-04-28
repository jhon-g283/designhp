import Image from 'next/image';
import { default as Div } from '../common/observeDivComponent';
import styles from '../../styles/sweep/sweep.module.css';

import { useRouter } from 'next/router';
import { NEWS_DETAIL_LINK } from '../common/sweep/setting';

// ヘッダー部分のコンポーネント

interface Props {
  id?: string;
  topicType?: string; //ニュースタイプ
  imageUrl: string; //画像Url
  date?: string; //日付
  title?: string; //タイトル
}

const NewsItemTop = ({
  id = '1',
  topicType = '',
  imageUrl = '',
  date = '',
  title: text = '',
}: Props) => {
  // ルーターと遷移先設定
  const router = useRouter();
  const url = `${NEWS_DETAIL_LINK}?id=${id}`;

  return (
    <>
      <div className={styles.topicTypeWrrapper}>
        <p className={styles.topicType}>{topicType}</p>
      </div>

      <div className={styles.newsImageWrapper}>
        <Image
          // src="/img/FirstSectionImg2-2.png"
          src={imageUrl}
          // width={236} // Specify different width values based on device or viewport size
          // height={244}
          alt="Your Image"
          fill={true}
          style={{ objectFit: 'contain' }}
          // className={styles.imgPC}
          // className={styles.FVOverWritten}
          onClick={() => {
            // クリックで商品ページへ
            router.push(url);
          }}
        ></Image>
      </div>

      <div
        className={styles.newsTitleWrapper}
        onClick={() => {
          // クリックで商品ページへ
          router.push(url);
        }}
      >
        <div className={styles.newsDateWrapper}>
          <p className={styles.newsDate}>{date}</p>
        </div>

        <div className={styles.newsTitleTextWrapper}>
          <p className={styles.newsTitleText}>{text}</p>
        </div>
      </div>
    </>
  );
};

export { NewsItemTop };
