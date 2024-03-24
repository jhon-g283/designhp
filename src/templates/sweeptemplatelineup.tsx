// トップページテンプレ
import styles from '../../styles/sweep/sweep.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';
import Image from 'next/image';
import LineupComponent from '../organisms/sweepLineup';

// import Header from '../organisms/sweepHeader';

const SweepLineUpPageTemplate = () => {
  return (
    <>
      <Header />
      <div
        className={styles.firstViewArea}
        style={{ backgroundColor: 'black' }}
      ></div>
      <div className="sweep">
        <div className={styles.lineupFVWrapper}>
          <div className={styles.lineupFVImageWrapper}>
            <Image
              src={'/imgSweep/FV_Lineup_PC.jpg'}
              // width={135} // Specify different width values based on device or viewport size
              // height={40}
              alt="Your Image"
              fill={true}
              style={{ objectFit: 'contain' }}
              className={`${styles.lineupImg} ${styles.imgPC}`}
            ></Image>
            <Image
              src={'/imgSweep/FV_Lineup_SP.jpg'}
              // width={135} // Specify different width values based on device or viewport size
              // height={40}
              alt="Your Image"
              fill={true}
              style={{ objectFit: 'contain' }}
              className={`${styles.lineupImg} ${styles.imgSP}`}
            ></Image>
          </div>
        </div>

        <div className={`${styles.mainWrapper}`}>
          <LineupComponent />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SweepLineUpPageTemplate;
