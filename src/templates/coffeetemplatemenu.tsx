import styles from '../../styles/cafe/cafe.module.css';

import Header from '../components/coffeeheader';
import Footer from '../components/coffeefooter';

import SideMenuBar from '../components/coffeesidbemenu';
import TopImage from '../components/coffeetopimage';
import { TopViewTextMenuCmp } from '../components/coffeetopviewtitle';
import MenuFirstSection from '../components/menupagefirstsection';

const subtext = (
  <>
    <p className={styles.menutopviewSubTitle}>
      仕事とアイデアを<br></br>
      <span>養うためのメニュー</span>
    </p>
  </>
);

const Top = () => {
  return (
    <>
      <TopImage
        useClassName={styles.topviewimg}
        imagePath={'/img/menupagebackground.png'}
      />

      <TopViewTextMenuCmp
        useClassName={styles.menuTopTitleWrap}
        titleText={'MENU LIST'}
        subTTitleParagraph={subtext}
      />
    </>
  );
};

const CoofeeMenuPageTemplate = () => {
  return (
    <>
      <Header />
      <div className={styles.wrap1}>
        <Top></Top>
        <SideMenuBar />
      </div>
      <MenuFirstSection />

      <div>
        <Footer />
      </div>
    </>
  );
};

export default CoofeeMenuPageTemplate;
