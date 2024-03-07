import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import styled from 'styled-components';
// デフォルトのテーマ
// import '@splidejs/react-splide/css';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

// ヘッダー部分のコンポーネント
const SliderComponent = () => {
  const width = 83;
  // ページャー左
  const PagerButtonLeft = styled.button`
    @media (min-width: 768px) {
      &::before {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='2'><rect width='100%' height='100%' fill='white' /></svg>");

        height: 2px;
        top: 0px;

        left: 0px;
        position: absolute;
      }
    }
  `;

  // ページャー右
  const PagerButtonRight = styled.button`
    @media (min-width: 768px) {
      &::after {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='2'><rect width='100%' height='100%' fill='white' /></svg>");

        height: 2px;
        top: 0px;

        right: 0px;
        position: absolute;
      }
    }
  `;

  // Prevボタン
  const AddPagerClassPrevButton = () => {
    return (
      <PagerButtonLeft className="splide__arrow splide__arrow--prev slider-button  slider-arrow-prev">
        <span className="buttonText">PREV</span>
      </PagerButtonLeft>
    );
  };

  // Nextボタン
  const AddPagerClassNextButton = () => {
    return (
      <PagerButtonRight className="splide__arrow splide__arrow--next slider-button slider-arrow-next">
        <span className="buttonText">NEXT</span>
      </PagerButtonRight>
    );
  };

  // ボタン作成
  const PrevButton = AddPagerClassPrevButton;
  const NextButton = AddPagerClassNextButton;

  // スライダー
  const sliderArea = (
    <>
      <Splide
        hasTrack={false}
        options={{
          // autoHeight: true,
          height: 893,

          lazyLoad: true,
          autoplay: false,
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
              <div className={styles.fvInnerWrapper}>
                {/* ロゴ部分 */}
                <div className={styles.fvLogoArea}>
                  <div className={styles.logoImageWrapper}>
                    <Image
                      src="/img/FVLogo.svg"
                      // width={284} // Specify different width values based on device or viewport size
                      // height={83}
                      alt="Your Image"
                      fill={true}
                      className={styles.imgOnlyPC}
                    ></Image>
                  </div>

                  <p className={styles.fvCopyWrite}>
                    食べるとスッキリ<br></br>起きれるチョコレート
                  </p>
                </div>

                <div className={styles.fvImageArea}>
                  <Image
                    src="/imgSweep/FVTopImage1PC.jpg"
                    width={880} // Specify different width values based on device or viewport size
                    height={674}
                    alt="Your Image"
                    // fill={true}

                    className={`${styles.imgPC} ${styles.fvImage1} `}
                  ></Image>
                </div>
              </div>

              {/* 背景画像 */}
              <Image
                src="/imgSweep/backGroundFV1PC.jpg"
                width={1980} // Specify different width values based on device or viewport size
                height={893}
                alt="Your Image"
                // fill={true}

                className={`${styles.imgPC} ${styles.fvbackImage1} `}
              ></Image>
              <Image
                src="/imgSweep/backGroundFV1SP.jpg"
                // width={1980} // Specify different width values based on device or viewport size
                // height={893}
                alt="Your Image"
                fill={true}
                className={`${styles.imgSP} ${styles.fvbackImage1} `}
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
              // className={styles.imgPC}
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
