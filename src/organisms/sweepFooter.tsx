import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import ReviewItem from '../molecules/sweepReviewItemComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const Footer = () => {
  // Redux

  return (
    <>
      <div className={styles.footerConponentWrapper}>
        <div className={styles.footerLogoImage}>
          <Image
            // src="/img/FirstSectionImg2-2.png"
            src={'/imgSweep/FooterLogo.svg'}
            // width={236} // Specify different width values based on device or viewport size
            // height={244}
            alt="Your Image"
            fill={true}
            // className={styles.imgPC}
          ></Image>
        </div>

        <div className={styles.footerInfoArea}>
          <div className={styles.footerSNSIcons}>
            <div className={styles.snsIconImage}>
              <Image
                // src="/img/FirstSectionImg2-2.png"
                src={'/imgSweep/Fotter_Facebook_logo.svg'}
                // width={236} // Specify different width values based on device or viewport size
                // height={244}
                alt="Your Image"
                fill={true}
                // className={styles.imgPC}
              ></Image>
            </div>
            <div className={styles.snsIconImage}>
              <Image
                // src="/img/FirstSectionImg2-2.png"
                src={'/imgSweep/Footer_Insagram_logo.svg'}
                // width={236} // Specify different width values based on device or viewport size
                // height={244}
                alt="Your Image"
                fill={true}
                // className={styles.imgPC}
              ></Image>
            </div>
            <div className={styles.snsIconImage}>
              <Image
                // src="/img/FirstSectionImg2-2.png"
                src={'/imgSweep/Footer_Twitter_logo.svg'}
                // width={236} // Specify different width values based on device or viewport size
                // height={244}
                alt="Your Image"
                fill={true}
                // className={styles.imgPC}
              ></Image>
            </div>
          </div>
          <div>
            <a>Home</a>
            <svg
              width="1"
              height="11"
              viewBox="0 0 1 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.751953"
                x2="0.5"
                y2="10.752"
                stroke="white"
              />
            </svg>

            <a>Company</a>
            <svg
              width="1"
              height="11"
              viewBox="0 0 1 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.751953"
                x2="0.5"
                y2="10.752"
                stroke="white"
              />
            </svg>

            <a>Contact</a>
            <svg
              width="1"
              height="11"
              viewBox="0 0 1 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.751953"
                x2="0.5"
                y2="10.752"
                stroke="white"
              />
            </svg>

            <a>Privacy Policy</a>
            <div className={styles.sweepCopyWrite}>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.804 5.49086L10.184 5.88086C9.79399 4.59086 9.01399 3.99086 7.72398 3.99086C5.86398 3.99086 4.75398 5.43086 4.75398 7.77086C4.75398 10.1109 5.92398 11.6109 7.75398 11.6109C9.16399 11.6109 10.034 10.8909 10.274 9.45086L11.954 9.75086C11.714 10.6509 11.504 11.1009 11.114 11.5809C10.394 12.4809 9.19398 12.9909 7.69398 12.9909C4.87398 12.9909 3.13398 11.0409 3.13398 7.83086C3.13398 4.65086 4.93398 2.61086 7.72398 2.61086C9.82398 2.61086 11.204 3.57086 11.804 5.49086ZM7.63399 0.450858C11.684 0.450858 14.984 3.75086 14.984 7.80086C14.984 11.8509 11.684 15.1509 7.63399 15.1509C3.58398 15.1509 0.283984 11.8509 0.283984 7.80086C0.283984 3.75086 3.58398 0.450858 7.63399 0.450858ZM7.63399 1.14086C3.94398 1.14086 0.973984 4.11086 0.973984 7.80086C0.973984 11.4909 3.94398 14.4609 7.63399 14.4609C11.324 14.4609 14.294 11.4909 14.294 7.80086C14.294 4.11086 11.324 1.14086 7.63399 1.14086Z"
                  fill="white"
                />
              </svg>

              <a>SWEEP</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
