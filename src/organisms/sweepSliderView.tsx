import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import styled from 'styled-components';
// デフォルトのテーマ
import '@splidejs/react-splide/css';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

// ヘッダー部分のコンポーネント
const SliderComponent = () => {
  const width = 83;
  const PagerButton = styled.button`
    @media (min-width: 768px) {
      &::before {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='2'><rect width='100%' height='100%' fill='white' /></svg>");
        // display: block;
        // width: ${width}px;
        height: 2px;
        top: 0px;
        padding-top: 7px;

        left: 0px;
        position: absolute;
      }
    }
  `;

  const AddClassNameButton = () => {
    return (
      <PagerButton className="splide__arrow splide__arrow--prev slider-arrow-right">
        PREV
      </PagerButton>
    );
  };

  const PrevButton = AddClassNameButton;

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
          {/* <button className="splide__arrow splide__arrow--prev slider-arrow-right">
            Prev
          </button> */}
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>
      </Splide>
    </>
  );

  return <>{sliderArea}</>;
};

export default SliderComponent;
