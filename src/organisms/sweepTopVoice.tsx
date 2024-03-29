import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import ReviewItem from '../molecules/sweepReviewItemComponents';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const VoiceComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.voiceConponentWrapper}>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet16}></div>
        </Div>
        <div className={styles.voiceSectionWrapper}>
          <div className={styles.sectionHeaderWrapper}>
            <SectionTitle
              className={`${styles.titleVoice} ${styles.sectionHeader}`}
            >
              VOICE
            </SectionTitle>
          </div>

          <div className={styles.sectionSubTitleWrapper}>
            <SectionSubTitle className={styles.sectionSubTitle}>
              お客様の声
            </SectionSubTitle>
          </div>
        </div>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet17}></div>
        </Div>
        <div className={styles.reviewItemListWrapper}>
          <div className={styles.reviewItemList}>
            <ReviewItem
              imageUrl="/imgSweep/Product_Bitter.jpg"
              itemName="ビターチョコ(7個)"
              price="600"
              review="3"
              linkParam="a"
              reviewerInfo="(30代 会社員 女性)"
              commentText="甘すぎず苦すぎない絶妙な口当たりで、食後に最適。自然と夜もベッドに入れるようになったので、買ってよかったです。"
            />
            <ReviewItem
              imageUrl="/imgSweep/Product_sakura.jpg"
              itemName="サクラ(7個)"
              price="700"
              review="3"
              linkParam="a"
              reviewerInfo="(20代 会社員 女性)"
              commentText="夕食後に食べるものですが、好きすぎてお昼ご飯の後にも食べてしまいます。ほんのりとした桜の香りが好きなポイントです。"
            />
            <ReviewItem
              imageUrl="/imgSweep/Product_strawberry.jpg"
              itemName="ストロベリー(7個)"
              price="600"
              review="3"
              linkParam="a"
              reviewerInfo="(30代 会社員 女性)"
              commentText="上品な大人な感じの苺の味がします。娘にちょうだいとよく言われますがもったいなくてあげれません。"
            />
            <ReviewItem
              imageUrl="/imgSweep/Product_Rich_bitter.jpg"
              itemName="リッチビター(7個)"
              price="600"
              review="2"
              linkParam="a"
              reviewerInfo="(30代 会社員 女性)"
              commentText="甘すぎず苦すぎない絶妙な口当たりで、食後に最適。自然と夜もベッドに入れるようになったので、買ってよかったです。"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceComponent;
