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
        <div className={styles.campaignTextArea1Wrapper}>
          <div className={styles.sectionHeaderWrapper}>
            <SectionTitle
              className={`${styles.titleCampaign} ${styles.sectionHeader}`}
            >
              CAMPAIGN
            </SectionTitle>
          </div>
          <div>
            <div className={styles.sectionSubTitleWrapper}>
              <SectionSubTitle className={styles.sectionSubTitle}>
                夏の夜もぐっすりキャンペーン
              </SectionSubTitle>
            </div>
            <p>
              食欲が大きく落ちる夏そんな食べたくない時期でもスッと自然にお口に入れることのできる爽やかな味わい。
              今なら夏におすすめの味の商品を２つ以上購入すると対象商品の合計を10％OFFにするキャンペーンを実施しています。
            </p>
          </div>
        </div>
        <p>対象商品</p>
        <div className={styles.campaginItemListtWrapper}>
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
        <SectionSubTitle>SNSに感想投稿で豪華商品キャンペーン</SectionSubTitle>
        <p>
          今新発売している商品の感想を各種SNSで投稿してくださった方の中から抽選で10名様に素敵な豪華商品をプレゼント
        </p>
        <p>選べるプレゼント内容</p>
        <p>・心と体もリフレッシュ、温泉旅行ペアチケット</p>
        <p>・睡眠改善に役立つ高級マットレス/枕</p>
        <p>[応募方法]</p>
        <p>・各種SNSで「#SWEEP」をつけて感想と写真を投稿。</p>

        <p>対象商品</p>
        <div className={styles.campaginItemListtWrapper}>
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
    </>
  );
};

export default CampaignComponent;
