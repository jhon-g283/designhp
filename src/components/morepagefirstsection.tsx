// Moreページの最初のセクション

import styles from '../../styles/cafe/cafe.module.css';

import SectionTitleComp from './coffeesectiontitle';
import ExplainSectionComp from './coffeeexplainsection';

import BackGroundImg from '../../public/img/firstbackbroundimg.png';
import Paragraph from './coffeeparagraph';
import { GalleryBlockCmp } from './coffeegalleryblock';

const textBlack1 = (
  <>
    <p>
      なぜ<br></br>
      クリエイターがより満足できる空間である必要があるのか？
    </p>
  </>
);

const textWhite1 = (
  <>
    <p>
      リモートワークやフリーランスなどクリエイターとして自分が思うような働き方ができる現代
    </p>
  </>
);

const textWhite2 = (
  <>
    <p>
      働き方は変わりましたが、働く場所は自身で整えたり探す必要がありました。
      <br></br>
      当店ではドリンク・フードではなくクリエイターが働く”場所”そのものを提供することを意識し、
      <br></br>訪れるクリエイターが満足できる環境をご用意しております。
    </p>
  </>
);

// 次は背景セットと資料
const MoreFirstSection = () => {
  return (
    <>
      <div
        className={styles.firstsectionwrapper}
        style={{
          backgroundImage: `url(${BackGroundImg.src})`,
          backgroundColor: 'red',
        }}
      >
        <SectionTitleComp
          text={'MORE'}
          useClassName={styles.sectionTitle}
          fontColor={'white'}
          idOfElement={'morepageFirstSection'}
        />

        <ExplainSectionComp
          text={'もっと詳しく'}
          useClassName={styles.explainsection}
          fontColor={'white'}
          widthOfBorder={300}
        />
        <Paragraph
          useClassName={styles.moreTextBlack}
          fontColor="white"
          paragramText={textBlack1}
        />
        <Paragraph
          useClassName={styles.paragramCmpClass}
          fontColor="white"
          paragramText={textWhite1}
        />
        <Paragraph
          useClassName={styles.paragramCmpClass}
          fontColor="white"
          paragramText={textWhite2}
        />
        <div className={styles.morePageGalleryArea}>
          <GalleryBlockCmp
            imagePath1="/img/galleryImg3.png"
            imagePath2="/img/galleryImg2.png"
            width1="60"
          />
          <GalleryBlockCmp
            imagePath1="/img/galleryImg4.png"
            imagePath2="/img/galleryImg5.png"
            width1="42"
          />
        </div>
      </div>
    </>
  );
};

export default MoreFirstSection;
