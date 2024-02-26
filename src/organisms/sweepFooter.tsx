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
            className={styles.imgPC}
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
                className={styles.imgPC}
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
                className={styles.imgPC}
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
                className={styles.imgPC}
              ></Image>
            </div>
          </div>
          <div>
            <a>Home</a>
            <a>Company</a>
            <a>Contact</a>
            <a>Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
