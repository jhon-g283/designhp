import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import styled from 'styled-components';
// デフォルトのテーマ
// import '@splidejs/react-splide/css';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

// ヘッダー部分のコンポーネント
const SliderComponent = () => {
  const width = 83;
  const PagerButtonLeft = styled.button`
    @media (min-width: 768px) {
      &::before {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='2'><rect width='100%' height='100%' fill='white' /></svg>");

        height: 2px;
        top: 0px;
        padding-top: 7px;

        left: 0px;
        position: absolute;
      }
    }
  `;

  const PagerButtonRight = styled.button`
    @media (min-width: 768px) {
      &::after {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='2'><rect width='100%' height='100%' fill='white' /></svg>");

        height: 2px;
        top: 0px;
        padding-top: 7px;

        right: 0px;
        position: absolute;
      }
    }
  `;

  // Prevボタン
  const AddPagerClassPrevButton = () => {
    return (
      <PagerButtonLeft className="splide__arrow splide__arrow--prev slider-arrow-prev">
        PREV
      </PagerButtonLeft>
    );
  };

  // Nextボタン
  const AddPagerClassNextButton = () => {
    return (
      <PagerButtonRight className="splide__arrow splide__arrow--next slider-arrow-next">
        NEXT
      </PagerButtonRight>
    );
  };

  const PrevButton = AddPagerClassPrevButton;
  const NextButton = AddPagerClassNextButton;

  const sliderArea = (
    <>
      <Splide
        hasTrack={false}
        options={{
          width: '100%',
          lazyLoad: true,
          autoplay: true,
          rewind: true,
          // padding: 100,
          perPage: 1,
          gap: '10%',
        }}
        aria-label="お気に入りの写真"
      >
        <SplideTrack>
          <SplideSlide>
            <div className={styles.fvImageWrapper1}>
              <Image
                src="/img/FirstSectionImg1.png"
                // width={1200} // Specify different width values based on device or viewport size
                // height={200}
                alt="Your Image"
                fill={true}
                // className={styles.imgPC}
              ></Image>
            </div>
          </SplideSlide>
          <SplideSlide>
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
          <PrevButton />

          <NextButton />
        </div>
      </Splide>
    </>
  );

  return <>{sliderArea}</>;
};

export default SliderComponent;
