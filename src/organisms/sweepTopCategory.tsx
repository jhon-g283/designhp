import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import { CategoryLink } from '../molecules/sweepItemLinkComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const CategoryComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.categoryConponentWrapper}>
        <SectionSubTitle>カテゴリから</SectionSubTitle>
        <p>
          こだわりの素材を使った様々な味や種類の商品から気になるものをお選びいただけます。
        </p>

        <div className={styles.aboutImage2}>
          <Image
            src="/img/FirstSectionImg1.png"
            // width={1200} // Specify different width values based on device or viewport size
            // height={200}
            alt="Your Image"
            fill={true}
            // className={styles.imgPC}
          ></Image>
        </div>
        <div>
          <CategoryLink
            itemName="１ヶ月セット"
            subName="1Week"
            imageUrl="/img/FirstSectionImg1.png"
          />
          <CategoryLink
            itemName="１ヶ月セット"
            subName="1Week"
            imageUrl="/img/FirstSectionImg1.png"
          />
          <CategoryLink
            itemName="１ヶ月セット"
            subName="1Week"
            imageUrl="/img/FirstSectionImg1.png"
          />
          <CategoryLink
            itemName="１ヶ月セット"
            subName="1Week"
            imageUrl="/img/FirstSectionImg1.png"
          />
          <CategoryLink
            itemName="１ヶ月セット"
            subName="1Week"
            imageUrl="/img/FirstSectionImg1.png"
          />
          <CategoryLink
            itemName="１ヶ月セット"
            subName="1Week"
            imageUrl="/img/FirstSectionImg1.png"
          />
        </div>
      </div>
    </>
  );
};

export default CategoryComponent;
