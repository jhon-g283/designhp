// トップページテンプレ
import styles from '../../styles/sweep/sweep.module.css';

import Image from 'next/image';

// デフォルトのテーマ
import '@splidejs/react-splide/css';

// あるいは、コアスタイルのみ
// import '@splidejs/react-splide/css/core';

import SliderComponent from '../organisms/sweepSliderView';
import NewsComponent from '../organisms/sweepTopNews';
import AboutComponent from '../organisms/sweepTopAbout';
import SweepHeader from '../organisms/sweepHeader';

const SweepTopPageTemplate = () => {
  return (
    <>
      <div className="sweep">
        {/* ヘッダー */}
        <SweepHeader />
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
        </div>

        {/* {sliderTest} */}

        {/* about */}
        <p>about</p>
        {/* product */}
        <p>product</p>
        {/* pick up */}
        <p>pick up</p>
        {/* campaign */}
        <p>campaign</p>
        {/* voice */}
        <p>voice</p>
        {/* sns */}
        <p>sns</p>
        {/* footer */}
        <p>footer</p>
        <p>SWEEp</p>
      </div>
    </>
  );
};

export default SweepTopPageTemplate;
