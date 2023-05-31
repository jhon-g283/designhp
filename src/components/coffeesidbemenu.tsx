import styles from '../../styles/cafe/cafe.module.css';
import Image from 'next/image';
import { useState } from 'react';

const SideMenuBar = () => {
  const [flg, changeFlg] = useState<boolean>(false);

  const topPageLink = './cafetoppage';
  const morePageLink = './cafemorepage';
  const menuPageLink = './cafemenupage';
  const sideMenueNav = (
    <>
      <div className={styles.navarea}>
        <nav className={styles.navItem}>
          <ul>
            <li className={styles.sectionItem}>
              <a href={topPageLink}>TOP</a>
            </li>
            <li>
              <a href={topPageLink + '#toppageAboutSection'}>ABOUT</a>
            </li>
            <li>
              <a href={topPageLink + '#toppageMenuSection'}>MENU</a>
            </li>
            <li>
              <a href={topPageLink + '#toppageLocationSection'}>LOCATION</a>
            </li>
          </ul>

          <ul>
            <li className={styles.sectionItem}>
              <a href={morePageLink}>LEAN MORE</a>
            </li>
            <li>
              <a href={morePageLink + '#morepageFirstSection'}>MORE</a>
            </li>
            <li>
              <a href={morePageLink + '#morepageSecondSection'}>PLAN</a>
            </li>
            <li>
              <a href={morePageLink + '#morepageThirdSection'}>GALLARY</a>
            </li>
          </ul>

          <ul>
            <li className={styles.sectionItem}>
              <a href={menuPageLink}>MENU LIST</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
  return (
    <>
      {flg ? sideMenueNav : <></>}
      <div>
        <div className={styles.sidemenu}>
          <p>Creative cafe</p>
          <div>
            <div className={styles.humberger} onClick={() => changeFlg(!flg)}>
              <div className={flg ? styles.upperBar : ''}></div>

              <div className={flg ? styles.lowerBar : ''}></div>
            </div>
          </div>
          <div className={styles.sidemenuiconarea}>
            <div className={styles.snsicon}>
              <Image
                src="/img/LogoBlue.svg"
                width={22} // Specify different width values based on device or viewport size
                height={22}
                alt="Your Image"
                // layout="responsive"
              ></Image>
            </div>
            <div className={styles.snsicon}>
              <Image
                src="/img/Instagramlogo.png"
                width={22} // Specify different width values based on device or viewport size
                height={22}
                alt="Your Image"
                // layout="responsive"
              ></Image>
            </div>
            <div className={styles.snsicon}>
              <Image
                src="/img/maillogo.png"
                width={23} // Specify different width values based on device or viewport size
                height={22}
                alt="Your Image"
                // layout="responsive"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// ここにモーダルみたくメニュー表を作っておく

export default SideMenuBar;
