// Moreページの第２のセクション

import styles from '../../styles/cafe/cafe.module.css';

import SectionTitleComp from './coffeesectiontitle';
import ExplainSectionComp from './coffeeexplainsection';

import BackGroundImg from '../../public/img/moresecondbackground.png';
import Paragraph from './coffeeparagraph';
import PlanLabelCmp from './coffeeplanlabel';
import AreaBoxCmp from './coffeeareabox';
import AreaBUsageTableCmpoxCmp from './coffeeusagetable';

import Image from 'next/image';

const textWhiteBack1 = (
  <>
    <p>追加の料金で一定時間特別なエリアをご利用</p>
  </>
);

const textWhiteBack2 = (
  <>
    <p>サブスクリプションでのお得な特典</p>
  </>
);

const textBlack1 = (
  <>
    <p>
      当店では様々なクリエイターが働くそれぞれのスタイルに合わせて<br></br>
      様々なエリアやご利用プランをご用意しております。
    </p>
  </>
);

const textWhite2 = (
  <>
    <p>
      よりクリエイティブな環境や仕事をしやすい環境やサービスをご用意しております。
    </p>
  </>
);

// 次は背景セットと資料
const MoreSecondSection = () => {
  return (
    <>
      <div
        className={styles.moresecondsectionwrapper}
        style={{
          backgroundImage: `url(${BackGroundImg.src})`,
          backgroundColor: 'red',
        }}
      >
        <SectionTitleComp
          text={'PLAN'}
          useClassName={styles.sectionTitle}
          fontColor={'black'}
          idOfElement={'morepageSecondSection'}
        />
        <ExplainSectionComp
          text={'当店のご利用プラン'}
          useClassName={styles.explainsection}
          fontColor={'black'}
          widthOfBorder={300}
        />
        <Paragraph
          useClassName={styles.paragramCmpClass}
          fontColor="black"
          paragramText={textBlack1}
        />
        <Paragraph
          useClassName={styles.moreTextBlackWhiteBack}
          fontColor="black"
          paragramText={textWhiteBack1}
        />
        <Paragraph
          useClassName={styles.moreTextBlackWhiteBack2}
          fontColor="black"
          paragramText={textWhiteBack2}
        />
        <Paragraph
          useClassName={styles.paragramCmpClass}
          fontColor="black"
          paragramText={textWhite2}
        />
        <PlanLabelCmp
          useClassName={styles.planLabel}
          fontColor="white"
          text1="エリアの紹介"
          text2="AREA"
        />
        <AreaBoxCmp />

        <div className={styles.spaceDivUsage}></div>
        <PlanLabelCmp
          useClassName={styles.planLabel}
          fontColor="white"
          text1="エリア使用料・特典一覧"
          text2="USAGE FEE"
        />

        <div>
          <AreaBUsageTableCmpoxCmp />
        </div>
      </div>
    </>
  );
};

export default MoreSecondSection;
