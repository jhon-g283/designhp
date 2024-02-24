import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import { TopPageItemBox } from '../molecules/sweepItemBoxComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const CampaignComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.campaignComponentWrapper}>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet11}></div>
        </Div>
        <div className={styles.campaignTextArea1Wrapper}>
          <div className={styles.sectionHeaderWrapper}>
            <SectionTitle
              className={`${styles.titleCampaign} ${styles.sectionHeader}`}
            >
              CAMPAIGN
            </SectionTitle>
          </div>
          <Div
            afterClass="test"
            beforeClass="pre--"
            className="defoooo"
            once={true}
            rootMargin="0px"
          >
            <div className={styles.backGroundSheet12}></div>
          </Div>
          <div className={styles.campaignTextArea1_2Wrapper}>
            <div className={styles.sectionSubTitleWrapper}>
              <SectionSubTitle className={styles.sectionSubTitle}>
                夏の夜もぐっすりキャンペーン
              </SectionSubTitle>
            </div>
            <p className={styles.campaignDiscription1}>
              食欲が大きく落ちる夏そんな食べたくない時期でもスッと自然にお口に入れることのできる爽やかな味わい。
              <br></br>
              今なら夏におすすめの味の商品を２つ以上購入すると対象商品の合計を10％OFFにするキャンペーンを実施しています。
            </p>
          </div>
        </div>

        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet13}></div>
        </Div>
        <div className={styles.campaginItemListWrapper}>
          <div className={styles.targetItemWrapper}>
            <p className={styles.targetItem}>対象商品</p>
          </div>

          <div className={styles.campaginItemList}>
            <TopPageItemBox
              imageUrl="/img/FirstSectionImg1.png"
              itemName="チョコ"
              price="500"
              review="aaa"
              linkParam="bbb"
            />
            <TopPageItemBox
              imageUrl="/img/FirstSectionImg1.png"
              itemName="チョコ"
              price="500"
              review="aaa"
              linkParam="bbb"
            />
            <TopPageItemBox
              imageUrl="/img/FirstSectionImg1.png"
              itemName="チョコ"
              price="500"
              review="aaa"
              linkParam="bbb"
            />
            <TopPageItemBox
              imageUrl="/img/FirstSectionImg1.png"
              itemName="チョコ"
              price="500"
              review="aaa"
              linkParam="bbb"
            />
          </div>
        </div>

        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet14}></div>
        </Div>
        <div className={styles.campaignTextArea2Wrapper}>
          <div className={styles.sectionSubTitleWrapper}>
            <SectionSubTitle className={styles.sectionSubTitle}>
              SNSに感想投稿で豪華商品キャンペーン
            </SectionSubTitle>
          </div>
          <p className={styles.campaignDiscription2}>
            今新発売している商品の感想を各種SNSで投稿してくださった方の中から抽選で10名様に素敵な豪華商品をプレゼント
          </p>

          <p className={styles.campaignDiscription3}>選べるプレゼント内容</p>
          <p className={styles.campaignDiscription3}>
            ・心と体もリフレッシュ、温泉旅行ペアチケット
          </p>
          <p className={styles.campaignDiscription3}>
            ・睡眠改善に役立つ高級マットレス/枕
          </p>
          <p className={styles.campaignDiscription4}>[応募方法]</p>
          <p className={styles.campaignDiscription3}>
            ・各種SNSで「#SWEEP」をつけて感想と写真を投稿。
          </p>
        </div>

        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet15}></div>
        </Div>
        <div className={styles.campaginItemListWrapper}>
          <div className={styles.targetItemWrapper}>
            <p className={styles.targetItem}>対象商品</p>
          </div>
          <div className={styles.campaginItemList}>
            <TopPageItemBox
              imageUrl="/img/FirstSectionImg1.png"
              itemName="チョコ"
              price="500"
              review="aaa"
              linkParam="bbb"
            />
            <TopPageItemBox
              imageUrl="/img/FirstSectionImg1.png"
              itemName="チョコ"
              price="500"
              review="aaa"
              linkParam="bbb"
            />
            <TopPageItemBox
              imageUrl="/img/FirstSectionImg1.png"
              itemName="チョコ"
              price="500"
              review="aaa"
              linkParam="bbb"
            />
            <TopPageItemBox
              imageUrl="/img/FirstSectionImg1.png"
              itemName="チョコ"
              price="500"
              review="aaa"
              linkParam="bbb"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignComponent;
