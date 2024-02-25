import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import ReviewItem from '../molecules/sweepReviewItemComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const SNSComponent = () => {
  // Redux

  const subImageURLArray = [
    '/img/FirstSectionImg2-2.png',
    '/img/FirstSectionImg2-2.png',
    '/img/FirstSectionImg2-2.png',
    '/img/FirstSectionImg2-2.png',
    '/img/FirstSectionImg2-2.png',
    '/img/FirstSectionImg2-2.png',
    '/img/FirstSectionImg2-2.png',
    '/img/FirstSectionImg2-2.png',
  ];

  const subImagesMap = subImageURLArray.map((item) => {
    const result = (
      <div className={styles.snsSubImageWrapper}>
        <Image
          // src="/img/FirstSectionImg2-2.png"
          src={item}
          // width={236} // Specify different width values based on device or viewport size
          // height={244}
          alt="Your Image"
          fill={true}
          className={styles.imgPC}
        ></Image>
      </div>
    );

    return result;
  });

  return (
    <>
      <div className={styles.snsConponentWrapper}>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet18}></div>
        </Div>
        <div className={styles.snsSectionWrapper}>
          <div className={styles.sectionHeaderWrapper}>
            <SectionTitle
              className={`${styles.snsTitle} ${styles.sectionHeader}`}
            >
              SNS
            </SectionTitle>
          </div>

          <div className={styles.snsTextAreaWrapper}>
            <p className={styles.snsTextArea}>
              新商品やキャンペーンの情報はこちらでも発信していますので、ぜひフォローください。
              <br></br>
              睡眠に関するトピックやフォロワー限定のキャンペーンも実施中
            </p>
            <div className={styles.snsTitleWrapper}>
              <div className={styles.twitterWrapper}>
                <div className={styles.sectionSubTitleWrapper}>
                  <SectionSubTitle className={styles.sectionSubTitle}>
                    Twitter
                  </SectionSubTitle>
                </div>
                <div className={styles.logoAndId}>
                  <div className={styles.snsIconImageWrapper}>
                    <Image
                      // src="/img/FirstSectionImg2-2.png"
                      src={'/imgSweep/Logo_1_Twitter_Logo.svg'}
                      // width={236} // Specify different width values based on device or viewport size
                      // height={244}
                      alt="Your Image"
                      fill={true}
                      className={styles.imgPC}
                    ></Image>
                  </div>

                  <a className={styles.snsId}>@SWEEP_TWITTER</a>
                </div>
              </div>

              <div className={styles.instagramWrapper}>
                <div className={styles.sectionSubTitleWrapper}>
                  <SectionSubTitle className={styles.sectionSubTitle}>
                    Instagram
                  </SectionSubTitle>
                </div>
                <div className={styles.logoAndId}>
                  <div className={styles.snsIconImageWrapper}>
                    <Image
                      // src="/img/FirstSectionImg2-2.png"
                      src={'/imgSweep/Instagramlogo_1.svg'}
                      // width={236} // Specify different width values based on device or viewport size
                      // height={244}
                      alt="Your Image"
                      fill={true}
                      className={styles.imgPC}
                    ></Image>
                  </div>

                  <a className={styles.snsId}>SWEEP_INSTAGRAM</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet19}></div>
        </Div>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet20}></div>
        </Div>
        <div className={styles.snsImageListWrapper}>
          <div className={styles.snsMainImageWrapper}>
            <Image
              // src="/img/FirstSectionImg2-2.png"
              src={'/img/FirstSectionImg2-2.png'}
              // width={236} // Specify different width values based on device or viewport size
              // height={244}
              alt="Your Image"
              fill={true}
              className={styles.imgPC}
            ></Image>
          </div>
          <div className={styles.snsSubImageList}>{subImagesMap}</div>
        </div>
      </div>
    </>
  );
};

export default SNSComponent;
