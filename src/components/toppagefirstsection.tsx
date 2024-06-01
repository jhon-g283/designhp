// Topページの最初のセクション

import styles from '../../styles/cafe/cafe.module.css';
import stylesAnimation from '../../styles/cafe/cafeanimation.module.css';
import Image from 'next/image';
import SectionTitleComp from './coffeesectiontitle';
import ExplainSectionComp from './coffeeexplainsection';
import MoreButtonComp from './morebutton';
import InViewWrapper from '../common/observecomponent';

import BackGroundImg from '../../public/img/firstbackbroundimg.png';

// ToDo
// 完成したらクラス名とテキストを引数にして出し分けできるようにする
// マージンとパディングも調整するように修正」

const TextBlackConsept = (
  <>
    <InViewWrapper
      afterClass={stylesAnimation.slideinLeft1}
      beforeClass={''}
      once={true}
      rootMargin="10px"
    >
      <div className={styles.topFirstWiteBack}>
        <InViewWrapper
          afterClass={stylesAnimation.textFeedIn}
          beforeClass={''}
          once={true}
          rootMargin="10px"
        >
          <p>Concept</p>
        </InViewWrapper>
      </div>
    </InViewWrapper>
  </>
);

const TextBalckFor = (
  <>
    <InViewWrapper
      afterClass={stylesAnimation.slideinLeft2}
      beforeClass={''}
      once={true}
      rootMargin="10px"
    >
      <div className={styles.topFirstWiteBack2}>
        <InViewWrapper
          afterClass={stylesAnimation.textFeedIn}
          beforeClass={''}
          once={true}
          rootMargin="10px"
        >
          <p>
            <span className={styles.forCreater}>”クリエイターのため”</span>
            に作られたカフェ
          </p>
        </InViewWrapper>
      </div>
    </InViewWrapper>
  </>
);

const TextWite = (
  <>
    <p>
      当店ではクリエイティブなアイデアを生み出すために
      以下をご用意しております。
    </p>
  </>
);

const ListWite = (
  <>
    <p>・Wi-Fiやコンセントなどの機材環境</p>
    <p>・リラックスしてアイデアを練り上げられる空間</p>
  </>
);

const BlackBackGroundDiv = (
  <>
    <InViewWrapper
      afterClass={stylesAnimation.slideinLeft2}
      beforeClass={''}
      once={true}
      rootMargin="10px"
    >
      <div className={styles.topFirstBlackBack}>
        {TextWite}
        {ListWite}
      </div>
    </InViewWrapper>
  </>
);

// ToDo
const Image1 = (
  <>
    <InViewWrapper
      afterClass={stylesAnimation.feedinTestB}
      beforeClass={''}
      once={true}
      rootMargin="10px"
    >
      <div className={styles.sectionImage1}>
        <Image
          src="/img/FirstSectionImg1.png"
          width={200} // Specify different width values based on device or viewport size
          height={200}
          alt="Your Image"
          layout="responsive"
          // className={styles.imgPC}
        ></Image>
        {/* <Image
        src="/img/FirstSectionImg1SP.jpg"
        width={200} // Specify different width values based on device or viewport size
        height={200}
        alt="Your Image"
        layout="responsive"
        className={styles.imgSP}
      ></Image> */}
      </div>
    </InViewWrapper>
  </>
);
const Image1Wrapper = (
  <>
    <div className={styles.textWrapper1}>
      {TextBlackConsept}
      {TextBalckFor}
      {BlackBackGroundDiv}
    </div>
    <div className={styles.Image1Wrapper}>{Image1}</div>
  </>
);

const Image2 = (
  <>
    {/* <InViewWrapper
      afterClass={stylesAnimation.imgFeedIn2}
      beforeClass={''}
      once={true}
      rootMargin="10px"
    > */}
    <div className={styles.sectionImage2}>
      <Image
        src="/img/FirstSectionImg2-2.png"
        width={500} // Specify different width values based on device or viewport size
        height={400}
        alt="Your Image"
        layout="responsive"
        className={styles.imgPC}
      ></Image>
      <Image
        src="/img/FirstSectionImg2SP.jpg"
        width={200} // Specify different width values based on device or viewport size
        height={200}
        alt="Your Image"
        layout="responsive"
        className={styles.imgSP}
      ></Image>
    </div>
    {/* </InViewWrapper> */}
  </>
);

const TextBlackImage2 = (
  <>
    {/* <InViewWrapper
      afterClass={stylesAnimation.slideinLeft3}
      beforeClass={''}
      once={true}
      rootMargin="10px"
    > */}
    <div className={styles.textBlackImage2}>
      <p>アイデアが湧く癒しの空間</p>
    </div>
    {/* </InViewWrapper> */}
  </>
);

const image2Wrapper = (
  <>
    <InViewWrapper
      afterClass={stylesAnimation.slideinLeft3}
      beforeClass={''}
      once={true}
      rootMargin="10px"
    >
      <div className={styles.image2Wrapper}>
        {Image2}
        {TextBlackImage2}
      </div>
    </InViewWrapper>
  </>
);
const TextBlackImage3 = (
  <>
    {/* <InViewWrapper
      afterClass={stylesAnimation.slideinRight}
      beforeClass={''}
      once={true}
      rootMargin="10px"
    > */}
    <div className={styles.textBlackImage3}>
      <p>シンプルで集中できるスペース</p>
    </div>
    {/* </InViewWrapper> */}
  </>
);

const Image3 = (
  <>
    {/* <InViewWrapper
      afterClass={stylesAnimation.imgFeedIn3}
      beforeClass={''}
      once={true}
      rootMargin="10px"
    > */}
    <div className={styles.sectionImage3}>
      <Image
        src="/img/FirstSectionImg3.png"
        width={200} // Specify different width values based on device or viewport size
        height={200}
        alt="Your Image"
        layout="responsive"
        className={styles.imgPC}
      ></Image>
      <Image
        src="/img/FirstSectionImg3SP.jpg"
        width={200} // Specify different width values based on device or viewport size
        height={200}
        alt="Your Image"
        layout="responsive"
        className={styles.imgSP}
      ></Image>
    </div>
    {/* </InViewWrapper> */}
  </>
);

const image3Wrapper = (
  <>
    <InViewWrapper
      afterClass={stylesAnimation.slideinRight}
      beforeClass={''}
      once={true}
      rootMargin="10px"
    >
      <div className={styles.image3Wrapper}>
        {TextBlackImage3}
        {Image3}
      </div>
    </InViewWrapper>
  </>
);

const TopFirstSection = () => {
  return (
    <>
      <div
        className={`${styles.firstsectionwrapper} ${styles.sectionComponentAddPadding}`}
        style={{
          backgroundImage: `url(${BackGroundImg.src})`,
        }}
      >
        <SectionTitleComp
          text={'ABOUT'}
          useClassName={styles.sectionTitle}
          fontColor={'white'}
          idOfElement={'toppageAboutSection'}
        />
        <ExplainSectionComp
          text={'Cafe Cucua Coffee とは？'}
          useClassName={styles.explainsection}
          fontColor={'white'}
          widthOfBorder={150}
        />

        {Image1Wrapper}

        {image2Wrapper}

        {image3Wrapper}

        <InViewWrapper
          afterClass={stylesAnimation.feedinTestB}
          beforeClass={stylesAnimation.feedinTestA}
          once={true}
          rootMargin="100px"
        >
          <MoreButtonComp
            text={'MORE'}
            useClassName={styles.moreWrapper}
            fontColor={'white'}
            linkUrl={'./cafemorepage'}
          />
        </InViewWrapper>
        {/* <MoreButtonComp
          text={'MORE'}
          useClassName={styles.moreWrapper}
          fontColor={'white'}
          linkUrl={'./cafemorepage'}
        /> */}
      </div>
    </>
  );
};

export default TopFirstSection;
