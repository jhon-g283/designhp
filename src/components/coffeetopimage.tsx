import Image from 'next/image';

interface Props {
  useClassName: string;
  imagePath: string;
}

// トップ部分の画像コンポーネント
const TopImage = ({ useClassName, imagePath }: Props) => {
  return (
    <div className={useClassName}>
      <Image
        src={imagePath}
        // src="/img/hero2.jpg"
        width={1500} // Specify different width values based on device or viewport size
        height={727}
        alt="Your Image"
        layout="responsive"
      ></Image>
    </div>
  );
};

export default TopImage;
