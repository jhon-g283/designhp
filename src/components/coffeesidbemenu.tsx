import styles from "../../styles/cafe/cafe.module.css";
import Image from "next/image";
import Twitter from "../../public/img/Twitterlogo.png";
import { useState } from "react";

const SideMenuBar = () => {
  const [flg, changeFlg] = useState<boolean>(false);

  const sideMenueNav = (
    <>
      <div className={styles.navarea}>
        <nav style={{ backgroundColor: "red", opacity: 0.5 }}>
          <ul>
            <li>Cafe Cucua Coffee </li>
            <li>ABOUT</li>
            <li>MENU</li>
            <li>LOCATION</li>
          </ul>
          <ul>
            <li>Cafe Cucua Coffee </li>
            <li>ABOUT</li>
            <li>MENU</li>
            <li>LOCATION</li>
          </ul>
          <ul>
            <li>Cafe Cucua Coffee </li>
            <li>ABOUT</li>
            <li>MENU</li>
            <li>LOCATION</li>
          </ul>
        </nav>
      </div>
    </>
  );
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          // display: "flex",
          // justifyContent: "flex-end",
          // alignItems: "flex-end",
          // // position: "fixed",
          // bottom: 0,
          // right: 0,
        }}
      >
        {flg ? sideMenueNav : <></>}
        <div className={styles.sidemenu}>
          <p>Creative cafe</p>
          <div>
            <p
              style={{ backgroundColor: "red" }}
              onClick={() => changeFlg(!flg)}
            >
              二
            </p>
            <p>{flg ? "T" : "F"}</p>
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
                src="/img/Twitterlogo.png"
                width={22} // Specify different width values based on device or viewport size
                height={22}
                alt="Your Image"
                // layout="responsive"
              ></Image>
            </div>
            <div className={styles.snsicon}>
              <Image
                src="/img/Twitterlogo.png"
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
