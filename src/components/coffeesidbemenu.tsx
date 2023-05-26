import styles from '../../styles/cafe/cafe.module.css';
import Image from 'next/image';
import { useState } from 'react';

const SideMenuBar = () => {
  const [flg, changeFlg] = useState<boolean>(false);

  const sideMenueNav = (
    <>
      <div className={styles.navarea}>
        <nav className={styles.navItem}>
          <ul>
            <li className={styles.sectionItem}>TOP</li>
            <li>ABOUT</li>
            <li>MENU</li>
            <li>LOCATION</li>
          </ul>

          <ul>
            <li className={styles.sectionItem}>LEAN MORE</li>
            <li>PLAN</li>
            <li>GALLARY</li>
          </ul>

          <ul>
            <li className={styles.sectionItem}>MENU LIST</li>
          </ul>
        </nav>
      </div>
    </>
  );
  return (
    <>
      {flg ? sideMenueNav : <></>}
      <div
        style={
          {
            // backgroundColor: "red",
            // display: "flex",
            // justifyContent: "flex-end",
            // alignItems: "flex-end",
            // // position: "fixed",
            // bottom: 0,
            // right: 0,
          }
        }
      >
        <div className={styles.sidemenu}>
          <p>Creative cafe</p>
          <div>
            {/* <p
              style={{ backgroundColor: "red" }}
              onClick={() => changeFlg(!flg)}
            >
              二
            </p>
            <p>{flg ? "T" : "F-"}</p> */}
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
                width={22} // Specify different width values based on device or viewport size
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
