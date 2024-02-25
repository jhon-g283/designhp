// トップページテンプレ
import styles from '../../styles/sweep/sweep.module.css';

import Image from 'next/image';

// デフォルトのテーマ
import '@splidejs/react-splide/css';

// あるいは、コアスタイルのみ
// import '@splidejs/react-splide/css/core';
import Header from '../organisms/sweepHeader';
import SliderComponent from '../organisms/sweepSliderView';
import NewsComponent from '../organisms/sweepTopNews';
import AboutComponent from '../organisms/sweepTopAbout';
import CategoryComponent from '../organisms/sweepTopCategory';
import PickUpComponent from '../organisms/sweepTopPickUp';
import CampaignComponent from '../organisms/sweepTopCampaign';
import ProductComponent from '../organisms/sweepTopProduct';
import VoiceComponent from '../organisms/sweepTopVoice';
import SNSComponent from '../organisms/sweepTopSNS';

const SweepTopPageTemplate = () => {
  return (
    <>
      <div className="sweep">
        {/* ヘッダー */}
        <Header />
        {/* FV */}
        <div className={styles.firstViewArea}>
          <SliderComponent />
        </div>
        {/* コンテンツ部分 */}
        <div className={styles.mainWrapper}>
          {/* news */}

          <NewsComponent />
          {/* about */}
          <AboutComponent />
          <ProductComponent />
          <CategoryComponent />
          <PickUpComponent />
          <CampaignComponent />
          <VoiceComponent />
          <SNSComponent />
        </div>

        <p>footer</p>
      </div>
    </>
  );
};

export default SweepTopPageTemplate;
