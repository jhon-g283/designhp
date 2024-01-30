import { useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import Image from 'next/image';

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
      <div className={styles.aboutImageArea}>
        <div>
          <p>SLEEP</p>
          <div className={styles.aboutImage1}>
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

        <div>
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
          <p>SWEETS</p>
        </div>
      </div>
      <div className={styles.textWrap}>
        <p>血糖値を穏やかに、ベッドで自然な眠気</p>
      </div>
      <p>
        昨日はよく眠れたと最後に思えたのはいつですか？
        夜の睡眠は翌日からの人生の明るさと切っても切れない関係。
        食後に一口食べれば睡眠薬に頼らななくても自然と眠りの質が 改善されます。
      </p>
    </>
  );
};

export default AboutComponent;
