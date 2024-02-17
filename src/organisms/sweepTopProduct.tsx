import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import { CategoryLink } from '../molecules/sweepItemLinkComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const ProductComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.productConponentWrapper}>
        <div>
          <div className={styles.sectionHeaderWrapper}>
            <SectionTitle
              className={`${styles.titleProduct} ${styles.sectionHeader}`}
            >
              Product
            </SectionTitle>
          </div>

          <div>
            <div className={styles.sectionSubTitleWrapper}>
              <SectionSubTitle className={styles.sectionSubTitle}>
                商品を探す
              </SectionSubTitle>
            </div>

            <div>
              <p>
                サイズとカテゴリーの中からお好みのセット、
                商品をお選びください。
              </p>
            </div>
            <div className={styles.lineUpButtonWrapper}>
              <div className={styles.lineUpButton}>
                <a>READ MORE</a>
              </div>
            </div>
          </div>
          <div>
            <SectionSubTitle>サイズから</SectionSubTitle>
            <div>
              <p>
                セットサイズは１週間セットからご用意しております。
                長い期間味わっていきたい方は１ヶ月セット、
                友人・ご家族で分け合いたい方はさらに量が多い
                エクストラサイズもございます。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productWrapper}>
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
        </div>

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
      </div>
    </>
  );
};

export default ProductComponent;
