import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import { ItemLinkSize } from '../molecules/sweepItemLinkComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const ProductComponent = () => {
  // Redux

  return (
    <>
      <div>
        <div>
          <Div
            afterClass="test"
            beforeClass="pre--"
            className="defoooo"
            once={true}
            rootMargin="0px"
          >
            <div className={styles.backGroundSheet6}></div>
          </Div>
          <div className={styles.productConponentWrapper}>
            <div className={styles.sectionHeaderWrapper}>
              <SectionTitle
                className={`${styles.titleProduct} ${styles.sectionHeader}`}
              >
                Product
              </SectionTitle>
            </div>

            <div className={styles.productTextWrapper}>
              <div className={styles.sectionSubTitleWrapper}>
                <SectionSubTitle className={styles.sectionSubTitle}>
                  商品を探す
                </SectionSubTitle>
              </div>

              <div className={styles.lineupCopntext}>
                <p className={styles.paragraph}>
                  サイズとカテゴリーの中からお好みのセット、
                  商品をお選びください。
                </p>
              </div>
              <div className={styles.lineUpButtonWrapper}>
                <div className={styles.lineUpButton}>
                  <a>LINEUP</a>
                </div>
              </div>
            </div>
          </div>
          <Div
            afterClass="test"
            beforeClass="pre--"
            className="defoooo"
            once={true}
            rootMargin="0px"
          >
            <div className={styles.backGroundSheet7}></div>
          </Div>
          <div className={styles.sizeContextWrapper}>
            <div className={styles.productImageSP}>
              <Image
                src="/imgSweep/Size_mainSP.jpg"
                // width={1200} // Specify different width values based on device or viewport size
                // height={200}
                alt="Your Image"
                fill={true}
                className={`${styles.imgSP} ${styles.positionOverWrittenRelationOnSP}`}
              ></Image>
            </div>

            <div className={styles.sizeContext}>
              <div className={styles.sectionSubTitleWrapper}>
                <SectionSubTitle className={styles.sectionSubTitle}>
                  サイズから
                </SectionSubTitle>
              </div>
              <div>
                <p className={styles.paragraph}>
                  セットサイズは１週間セットからご用意しております。
                  長い期間味わっていきたい方は１ヶ月セット、
                  友人・ご家族で分け合いたい方はさらに量が多い
                  エクストラサイズもございます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.produtlineupSizeWrapper}>
        <div className={styles.produtlineupSizeInnerWrapper}>
          <div>
            <ItemLinkSize
              itemName="1週間セット"
              subName="1Week"
              imageUrl="/imgSweep/1week_set.jpg"
            />
            <ItemLinkSize
              itemName="１ヶ月セット"
              subName="1Month"
              imageUrl="/imgSweep/1Month_set.jpg"
            />
            <ItemLinkSize
              itemName="エクストラ"
              subName="Extra"
              imageUrl="/imgSweep/Extra_set.jpg"
            />
          </div>

          <div className={styles.productImage}>
            <Image
              src="/imgSweep/Size_main.jpg"
              // width={1200} // Specify different width values based on device or viewport size
              // height={200}
              alt="Your Image"
              fill={true}
              className={styles.imgPC}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
