import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';

// ヘッダー部分のコンポーネント

interface Props {
  imageUrl: string; //画像Url
  itemName?: string; //日付
  subName?: string; //タイトル
}

const CategoryLink = ({
  imageUrl = '',
  itemName = '',
  subName = '',
}: Props) => {
  return (
    <>
      <div className={styles.itemLink}>
        <Image
          // src="/img/FirstSectionImg2-2.png"
          src={imageUrl}
          width={129} // Specify different width values based on device or viewport size
          height={110}
          alt="Your Image"
          className={styles.imgPC}
        ></Image>
        <div className={styles.itemNameWrapper}>
          <p>{itemName}</p>
          <p>{subName}</p>
        </div>
      </div>
    </>
  );
};

export { CategoryLink as CategoryLink };
