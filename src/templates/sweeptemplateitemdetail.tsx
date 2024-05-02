// トップページテンプレ

import styles from '../../styles/sweep/sweep.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';
import { ItemDetailProps } from '../../pages/sweep/itemDetail'; // 親と同じ型のインターフェースを使用する
import ItemDetailComponent from '../organisms/sweepItemDetail';

const SweepItemDetailPageTemplate = (props: ItemDetailProps) => {
  const { id, code } = props;
  return (
    <>
      <Header />
      <div className={styles.firstViewArea}></div>
      <div className="sweep">
        <div className={styles.mainWrapper}>
          <ItemDetailComponent id={id} code={code} />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SweepItemDetailPageTemplate;
