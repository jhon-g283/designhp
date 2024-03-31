// トップページテンプレ

import styles from '../../styles/sweep/sweep.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';

import ItemDetailComponent from '../organisms/sweepItemDetail';

const SweepCartPageTemplate = () => {
  return (
    <>
      <Header />
      <div className={styles.firstViewArea}></div>
      <div className="sweep">
        <div className={styles.mainWrapper}>
          <p>cat</p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SweepCartPageTemplate;
