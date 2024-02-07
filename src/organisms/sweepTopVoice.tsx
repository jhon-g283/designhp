import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import ReviewItem from '../molecules/sweepReviewItemComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const VoiceComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.voiceConponentWrapper}>
        <div>
          <SectionTitle
            className={`${styles.titleAbout} ${styles.sectionHeader}`}
          >
            VOICE
          </SectionTitle>
          <SectionSubTitle>お客様の声</SectionSubTitle>
        </div>
      </div>
      <ReviewItem />
    </>
  );
};

export default VoiceComponent;
