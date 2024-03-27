import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import Image from 'next/image';

import { ItemDetailProps } from '../../pages/sweep/itemDetail'; // 親と同じ型のインターフェースを使用する

// ヘッダー部分のコンポーネント
const ItemDetailComponent = ({ itemId }: ItemDetailProps) => {
  // Redux{}

  // 現在選択中のボタン(数値と配列のインデックスを連動させる。)
  const [selected, setSelected] = useState(0);

  const imageUrl = '/imgSweep/itemDetail_Item_Bitter.jpg';

  const thumbNailImageArray = [
    '/imgSweep/itemDetail_Item_Bitter.jpg',
    '/imgSweep/itemDetail_Item_Bitter.jpg',
    '/imgSweep/itemDetail_Item_Bitter.jpg',
  ];

  const priceArray = ['600', '1300'];

  // サイズのボタン
  const buttonArray = priceArray.map((item, index) => {
    let buttonText = '';

    // 配列のインデックス数でボタン名変更
    if (index == 0) {
      buttonText = '１週間セット';
    } else if (index == 1) {
      buttonText = '１ヶ月セット';
    } else {
      buttonText = 'エクストラ';
    }

    // ボタンのクラス選択中のサイズとインデックスが同じか比較する。
    const buttonClass =
      selected == index
        ? styles.itemDetailSelectedButton
        : styles.itemDetailSizeButton;

    return (
      <>
        <button
          className={`${buttonClass}`}
          onClick={() => {
            setSelected(index);
          }}
        >
          {buttonText}
        </button>
      </>
    );
  });

  const starEvaluation = (title: string, evaluation: number) => {
    return (
      <div className={styles.itemDetailEvaluationWrapper}>
        <a>{title}</a>
        <a>{title}</a>
      </div>
    );
  };

  return (
    <>
      <div className={styles.itemDetailComponentWrapper}>
        <div className={styles.itemDetailBreadList}>
          <a>ベーシック（State）</a>
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2909_1454"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="4"
              y="1"
              width="7"
              height="11"
            >
              <path
                d="M5.09996 11.3988L10.5501 5.98277M10.52 6.8079L5.14479 1.4001"
                stroke="white"
              />
            </mask>
            <g mask="url(#mask0_2909_1454)">
              <rect x="6" y="1" width="6" height="12" fill="#FCF5F5" />
            </g>
          </svg>

          <a>ベーシック（State）</a>
        </div>
        <div className={styles.itemDetailItemImfomation}>
          <div className={styles.itemDetailImageArea}>
            <div className={styles.itemDetailItemMainImageWrapper}>
              <Image
                src={imageUrl}
                // width={129} // Specify different width values based on device or viewport size
                // height={110}
                alt="Your Image"
                fill={true}
                // className={styles.positionOverWrittenRelationOnSP}
              ></Image>
            </div>
            <div className={styles.itemDetailItemThumbNailArea}>
              {thumbNailImageArray.map((item) => {
                return (
                  <>
                    <div className={styles.itemDetailItemThumbNailImageWrapper}>
                      <Image
                        src={imageUrl}
                        // width={129} // Specify different width values based on device or viewport size
                        // height={110}
                        alt="Your Image"
                        fill={true}
                        // className={styles.positionOverWrittenRelationOnSP}
                      ></Image>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={styles.itemDetailTextArea}>
            <div className={styles.itemDetailItemNameWrapper}>
              <h2>ビターチョコstate</h2>
            </div>

            <p className={styles.itemDetailItemDescrib}>
              ベーシックな苦味が特徴で初めての方にとてもおすすめのチョコです。
            </p>
            <p className={styles.itemDetailItemPrice}>
              価格
              <span className={styles.itemDetailItemPriceSpan}>
                ¥{priceArray[selected]}
              </span>
              (税込)
            </p>

            <div className={styles.itemDetailSizeButtonWrapper}>
              {buttonArray}
            </div>

            <div className={styles.itemDetailEvaluationArea}>
              {starEvaluation('aaa', 4)}
              <p>平均評価</p>
            </div>
          </div>
        </div>
      </div>

      {itemId}
    </>
  );
};

export default ItemDetailComponent;
