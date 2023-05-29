import styles from '../../styles/cafe/cafe.module.css';
import Image from 'next/image';

import Header from '../components/coffeeheader';
import Footer from '../components/coffeefooter';
import TopFirstSection from '../components/toppagefirstsection';

import SideMenuBar from '../components/coffeesidbemenu';
import TopSecondSection from '../components/toppagesecondsection';
import TopThirdSection from '../components/toppagethirdsection';

//
// Heroもおそらく使い回しできそう・
// あと商品紹介のテキストも使い回しができると思う。

const HeroImage = (
  <div className={styles.heroimgclass}>
    <Image
      src="/img/hero.png"
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
        <p className={styles.shopname}>Cafe Cucua Coffee</p>
        <p className={styles.subtext1}>In TOKYO</p>
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
