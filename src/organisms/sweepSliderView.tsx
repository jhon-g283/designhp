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

  // スライドの高さの値、vhを画面の幅（メディアクエリのブレークポイント）ごとに設定する
  const vh = 100;
  const vhSmaller768 = `${vh * 1}vh`;
  const vhSmaller468 = `${vh * 0.7}vh`;
  // スライダー
  const sliderArea = (
    <>
      <Splide
        hasTrack={false}
        options={{
          // autoHeight: true,
          height: '100vh',
          breakpoints: {
            // 768p以下
            768: {
              height: vhSmaller768,
            },
            // 468px以下
            468: {
              height: vhSmaller468,
            },
          },

          lazyLoad: true,
          autoplay: false,
          rewind: true,
          // padding: 100,
          perPage: 1, //スライドは１枚ずつ
          gap: '10%', //各スライドの感覚
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
                      className={styles.imgPC}
                    ></Image>
                  </div>

                  <p className={`${styles.fvCopyWrite} ${styles.imgPC}`}>
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
                  <div className={`${styles.imgSP} ${styles.fvImage1} `}>
                    <Image
                      src="/imgSweep/FVTopImage1SP.jpg"
                      // width={664} // Specify different width values based on device or viewport size
                      // height={827}
                      alt="Your Image"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      className={styles.FVOverWritten}
                    ></Image>
                  </div>
                </div>
              </div>

              {/* 背景画像 */}
              <div className={`${styles.fvbackImage1Wrapper}`}>
                <Image
                  src="/imgSweep/backGroundFV1PC.jpg"
                  // width={1980} // Specify different width values based on device or viewport size
                  // height={893}
                  alt="Your Image"
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  className={styles.FVBKOverWritten}
                  // className={` ${styles.fvbackImage1} `}
                ></Image>
              </div>

              {/* <Image
                src="/imgSweep/backGroundFV1SP.jpg"
                // width={1980} // Specify different width values based on device or viewport size
                // height={893}
                alt="Your Image"
                fill={true}
                className={`${styles.imgSP} ${styles.fvbackImage1} `}
              ></Image> */}
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* 2枚目 */}
            <div className={`${styles.fvImageWrapper1} `}>
              <div className={styles.fvInnerWrapper}>
                {/* ロゴ部分 */}
                <div className={styles.fvLogoArea2}>
                  {/* ここでフォント上書き */}
                  <div className={styles.logoImageWrapper2}>
                    <p>夏季限定</p>
                  </div>

                  <div className={`${styles.fvCopyWrite2} ${styles.imgPC}`}>
                    <p className={`${styles.wordLemonade}`}>レモネード味</p>
                    <p className={`${styles.wordNowOnSale} ${styles.imgPC}`}>
                      期間限定販売中
                    </p>
                    <p className={`${styles.wordLimited} ${styles.imgPC}`}>
                      Limited Summer Flavor
                    </p>
                  </div>
                </div>

                <div className={styles.fvImageArea}>
                  <Image
                    src="/imgSweep/FVTopImage2PC.jpg"
                    width={880} // Specify different width values based on device or viewport size
                    height={674}
                    alt="Your Image"
                    // fill={true}

                    className={`${styles.imgPC} ${styles.fvImage1} `}
                  ></Image>
                  <div className={`${styles.imgSP} ${styles.fvImage1} `}>
                    <Image
                      src="/imgSweep/FVTopImage2SP.png"
                      // width={664} // Specify different width values based on device or viewport size
                      // height={827}
                      alt="Your Image"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      className={styles.FVOverWritten}
                    ></Image>
                  </div>
                </div>
              </div>

              {/* 背景画像 */}
              <div className={styles.fvbackImage1Wrapper}>
                <Image
                  src="/imgSweep/backGroundFV2PC.jpg"
                  // width={1980} // Specify different width values based on device or viewport size
                  // height={893}
                  alt="Your Image"
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  className={styles.FVBKOverWritten}
                  // className={` ${styles.fvbackImage1} `}
                ></Image>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            {/* ３枚目 */}
            <div className={styles.fvImageWrapper1}>
              <div className={styles.fvInnerWrapper}>
                {/* ロゴ部分 */}
                <div className={styles.fvLogoArea3}>
                  {/* ここでフォント上書き */}

                  <div className={`${styles.fvCopyWrite3} ${styles.imgPC}`}>
                    <p className={`${styles.wordSweepCafe}`}>Sweep Cafe</p>

                    <div className={styles.businessHours}>
                      <p className={` ${styles.imgPC}`}>場所</p>
                      <p className={` ${styles.imgPC}`}>渋谷スカイビル5F</p>
                    </div>

                    <div className={styles.businessHours}>
                      <p className={` ${styles.imgPC}`}>
                        <p className={` ${styles.imgPC}`}>営業</p>
                      </p>
                      <div>
                        <p className={` ${styles.imgPC}`}>Open: 10:00</p>
                        <p className={` ${styles.imgPC}`}>Close: 20:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.fvImageArea}>
                  <Image
                    src="/imgSweep/FVTopImage3PC.jpg"
                    width={880} // Specify different width values based on device or viewport size
                    height={674}
                    alt="Your Image"
                    // fill={true}

                    className={`${styles.imgPC} ${styles.fvImage1} `}
                  ></Image>
                  <div className={`${styles.imgSP} ${styles.fvImage1} `}>
                    <Image
                      src="/imgSweep/FVTopImage3SP.png"
                      // width={664} // Specify different width values based on device or viewport size
                      // height={827}
                      alt="Your Image"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      className={styles.FVOverWritten}
                    ></Image>
                  </div>
                </div>
              </div>

              {/* 背景画像 */}
              <div className={styles.fvbackImage1Wrapper}>
                <Image
                  src="/imgSweep/backGroundFV3PC.jpg"
                  // width={1980} // Specify different width values based on device or viewport size
                  // height={893}
                  alt="Your Image"
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  className={styles.FVBKOverWritten}
                  // className={` ${styles.fvbackImage1} `}
                ></Image>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
        <div className={`splide__arrows ${styles.imgPC}`}>
          <PrevButton />

          <NextButton />
        </div>
      </Splide>
    </>
  );

  return <>{sliderArea}</>;
};

export default SliderComponent;
