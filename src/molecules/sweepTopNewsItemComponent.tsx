import Image from 'next/image';
import { default as Div } from '../common/observeDivComponent';
import styles from '../../styles/sweep/sweep.module.css';

// ヘッダー部分のコンポーネント

interface Props {
  topicType?: string; //ニュースタイプ
  imageUrl: string; //画像Url
  date?: string; //日付
  title?: string; //タイトル
}

const NewsItemTop = ({
  topicType = '',
  imageUrl = '',
  date = '',
  title: text = '',
}: Props) => {
  return (
    <>
      <div className={styles.topicTypeWrrapper}>
        <p className={styles.topicType}>{topicType}</p>
      </div>

      <Image
        // src="/img/FirstSectionImg2-2.png"
        src={imageUrl}
        width={236} // Specify different width values based on device or viewport size
        height={244}
        alt="Your Image"
        className={styles.imgPC}
      ></Image>
      <div className={styles.newsTitleWrapper}>
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
