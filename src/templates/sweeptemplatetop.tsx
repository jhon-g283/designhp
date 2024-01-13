// トップページテンプレ
import styles from '../../styles/sweep/sweep.module.css';

import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

// デフォルトのテーマ
import '@splidejs/react-splide/css';

// あるいは、コアスタイルのみ
// import '@splidejs/react-splide/css/core';

import Header from '../organisms/sweepheader';
import SliderComponent from '../organisms/sweepSliderView';

const SweepTopPageTemplate = () => {
  const sliderTest = (
    <>
      <Splide
        hasTrack={false}
        options={{
          width: '90%',
          lazyLoad: true,
          autoplay: true,
          rewind: true,
          padding: 100,
          perPage: 1,
          gap: '10%',
        }}
        aria-label="お気に入りの写真"
      >
        <SplideTrack>
          <SplideSlide>
            {/* <img src="image1.jpg" alt="Image 1"/> */}
            <p>1</p>
            <Image
              src="/img/FirstSectionImg1.png"
              width={200} // Specify different width values based on device or viewport size
              height={200}
              alt="Your Image"
              layout="responsive"
              // className={styles.imgPC}
            ></Image>
          </SplideSlide>
          <SplideSlide>
            {/* <img src="image2.jpg" alt="Image 2"/> */}
            <p>2</p>
            <Image
              src="/img/FirstSectionImg2-2.png"
              width={500} // Specify different width values based on device or viewport size
              height={400}
              alt="Your Image"
              layout="responsive"
              className={styles.imgPC}
            ></Image>
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev slider-arrow-right">
            Prev
          </button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>
      </Splide>
    </>
  );

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
        <div className={styles.mainWrapper}></div>

        {/* {sliderTest} */}

        {/* news */}
        <p>news</p>
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
