// トップページテンプレ

import styles from '../../styles/sweep/sweep.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';

import OrderConpleteComponent from '../organisms/sweepOrderComplete';

const SweepOrderCompleteTemplate = () => {
  return (
    <>
      <Header />
      <div className={styles.firstViewArea}></div>
      <div className="sweep">
        <div className={styles.mainWrapper}>
          <OrderConpleteComponent />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SweepOrderCompleteTemplate;
