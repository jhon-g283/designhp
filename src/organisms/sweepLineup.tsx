import { useState, useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import { ItemBox } from '../molecules/sweepItemBoxComponents';

// ヘッダー部分のコンポーネント
const LineupComponent = () => {
  // Redux

  return (
    <>
      <div className={styles.lineupConponentWrapper}>
        <div className={styles.lineupFilterArea}>
          <p>フィルター</p>

          <div className={styles.lineupFilterBlockWrapper}>
            <p>カテゴリ</p>
            <ul>
              <li>ベーシック</li>
              <li>キャラメル</li>
              <li>ミルク</li>
              <li>ストロベリー</li>
              <li>サクラ</li>
              <li>ビター</li>
              <li>期間限定</li>
            </ul>
          </div>

          <div
            className={`${styles.lineupFilterBlockWrapper} ${styles.listWrapperMargin}`}
          >
            <p>カテゴリ</p>
            <ul>
              <li>ベーシック</li>
              <li>キャラメル</li>
              <li>ミルク</li>
              <li>ストロベリー</li>
              <li>サクラ</li>
              <li>ビター</li>
              <li>期間限定</li>
            </ul>
          </div>
        </div>

        <div className={styles.lineupItemArea}>
          <div className={styles.lineupCategoryExprainArea}>
            <div>
              <h2>ベーシック（State）</h2>
            </div>
            <div>
              <p>ほろ苦い苦味が特徴(State）</p>
            </div>

            <p>
              抑えめの甘さとほろ苦い苦味が広がる味わいになっており、夜遅くに甘いものを食べるのがあまり好きでない方でも口に入れやすく
              チョコレートをあまり食べない方でもぜひ食べていただける商品です。(State）
            </p>
          </div>

          <div className={styles.lineupItemListWrapper}>
            <ItemBox
              imageUrl="/imgSweep/Product_Bitter.jpg"
              itemName="ビターチョコ(7個)"
              price="500"
              review="2"
              linkParam="bbb"
            />
            <ItemBox
              imageUrl="/imgSweep/Product_Bitter.jpg"
              itemName="ビターチョコ(7個)"
              price="500"
              review="2"
              linkParam="bbb"
            />
            <ItemBox
              imageUrl="/imgSweep/Product_Bitter.jpg"
              itemName="ビターチョコ(7個)"
              price="500"
              review="2"
              linkParam="bbb"
            />
            <ItemBox
              imageUrl="/imgSweep/Product_Bitter.jpg"
              itemName="ビターチョコ(7個)"
              price="500"
              review="2"
              linkParam="bbb"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LineupComponent;
