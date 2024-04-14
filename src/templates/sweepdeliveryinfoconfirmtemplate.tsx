// トップページテンプレ

import styles from '../../styles/sweep/sweep.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';

import OrderConfirmComponent from '../organisms/sweepDeliveryInfoComfirm';

const SweepDeliveryInfoComfirmTemplate = () => {
  return (
    <>
      <Header />
      <div className={styles.firstViewArea}></div>
      <div className="sweep">
        <div className={styles.mainWrapper}>
          <OrderConfirmComponent />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SweepDeliveryInfoComfirmTemplate;
