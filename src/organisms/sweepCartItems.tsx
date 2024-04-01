import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';

import {
  createReviewStarsLineup,
  createReviewSquares,
} from '../common/sweep/createReviewStars';
import Image from 'next/image';

// ヘッダー部分のコンポーネント
const CartItemComponent = () => {
  // Redux{}

  // 現在選択中のボタン(数値と配列のインデックスを連動させる。)
  const [selected, setSelected] = useState(0);

  const [count, setCount] = useState(1);

  return (
    <>
      <div className={styles.cartComponentWrapper}>
        <div className={styles.cartAreaTitleWrapper}>
          <p className={styles.cartAreaTitle}>カート</p>
        </div>

        <a>a</a>
      </div>
    </>
  );
};

export default CartItemComponent;
