import { useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const LineupComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.lineupFVWrapper}></div>
      <div className={styles.lineupConponentWrapper}></div>
    </>
  );
};

export default LineupComponent;
