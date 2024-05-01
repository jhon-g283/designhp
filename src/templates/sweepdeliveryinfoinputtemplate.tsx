// トップページテンプレ

import styles from '../../styles/sweep/sweep.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';
import { DeliveryInfoProps } from '../../pages/sweep/cart/deliveryinfoInput';
import OrderInputComponent from '../organisms/sweepDeliveryInfoInput';

const SweepDeliveryInfoInputTemplate = (props: DeliveryInfoProps) => {
  const modify = props.isModifyInfo;
  return (
    <>
      <Header />
      <div className={styles.firstViewArea}></div>
      <div className="sweep">
        <div className={styles.mainWrapper}>
          <OrderInputComponent isModifyInfo={modify} />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SweepDeliveryInfoInputTemplate;
