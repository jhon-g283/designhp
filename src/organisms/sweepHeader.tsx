import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み

import { cartData } from '../types';

// ヘッダー部分のコンポーネント
const Header = () => {
  // Redux

  const cartCount = useSelector((state: { cartreducer: cartData }) =>
    state.cartreducer?.totalCountcount ? state.cartreducer.totalCountcount : 0
  ); //商品リスト取得(カート数)

  // ハンバーガーメニュー表示状況
  const [check, setCheck] = useState(false);

  // 切り替え用関数
  const switchMenu = () => {
    setCheck(!check);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerItemWrapper}>
          {/* ロゴアイコン */}
          <div className={styles.logoImage}>
            <Link href={'./top'}>
              <Image
                src={'/imgSweep/sweeplogo.svg'}
                // width={135} // Specify different width values based on device or viewport size
                // height={40}
                alt="Your Image"
                fill={true}
                className={styles.positionOverWrittenRelationOnSP}
              ></Image>
            </Link>
          </div>

          {/* メニュー */}
          <div className={styles.headerMenu}>
            <div className={`${styles.linkMenuWraper} ${styles.imgPC}`}>
              <Link className={styles.linkMenu} href={'/sweep/top'}>
                top
              </Link>

              <Link className={styles.linkMenu} href={'/sweep/lineup'}>
                lineup
              </Link>

              <Link className={styles.linkMenu} href={'/sweep/news'}>
                news
              </Link>
            </div>

            {/* カート数、アイコン */}
            <div className={styles.cartIconImageWrapper}>
              <Link href={'/sweep/cart/cartItems'}>
                <Image
                  src={'/imgSweep/cartImage.svg'}
                  // width={44} // Specify different width values based on device or viewport size
                  // height={44}
                  alt="Your Image"
                  fill={true}
                  className={`${styles.cartIconImage} showOnlyPC`}
                  style={check ? { display: 'none' } : {}}
                ></Image>
              </Link>
            </div>

            <div
              className={styles.cartNumberWrapper}
              style={check ? { display: 'none' } : {}}
            >
              <div>
                <a>{cartCount}</a>
              </div>
            </div>
            <div className={`${styles.sweepHumburger} ${styles.imgSP}`}>
              <div className={styles.humburgerWrapper}>
                <input
                  id={styles.sweepsweepHumburgerChecks}
                  type="checkbox"
                  style={{ display: 'none' }}
                  checked={check}
                  onChange={() => {}} //checkedのエラー回避用
                />
                <div className={styles.humburgerMenuWrapper}>
                  <nav className={styles.humburgerMenuNav}>
                    <ul className="nav_list">
                      <li className="nav_item">
                        <a className={styles.humburgerMenuText} href="">
                          Top
                        </a>
                      </li>
                      <li className="nav_item">
                        <a className={styles.humburgerMenuText} href="">
                          Lineup
                        </a>
                      </li>
                      <li className="nav_item">
                        <a className={styles.humburgerMenuText} href="">
                          News
                        </a>
                      </li>
                      <li className="nav_item">
                        <a className={styles.humburgerMenuText} href="">
                          Cart
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <label onClick={() => switchMenu()}>
                  <span className={styles.humburgerSpan}></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
