import Image from 'next/image';
import styles from '../../styles/cafe/cafe.module.css';
interface Props {
  useClassName: string;
  imagePath: string;
  imagePathSP?: string;
}

// トップ部分の画像コンポーネント
const TopImage = ({ useClassName, imagePath, imagePathSP }: Props) => {
  return (
    <div className={useClassName}>
      <Image
        src={imagePath}
        // src="/img/hero2.jpg"
        width={1500} // Specify different width values based on device or viewport size
        height={727}
        alt="Your Image"
        layout="responsive"
        className={styles.imgPC}
      ></Image>
      <Image
        src={imagePathSP || ''}
        width={200} // Specify different width values based on device or viewport size
        height={200}
        alt="Your Image"
        layout="responsive"
        className={styles.imgSP}
      ></Image>
    </div>
  );
};

export default TopImage;
