import styles from '../../styles/cafe/cafe.module.css';
import Image from 'next/image';
import SectionTitleComp from './coffeesectiontitle';
import ExplainSectionComp from './coffeeexplainsection';
import MoreButtonComp from './morebutton';
import Paragraph from './coffeeparagraph';

const intoroText = (
  <>
    <p>
      クリエイティブ作業やブレイクタイムに<br></br>
      癒しとなるドリンク・フードをご用意いたしました。
    </p>
  </>
);

const TopSecondSection = () => {
  return (
    <>
      <div className={styles.firstsectionwrapper}>
        <SectionTitleComp
          text={'MENU'}
          useClassName={styles.sectionTitle}
          fontColor={'black'}
        />
        <ExplainSectionComp
          text={'こだわりのメニューたち'}
          useClassName={styles.explainsection}
          fontColor={'black'}
          widthOfBorder={150}
        />

        <Paragraph
          useClassName=""
          fontColor="black"
          paragramText={intoroText}
        />
        <MoreButtonComp
          text={'MORE'}
          useClassName={styles.moreWrapper}
          fontColor={'black'}
        />
      </div>
    </>
  );
};

export default TopSecondSection;
