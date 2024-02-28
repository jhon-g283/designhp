import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import { TopPageItemBox } from '../molecules/sweepItemBoxComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const PickUpComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.pickUpConponentWrapper}>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet10}></div>
        </Div>
        <div className={styles.pickUpListWrapper}>
          <TopPageItemBox
            imageUrl="/img/FirstSectionImg1.png"
            itemName="ビターチョコ(7個)"
            price="500"
            review="2"
            linkParam="bbb"
          />
          <TopPageItemBox
            imageUrl="/img/FirstSectionImg1.png"
            itemName="ビターチョコ(7個)"
            price="500"
            review="2"
            linkParam="bbb"
          />
          <TopPageItemBox
            imageUrl="/img/FirstSectionImg1.png"
            itemName="ビターチョコ(7個)"
            price="500"
            review="2"
            linkParam="bbb"
          />
        </div>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet9}></div>
        </Div>
        <div className={styles.pickupSectionWrapper}>
          <div className={styles.sectionHeaderWrapper}>
            <SectionTitle
              className={`${styles.titlePickUp} ${styles.sectionHeader}`}
            >
              PICK UP
            </SectionTitle>
          </div>
          <div className={styles.pickupDiscriptionWrapper}>
            <div className={styles.sectionSubTitleWrapper}>
              <SectionSubTitle className={styles.sectionSubTitle}>
                あなたにおすすめの商品
              </SectionSubTitle>
            </div>

            <p>こちらの商品をぜひお試しになっては いかがでしょうか？</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickUpComponent;
