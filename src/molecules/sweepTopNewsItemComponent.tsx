import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';

// ヘッダー部分のコンポーネント

interface Props {
  topickType?: string; //ニュースタイプ
  imageUrl: string; //画像Url
  date?: string; //日付
  title?: string; //タイトル
}

const NewsItemTop = ({
  topickType = '',
  imageUrl = '',
  date = '',
  title: text = '',
}: Props) => {
  return (
    <>
      <p>{topickType}</p>
      <Image
        // src="/img/FirstSectionImg2-2.png"
        src={imageUrl}
        width={236} // Specify different width values based on device or viewport size
        height={244}
        alt="Your Image"
        className={styles.imgPC}
      ></Image>
      <div className={styles.newsTitleWrapper}>
        <p>{date}</p>
        <p>{text}</p>
      </div>
    </>
  );
};

export { NewsItemTop };
