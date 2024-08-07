// トップページ第３セクション
import styles from '../../styles/cafe/cafe.module.css';
import stylesAnimation from '../../styles/cafe/cafeanimation.module.css';

import Image from 'next/image';
import Paragraph from './coffeeparagraph';
import SectionTitleComp from './coffeesectiontitle';
import ExplainSectionComp from './coffeeexplainsection';
import BackGroundImg from '../../public/img/topThirdSectionBackGround.png';
import InViewWrapper from '../common/observecomponent';

const LocationImage = (
  <>
    <InViewWrapper
      afterClass={stylesAnimation.locationImageEnd}
      beforeClass={stylesAnimation.locationImageStart}
      once={true}
      rootMargin="10px"
    >
      <div className={styles.locationImage}>
        <Image
          src="/img/location.png"
          width={200} // Specify different width values based on device or viewport size
          height={200}
          alt="Your Image"
          layout="responsive"
        ></Image>
      </div>
    </InViewWrapper>
  </>
);

const address = (
  <>
    <div className={styles.addressText}>
      <div className={styles.addressTextLeft}>
        <Paragraph
          useClassName={styles.addressAreaParagraph}
          fontColor={'black'}
          paragramText={<p>ADDRESS</p>}
        ></Paragraph>
      </div>

      <div className={styles.addressTextRight}>
        <Paragraph
          useClassName={styles.addressAreaParagraph}
          fontColor={'black'}
          paragramText={
            <>
              <p>
                東京都千代田区丸の内1丁目
                <span className={styles.addresAreaSpan01}>CAFE CUCUA</span>
              </p>
            </>
          }
        ></Paragraph>
        <Paragraph
          useClassName={styles.addressAreaParagraph02}
          fontColor={'black'}
          paragramText={
            <a>
              <span className={styles.addresAreaSpan06}>最寄駅</span>
              <span className={styles.addresAreaSpan02}>
                JR 東京駅<br></br>
                <span className={styles.addresAreaSpan03}>
                  東京メトロ 東京・大手町
                </span>
                <span className={styles.addresAreaSpan04}>徒歩５分</span>
              </span>
            </a>
          }
        ></Paragraph>
      </div>
    </div>
  </>
);

const openText = (
  <>
    <div className={styles.addressText}>
      <div className={styles.addressTextLeft}>
        <Paragraph
          useClassName={styles.addressAreaParagraph}
          fontColor={'black'}
          paragramText={<p>OPEN</p>}
        ></Paragraph>
      </div>

      <div className={styles.addressTextRight}>
        <Paragraph
          useClassName={styles.addressAreaParagraph}
          fontColor={'black'}
          paragramText={
            <>
              <p>
                ７：００〜２３：００<br></br>
                <span className={styles.addresAreaSpan07}>年中無休</span>
              </p>
            </>
          }
        ></Paragraph>
      </div>
    </div>
  </>
);

const tellText = (
  <>
    <div className={styles.addressText}>
      <div className={styles.addressTextLeft}>
        <Paragraph
          useClassName={styles.addressAreaParagraph}
          fontColor={'black'}
          paragramText={<p>TELL</p>}
        ></Paragraph>
      </div>

      <div className={styles.addressTextRight}>
        <Paragraph
          useClassName={styles.addressAreaParagraph}
          fontColor={'black'}
          paragramText={
            <>
              <p>１２３−４５６７−８９１０</p>
            </>
          }
        ></Paragraph>
      </div>
    </div>
  </>
);

const logoImgApple = (
  <>
    <div className={styles.addressPayLogo1}>
      <Image
        src="/img/AppleLogo.png"
        width={200} // Specify different width values based on device or viewport size
        height={200}
        alt="Your Image"
        layout="responsive"
      ></Image>
    </div>
  </>
);

const logoImgPayPay = (
  <>
    <div className={styles.addressPayLogo2}>
      <Image
        src="/img/PayPayLogo.png"
        width={200} // Specify different width values based on device or viewport size
        height={200}
        alt="Your Image"
        layout="responsive"
      ></Image>
    </div>
  </>
);

const cashText = (
  <>
    <div className={styles.addressText}>
      <div className={styles.addressTextLeft}>
        <Paragraph
          useClassName={styles.addressAreaParagraph}
          fontColor={'black'}
          paragramText={<p>CASH</p>}
        ></Paragraph>
      </div>

      <div className={styles.addressTextRight}>
        <div className={styles.logoCenter}>
          <Paragraph
            useClassName={styles.addressAreaParagraph}
            fontColor={'black'}
            paragramText={
              <>
                <p>
                  <span className={styles.addresAreaSpan05}>現金</span>
                </p>
              </>
            }
          ></Paragraph>
          {logoImgPayPay}
          {logoImgApple}
        </div>
      </div>
    </div>
  </>
);

const mapImage = (
  <>
    <div className={styles.mapImage}>
      <Image
        src="/img/GoogleMap.png"
        className={styles.imgPC}
        width={200} // Specify different width values based on device or viewport size
        height={200}
        alt="Your Image"
        layout="responsive"
      ></Image>
      <Image
        src="/img/GoogleMapSP.jpg"
        className={styles.imgSP}
        width={200} // Specify different width values based on device or viewport size
        height={200}
        alt="Your Image"
        layout="responsive"
      ></Image>
    </div>
  </>
);

const TopThirdSection = () => {
  return (
    <>
      <div
        className={`${styles.thirddsectionwrapper} ${styles.sectionComponentAddPadding}`}
        style={{
          backgroundImage: `url(${BackGroundImg.src})`,
        }}
      >
        <SectionTitleComp
          text={'LOCATION'}
          useClassName={styles.sectionTitle}
          fontColor={'white'}
          idOfElement={'toppageLocationSection'}
        />
        <ExplainSectionComp
          text={'当店への案内'}
          useClassName={styles.explainsection}
          fontColor={'white'}
          widthOfBorder={150}
        />

        <InViewWrapper
          afterClass={stylesAnimation.locationWrapperEnd}
          beforeClass={stylesAnimation.locationWrapperStart}
          once={true}
          rootMargin="10px"
        >
          <div className={styles.addressWrapper}>
            {LocationImage}
            <div className={styles.addressArea}>
              {address}
              {openText}
              {tellText}
              {cashText}
            </div>
            <div className={styles.addressImgWrapper}>
              {mapImage}
              <a
                className={styles.mapAppButton}
                target="_blank"
                href="https://goo.gl/maps/TkLrfcW6kFee2NMz6"
              >
                Mapアプリで開く
              </a>
              <div className={styles.addressEndDiv}></div>
            </div>
          </div>
        </InViewWrapper>
      </div>
    </>
  );
};

export default TopThirdSection;
