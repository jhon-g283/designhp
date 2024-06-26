// トップページ第２セクション
import styles from '../../styles/cafe/cafe.module.css';
import stylesAnimation from '../../styles/cafe/cafeanimation.module.css';

import SectionTitleComp from './coffeesectiontitle';
import ExplainSectionComp from './coffeeexplainsection';
import MoreButtonComp from './morebutton';
import Paragraph from './coffeeparagraph';
import BackGroundImg from '../../public/img/topSecondSectionBackground.png';
import MenuBlock from './coffeemenubox';
import InViewWrapper from '../common/observecomponent';

const intoroText = (
  <>
    <p>
      クリエイティブ作業やブレイクタイムに<br className={styles.brOnlyPC}></br>
      癒しとなるドリンク・フードをご用意いたしました。
    </p>
  </>
);

const menuText1 = (
  <>
    <p>
      Cucua Beansを使用した <br className={styles.brOnlyPC}></br>
      オリジナルブレンドのコーヒーです。
    </p>
  </>
);
const menuText2 = (
  <>
    <p>
      とれたてのベリーと蜂蜜シロップを <br className={styles.brOnlyPC}></br>
      あしらったパンケーキになります。
    </p>
  </>
);

const menuText3 = (
  <>
    <p>
      柔らかいパン生地と新鮮な具材から作る <br className={styles.brOnlyPC}></br>
      サンドウィッチセットです。
    </p>
  </>
);

const TopSecondSection = () => {
  return (
    <>
      <div
        className={`${styles.secondsectionwrapper} ${styles.sectionComponentAddPadding}`}
        style={{
          backgroundImage: `url(${BackGroundImg.src})`,
        }}
      >
        <SectionTitleComp
          text={'MENU'}
          useClassName={styles.sectionTitle}
          fontColor={'black'}
          idOfElement="toppageMenuSection"
        />
        <ExplainSectionComp
          text={'こだわりのメニューたち'}
          useClassName={styles.explainsection}
          fontColor={'black'}
          widthOfBorder={150}
        />

        <Paragraph
          useClassName={styles.paragramCmpClass}
          fontColor="black"
          paragramText={intoroText}
        />
        <InViewWrapper
          afterClass={stylesAnimation.menuSlideinFromRight}
          beforeClass={''}
          once={true}
          rootMargin="10px"
        >
          <MenuBlock
            classNameOfBox={styles.menuBlock}
            classNameOfBoxLabel={styles.menuTextLabelBlack}
            classNameOfBoxImg={styles.menuBlockImg}
            paragramMenuTextOfLabel={menuText1}
            textOfMenuNameJp={'ブレンドコーヒー'}
            textOfMenuNameEn={'Brend Coffee'}
            textOfMenuNameNum={'01'}
            textOfMenuprice={'500'}
            pathToImg={'/img/BrendCoffee.png'}
            pathToNumberImg={'/img/menu01Logo.svg'}
            displayPattern={'01'}
          />
        </InViewWrapper>

        <InViewWrapper
          afterClass={stylesAnimation.menuSlideinFromLeft}
          beforeClass={''}
          once={true}
          rootMargin="10px"
        >
          <MenuBlock
            classNameOfBox={styles.menuBlockReverse}
            classNameOfBoxLabel={styles.menuTextLabelBlack}
            classNameOfBoxImg={styles.menuBlockImgR}
            paragramMenuTextOfLabel={menuText2}
            textOfMenuNameJp={'ベリーズパンケーキ'}
            textOfMenuNameEn={'Berrys Cake'}
            textOfMenuNameNum={'01'}
            textOfMenuprice={'600'}
            pathToImg={'/img/PanCake.png'}
            pathToNumberImg={'/img/menu02Logo.svg'}
            displayPattern={'01'}
          />
          {/* 
        <MenuBlock
          classNameOfBox={styles.menuBlock}
          classNameOfBoxLabel={styles.menuTextLabelBlackReverse}
          classNameOfBoxImg={styles.menuBlockImgReverse}
          paragramMenuTextOfLabel={menuText2}
          textOfMenuNameJp={'ベリーズパンケーキ'}
          textOfMenuNameEn={'Berrys Cake'}
          textOfMenuNameNum={'02'}
          textOfMenuprice={'600'}
          pathToImg={'/img/PanCake.png'}
          displayPattern={'0'}
        /> */}
        </InViewWrapper>

        <InViewWrapper
          afterClass={stylesAnimation.menuSlideinFromRight}
          beforeClass={''}
          once={true}
          rootMargin="10px"
        >
          <MenuBlock
            classNameOfBox={styles.menuBlock}
            classNameOfBoxLabel={styles.menuTextLabelBlack}
            classNameOfBoxImg={styles.menuBlockImg}
            paragramMenuTextOfLabel={menuText3}
            textOfMenuNameJp={'サンドウィッチセット'}
            textOfMenuNameEn={'Sandwitch'}
            textOfMenuNameNum={'03'}
            textOfMenuprice={'700'}
            pathToImg={'/img/Sandwitch.png'}
            pathToNumberImg={'/img/menu03Logo.svg'}
            displayPattern={'01'}
          />
        </InViewWrapper>

        <MoreButtonComp
          text={'MORE'}
          useClassName={styles.moreWrapper}
          fontColor={'black'}
          linkUrl={'./cafemenupage'}
        />
      </div>
    </>
  );
};

export default TopSecondSection;
