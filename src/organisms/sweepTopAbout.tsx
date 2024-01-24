import { useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import Title from '../atoms/sweepTitleComponent';

// ヘッダー部分のコンポーネント
const AboutComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.newsConponentWrapper}>
        <div>
          <Title className={`${styles.titleAbout} ${styles.sectionHeader}`}>
            About
          </Title>
          <p>Sweepとは？</p>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
