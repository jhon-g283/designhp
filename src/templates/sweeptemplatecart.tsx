// トップページテンプレ

import styles from '../../styles/sweep/sweep.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';

import CartItemComponent from '../organisms/sweepCartItems';

const SweepCartPageTemplate = () => {
  return (
    <>
      <Header />
      <div className={styles.firstViewArea}></div>
      <div className="sweep">
        <div className={styles.mainWrapper}>
          <CartItemComponent />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SweepCartPageTemplate;
