// トップページテンプレ

import styles from '../../styles/sweep/sweep.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';

import NewsListComponent from '../organisms/sweepNewsList';

const SweepNewsListTemplate = () => {
  return (
    <>
      <Header />
      <div className={styles.firstViewArea}></div>
      <div className="sweep">
        <div className={styles.mainWrapper}>
          <NewsListComponent />
        </div>

        <div className={styles.footeroption}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SweepNewsListTemplate;
