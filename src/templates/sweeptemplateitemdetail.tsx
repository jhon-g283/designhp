// トップページテンプレ

import styles from '../../styles/sweep/sweep.module.css';
import Header from '../organisms/sweepHeader';
import Footer from '../organisms/sweepFooter';
import { ItemDetailProps } from '../../pages/sweep/itemDetail'; // 親と同じ型のインターフェースを使用する
import ItemDetailComponent from '../organisms/sweepItemDetail';

const SweepItemDetailPageTemplate = ({ itemId }: ItemDetailProps) => {
  return (
    <>
      <Header />
      <div className={styles.firstViewArea}></div>
      <div className="sweep">
        <div className={styles.mainWrapper}>
          <ItemDetailComponent itemId={itemId} />
        </div>
      </div>
      {/* コンテンツ部分 */}

      <p>progress image</p>
      <p>cart item LIST</p>
      <p>attention</p>
      <p>delively date</p>

      {/* footer */}
      <p>footer</p>
      <Footer />
    </>
  );
};

export default SweepItemDetailPageTemplate;
