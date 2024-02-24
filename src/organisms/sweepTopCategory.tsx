import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import {
  ItemLinkSize,
  ItemLinkCategory,
} from '../molecules/sweepItemLinkComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const CategoryComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.categoryConponentWrapper}>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet8}></div>
        </Div>
        <div className={styles.categoryTextWrapper}>
          <div className={styles.sectionSubTitleWrapper}>
            <SectionSubTitle className={styles.sectionSubTitle}>
              カテゴリから
            </SectionSubTitle>
          </div>
          <p className={styles.paragraph}>
            こだわりの素材を使った様々な味や種類の商品から気になるものをお選びいただけます。
          </p>
        </div>

        <div className={styles.categoryImageOuterWrapper}>
          <div className={styles.categoryImageWrapper}>
            <Image
              src="/img/FirstSectionImg1.png"
              // width={1200} // Specify different width values based on device or viewport size
              // height={200}
              alt="Your Image"
              fill={true}
              className={styles.imgPC}
            ></Image>
          </div>
        </div>

        <div className={styles.categoryListWrapper}>
          <div className={styles.categoryList}>
            <ItemLinkCategory
              itemName="ベーシック"
              subName="Basic"
              imageUrl="/img/FirstSectionImg1.png"
            />
            <ItemLinkCategory
              itemName="キャラメル"
              subName="caramel"
              imageUrl="/img/FirstSectionImg1.png"
            />
            <ItemLinkCategory
              itemName="ベジタブル"
              subName="vegetable"
              imageUrl="/img/FirstSectionImg1.png"
            />
            <ItemLinkCategory
              itemName="ミルク"
              subName="Milk"
              imageUrl="/img/FirstSectionImg1.png"
            />
            <ItemLinkCategory
              itemName="ストロベリー"
              subName="Strawberry"
              imageUrl="/img/FirstSectionImg1.png"
            />
            <ItemLinkCategory
              itemName="サクラ"
              subName="Sakura"
              imageUrl="/img/FirstSectionImg1.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryComponent;
