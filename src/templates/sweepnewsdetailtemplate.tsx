// トップページテンプレ

import styles from '../../styles/sweep/sweep.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';

import { NewsDetailProps } from '../../pages/sweep/news/newsDetail';
import NewsDetailComponent from '../organisms/sweepNewsDetail';

const SweepNewsDetailTemplate = ({ newsId }: NewsDetailProps) => {
  // id取得
  const id = newsId;

  return (
    <>
      <Header />
      <div className={styles.firstViewArea}></div>
      <div className="sweep">
        <div className={styles.mainWrapper}>
          <NewsDetailComponent newsId={id} />
        </div>

        <div className={styles.footeroption}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SweepNewsDetailTemplate;
