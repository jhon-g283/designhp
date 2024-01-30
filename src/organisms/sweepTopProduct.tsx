import { useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const ProductComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.productConponentWrapper}>
        <div>
          <SectionTitle
            className={`${styles.titleProduct} ${styles.sectionHeader}`}
          >
            Product
          </SectionTitle>
          <SectionSubTitle>商品を探す</SectionSubTitle>
          <div>
            <p>
              サイズとカテゴリーの中からお好みのセット、 商品をお選びください。
            </p>
          </div>
          <div className={styles.lineUpButtonWrapper}>
            <div className={styles.lineUpButton}>
              <a>READ MORE</a>
            </div>
          </div>
        </div>
        <div>
          <SectionSubTitle>商品を探す</SectionSubTitle>
          <div>
            <p>
              サイズとカテゴリーの中からお好みのセット、 商品をお選びください。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
