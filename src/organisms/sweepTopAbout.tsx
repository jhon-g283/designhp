import { useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';

// ヘッダー部分のコンポーネント
const AboutComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.newsConponentWrapper}>
        <div>
          <SectionTitle
            className={`${styles.titleAbout} ${styles.sectionHeader}`}
          >
            About
          </SectionTitle>
          <SectionSubTitle>Seepとは？</SectionSubTitle>
          <div>
            <a>Sweet</a>
            <span>X</span>
            <a>Sleep</a>
          </div>
          <div className={styles.textWrap}>
            <p>睡眠を改善するチョコレート</p>
          </div>
          <div className={styles.textWrap}>
            <p>ストレスを改善する香り</p>
          </div>
          <div className={styles.textWrap}>
            <p>血糖値を穏やかに、ベッドで自然な眠気</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
