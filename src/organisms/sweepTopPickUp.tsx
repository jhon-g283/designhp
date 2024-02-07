import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import { ItemBox } from '../molecules/sweepItemBoxComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const PickUpComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.pickUpConponentWrapper}>
        <div className={styles.pickUpListWrapper}>
          <ItemBox
            imageUrl="/img/FirstSectionImg1.png"
            itemName="チョコ"
            price="500"
            review="aaa"
            linkParam="bbb"
          />
          <ItemBox
            imageUrl="/img/FirstSectionImg1.png"
            itemName="チョコ"
            price="500"
            review="aaa"
            linkParam="bbb"
          />
          <ItemBox
            imageUrl="/img/FirstSectionImg1.png"
            itemName="チョコ"
            price="500"
            review="aaa"
            linkParam="bbb"
          />
          <ItemBox
            imageUrl="/img/FirstSectionImg1.png"
            itemName="チョコ"
            price="500"
            review="aaa"
            linkParam="bbb"
          />
        </div>
        <div>
          <SectionTitle
            className={`${styles.titleAbout} ${styles.sectionHeader}`}
          >
            PICK UP
          </SectionTitle>
          <SectionSubTitle>あなたにおすすめの商品</SectionSubTitle>
          <p>こちらの商品をぜひお試しになっては いかがでしょうか？</p>
        </div>
      </div>
    </>
  );
};

export default PickUpComponent;
