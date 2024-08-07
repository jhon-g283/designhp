// トップページテンプレ
import styles from '../../styles/cafe/cafe.module.css';
import stylesAnimation from '../../styles/cafe/cafeanimation.module.css';
import Image from 'next/image';

import Header from '../components/coffeeheader';
import Footer from '../components/coffeefooter';
import TopFirstSection from '../components/toppagefirstsection';

import SideMenuBar from '../components/coffeesidbemenu';
import TopSecondSection from '../components/toppagesecondsection';
import TopThirdSection from '../components/toppagethirdsection';

import InViewWrapper from '../common/observecomponent';

//
// Heroもおそらく使い回しできそう・
// あと商品紹介のテキストも使い回しができると思う。

const HeroImage = (
  // トップ画面画像とタイトル
  <div className={`${styles.heroimgclass} ${stylesAnimation.topImage}`}>
    <InViewWrapper
      // afterClass={stylesAnimation.topImage2}
      // beforeClass={stylesAnimation.topImage}
      once={true}
      rootMargin="0px"
    >
      <Image
        src="/img/hero.jpg"
        className={styles.imgPC} //PCのみ表示
        width={1500} // Specify different width values based on device or viewport size
        height={727}
        alt="Your Image"
        layout="responsive"
      ></Image>
    </InViewWrapper>

    <Image
      className={styles.imgSP} //SPのみ表示
      src="/img/heroSP.jpg"
      // src="/img/hero2.jpg"
      width={1500} // Specify different width values based on device or viewport size
      height={727}
      alt="Your Image"
      layout="responsive"
    ></Image>
  </div>
);

const Hero = () => {
  return (
    <>
      {HeroImage}

      <div className={styles.heroword}>
        <p className={styles.subtext1}>クリエイターの立ち寄るカフェ</p>
        <p className={styles.shopname}>CAFE CUCUA COFFEE</p>
        <p className={styles.subtext1}>I N TOKYO</p>
      </div>
      {/* </ImgCmp> */}
    </>
  );
};

const CoofeeTopPageTemplate = () => {
  return (
    <>
      <Header />
      <div className={styles.wrap1}>
        <Hero></Hero>
        <SideMenuBar />
      </div>

      <TopFirstSection />
      <TopSecondSection />
      <TopThirdSection />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CoofeeTopPageTemplate;
