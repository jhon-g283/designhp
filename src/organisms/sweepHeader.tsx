import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み

import { addCart, selectCount } from '../store/reducers/addCartDataSlice';
import { cartData } from '../types';

// ヘッダー部分のコンポーネント
const Header = () => {
  // Redux
  const dispatch = useDispatch();
  const topPageLink = './cafetoppage';
  const cartCount = useSelector((state: { cartreducer: cartData }) =>
    state.cartreducer?.totalCountcount ? state.cartreducer.totalCountcount : 0
  ); //商品リスト取得(カート数)

  const addCartFunction = () => {
    dispatch(addCart('77'));
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerItemWrapper}>
          {/* ロゴアイコン */}
          <div className={styles.logoImage}>
            <Image
              src={'/imgSweep/sweeplogo.svg'}
              // width={135} // Specify different width values based on device or viewport size
              // height={40}
              alt="Your Image"
              fill={true}
              // className={styles.logoImage}
            ></Image>
          </div>

          {/* メニュー */}
          <div className={styles.headerMenu}>
            <div className={`${styles.linkMenuWraper} ${styles.imgPC}`}>
              <a href="./top">top</a>
              <a href="./lineup">lineup</a>
              <a>news</a>
            </div>

            {/* カート数、アイコン */}
            <Image
              src={'/imgSweep/cartImage.svg'}
              width={44} // Specify different width values based on device or viewport size
              height={44}
              alt="Your Image"
              className={`${styles.cartIconImage} showOnlyPC`}
            ></Image>
            <div className={styles.cartNumberWrapper}>
              <div>
                <a>{cartCount}</a>
              </div>
            </div>
          </div>
          <p>{cartCount}</p>
          <button onClick={() => addCartFunction()}>test</button>
        </div>
      </div>
    </>
  );
};

export default Header;
