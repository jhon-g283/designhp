// Moreページテンプレ
import Header from '../components/coffeeheader';
import styles from '../../styles/cafe/cafe.module.css';

import Footer from '../components/coffeefooter';

import SideMenuBar from '../components/coffeesidbemenu';
import TopImage from '../components/coffeetopimage';
import TopViewTextCmp from '../components/coffeetopviewtitle';
import MoreFirstSection from '../components/morepagefirstsection';
import MoreSecondSection from '../components/morepagesecondsection';
import MorethirdSection from '../components/morepagethirdsection';

const Top = () => {
  return (
    <>
      <TopImage
        useClassName={styles.topviewimg}
        imagePath={'/img/topviewmore.png'}
        imagePathSP={'/img/topviewmoreSP.jpg'}
      />

      <TopViewTextCmp
        useClassName={styles.moreTopTitleWrap}
        titleText={'LEARN MORE'}
        subTitleText={'よりもっと詳しく知る'}
      />
    </>
  );
};

const CoofeeLearnMorePageTemplate = () => {
  return (
    <>
      <Header />
      <div className={styles.wrap1}>
        <Top></Top>
        <SideMenuBar />
      </div>
      <MoreFirstSection />
      <MoreSecondSection />
      <MorethirdSection />

      <div>
        <Footer />
      </div>
    </>
  );
};

export default CoofeeLearnMorePageTemplate;
