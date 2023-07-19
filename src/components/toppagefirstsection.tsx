// Topページの最初のセクション

import styles from '../../styles/cafe/cafe.module.css';
import Image from 'next/image';
import SectionTitleComp from './coffeesectiontitle';
import ExplainSectionComp from './coffeeexplainsection';
import MoreButtonComp from './morebutton';

import BackGroundImg from '../../public/img/firstbackbroundimg.png';

// ToDo
// 完成したらクラス名とテキストを引数にして出し分けできるようにする
// マージンとパディングも調整するように修正」

const TextBlackConsept = (
  <>
    <div className={styles.topFirstWiteBack}>
      <p>Concept</p>
    </div>
  </>
);

const TextBalckFor = (
  <>
    <div className={styles.topFirstWiteBack2}>
      <p>
        <span className={styles.forCreater}>”クリエイターのため”</span>
        に作られたカフェ
      </p>
    </div>
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
    <div className={styles.topFirstBlackBack}>
      {TextWite}
      {ListWite}
    </div>
  </>
);

// ToDo
const Image1 = (
  <>
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
  </>
);

const TextBlackImage2 = (
  <>
    <div className={styles.textBlackImage2}>
      <p>アイデアが湧く癒しの空間</p>
    </div>
  </>
);

const image2Wrapper = (
  <>
    <div className={styles.image2Wrapper}>
      {Image2}
      {TextBlackImage2}
    </div>
  </>
);
const TextBlackImage3 = (
  <>
    <div className={styles.textBlackImage3}>
      <p>シンプルで集中できるスペース</p>
    </div>
  </>
);

const Image3 = (
  <>
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
  </>
);

const image3Wrapper = (
  <>
    <div className={styles.image3Wrapper}>
      {TextBlackImage3}
      {Image3}
    </div>
  </>
);

const TopFirstSection = () => {
  return (
    <>
      <div
        className={styles.firstsectionwrapper}
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

        <MoreButtonComp
          text={'MORE'}
          useClassName={styles.moreWrapper}
          fontColor={'white'}
          linkUrl={'./cafemorepage'}
        />
      </div>
    </>
  );
};

export default TopFirstSection;
