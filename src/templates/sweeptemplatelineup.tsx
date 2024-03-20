// トップページテンプレ
import styles from '../../styles/cafe/cafe.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';
import Image from 'next/image';

// import Header from '../organisms/sweepHeader';

const SweepLineUpPageTemplate = () => {
  return (
    <>
      <div className="sweep">
        {/* ヘッダー */}
        <Header />

        <div className={styles.mainWrapper}>{/* news */}</div>

        <Footer />
      </div>
    </>
  );
};

export default SweepLineUpPageTemplate;
