import styles from '../../styles/sweep/sweep.module.css';
import animationStyle from '../../styles/sweep/sweepanimation.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const AboutComponent = () => {
  // Redux

  return (
    <>
      <Div
        className={styles.aboutConponentWrapper}
        afterClass={`${animationStyle.FeedIn1}`}
        beforeClass="pre--"
        once={true}
        rootMargin="0px"
      >
        <Div
          afterClass={`${animationStyle.FeedIn1}`}
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet4}></div>
        </Div>
        <div className={styles.aboutSectionWrapper}>
          <div className={styles.sectionHeaderWrapper}>
            <SectionTitle
              className={`${styles.titleAbout} ${styles.sectionHeader}`}
            >
              About
            </SectionTitle>
          </div>
          <div className={styles.aboutDiscriptionWrapper}>
            <div className={styles.sectionSubTitleWrapper}>
              <SectionSubTitle className={styles.sectionSubTitle}>
                Seepとは？
              </SectionSubTitle>
            </div>
            <div className={styles.aboutSweepSleepWrapper}>
              <a className={styles.aboutSweepSleep}>
                Sw<span className={styles.SweepSleepSpan}>eet</span>
              </a>

              <span className={`${styles.svgBetweenText} ${styles.imgPC}`}>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.899638 0.907491L9.68854 9.68902" stroke="white" />
                  <path d="M9.64345 0.858543L0.854514 9.64768" stroke="white" />
                </svg>
              </span>
              <span className={`${styles.svgBetweenText} ${styles.imgSP}`}>
                <svg
                  width="0.35em"
                  height="0.35em"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.578754 1.1168L13.0607 13.5882" stroke="white" />
                  <path d="M12.9969 1.04722L0.514972 13.5295" stroke="white" />
                </svg>
              </span>

              <a className={styles.aboutSweepSleep}>
                <span className={styles.SweepSleepSpan}>Sl</span>eep
              </a>
            </div>
            <div className={styles.aboutDiscription1Wrapper}>
              <p>睡眠を改善するチョコレート</p>
            </div>
          </div>

          <div className={styles.textOuterWrap}>
            <div>
              <div className={styles.textWrap}>
                <p>安眠効果のある成分</p>
              </div>
              <div className={styles.textWrap}>
                <p>ストレスを改善する香り</p>
              </div>
              <div className={styles.textWrap}>
                <p>
                  血糖値を穏やかに、<br className={styles.onlyPCBr}></br>
                  ベッドで自然な眠気
                </p>
              </div>
            </div>

            <div className={styles.aboutImage2SP}>
              <Image
                src="/imgSweep/About_Image2SP.jpg"
                // width={1200} // Specify different width values based on device or viewport size
                // height={200}
                alt="Your Image"
                fill={true}
                className={`${styles.imgSP} ${styles.positionOverWrittenRelationOnSP}`}
              ></Image>
            </div>
          </div>
        </div>
        <div className={styles.aboutImageArea}>
          <div>
            <p className={styles.imgPC}>SLEEP</p>
            <div className={styles.aboutImage1}>
              <Image
                src="/imgSweep/About_Image1.jpg"
                // width={1200} // Specify different width values based on device or viewport size
                // height={200}
                alt="Your Image"
                fill={true}
                className={styles.imgPC}
              ></Image>
            </div>
            <Div
              afterClass="test"
              beforeClass="pre--"
              className="defoooo"
              once={true}
              rootMargin="0px"
            >
              <div className={styles.backGroundSheet5}></div>
            </Div>
            <div className={styles.aboutTextArea}>
              <div className={styles.aboutImage1SP}>
                <Image
                  src="/imgSweep/About_Image1SP.jpg"
                  // width={1200} // Specify different width values based on device or viewport size
                  // height={200}
                  alt="Your Image"
                  fill={true}
                  className={`${styles.imgSP} ${styles.positionOverWrittenRelationOnSP}`}
                ></Image>
              </div>
              <div>
                <div className={styles.textWrap2}>
                  <p>食後の一口で寝不足の改善</p>
                </div>
                <div className={styles.aboutIntroduceTextWrap}>
                  <p className={styles.paragraph}>
                    昨日はよく眠れたと最後に思えたのはいつですか？<br></br>
                    夜の睡眠は翌日からの人生の明るさと切っても切れない関係。
                    食後に一口食べれば睡眠薬に頼らななくても自然と眠りの質が
                    改善されます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.aboutImage2Wrapper}>
            <div className={styles.aboutImage2}>
              <Image
                src="/imgSweep/About_Image2.jpg"
                // width={1200} // Specify different width values based on device or viewport size
                // height={200}
                alt="Your Image"
                fill={true}
                className={styles.imgPC}
              ></Image>
            </div>
            <p className={styles.imgPC}>SWEETS</p>
          </div>
          {/* ーーーーー */}
        </div>
      </Div>
    </>
  );
};

export default AboutComponent;
