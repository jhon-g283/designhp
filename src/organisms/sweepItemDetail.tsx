import { useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import Image from 'next/image';

import { ItemDetailProps } from '../../pages/sweep/itemDetail'; // 親と同じ型のインターフェースを使用する

// ヘッダー部分のコンポーネント
const ItemDetailComponent = ({ itemId }: ItemDetailProps) => {
  // Redux{}

  return (
    <>
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

      {itemId}
    </>
  );
};

export default ItemDetailComponent;
