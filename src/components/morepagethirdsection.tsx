// Moreページの最初のセクション

import styles from '../../styles/cafe/cafe.module.css';

import SectionTitleComp from './coffeesectiontitle';
import ExplainSectionComp from './coffeeexplainsection';

import BackGroundImg from '../../public/img/moreThirdSectionBackground.png';
import { GalleryBlockCmp, GalleryBlockCmp3Images } from './coffeegalleryblock';

import Image from 'next/image';

// 次は背景セットと資料
const MorethirdSection = () => {
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
          text={'GALLERY'}
          useClassName={styles.sectionTitle}
          fontColor={'white'}
          idOfElement={'morepageThirdSection'}
        />
        <ExplainSectionComp
          text={'店内の様子'}
          useClassName={styles.explainsection}
          fontColor={'white'}
          widthOfBorder={300}
        />
        <div className={styles.morePageGalleryArea}>
          {/* a */}
          <GalleryBlockCmp3Images
            imagePath1="/img/A1.png"
            imagePath2="/img/A2.png"
            imagePath3="/img/A3.png"
            width1="65"
            flg={false}
          />
          {/* B */}
          <GalleryBlockCmp
            imagePath1="/img/B1.png"
            imagePath2="/img/B2.png"
            width1="60"
          />
          {/* C */}
          <GalleryBlockCmp3Images
            imagePath1="/img/C1.png"
            imagePath2="/img/C2.png"
            imagePath3="/img/C3.png"
            width1="60"
            flg={true}
          />
          {/* D */}
          <GalleryBlockCmp3Images
            imagePath1="/img/D1.png"
            imagePath2="/img/D2.png"
            imagePath3="/img/D3.png"
            width1="65"
            flg={false}
          />
          {/* E */}
          <GalleryBlockCmp
            imagePath1="/img/E1.png"
            imagePath2="/img/E2.png"
            width1="60"
          />
        </div>
      </div>
    </>
  );
};

export default MorethirdSection;
