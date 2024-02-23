import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';
import styled from 'styled-components';

// ヘッダー部分のコンポーネント

interface Props {
  imageUrl: string; //画像Url
  itemName?: string; //日付
  subName?: string; //タイトル
}

// サイズで探すのリンク項目
const ItemLinkSize = ({
  imageUrl = '',
  itemName = '',
  subName = '',
}: Props) => {
  return (
    <>
      <div className={styles.itemLinkSize}>
        <div className={styles.itemImageWrapper}>
          <Image
            src={imageUrl}
            // width={129} // Specify different width values based on device or viewport size
            // height={110}
            alt="Your Image"
            fill={true}
            className={styles.imgPC}
          ></Image>
        </div>
        <div className={styles.itemNameWrapper}>
          <p className={styles.itemName}>{itemName}</p>
          <div className={styles.itemSubNameWrapper}>
            <p className={styles.itemSubName}>{subName}</p>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <mask
            id="mask0_2640_114"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="7"
            y="0"
            width="10"
            height="17"
          >
            <path
              d="M7.97597 15.7982L16.0784 7.74667M16.0336 8.97333L8.04262 0.933939"
              stroke="white"
              stroke-width="2"
            />
          </mask>
          <g mask="url(#mask0_2640_114)">
            <rect x="9" width="10" height="18" fill="white" />
          </g>
        </svg>
      </div>
    </>
  );
};

const ItemLinkCategory = ({
  imageUrl = '',
  itemName = '',
  subName = '',
}: Props) => {
  return (
    <>
      <div className={styles.itemLinkCategory}>
        <div className={styles.itemImageCategoryWrapper}>
          <Image
            src={imageUrl}
            // width={129} // Specify different width values based on device or viewport size
            // height={110}
            alt="Your Image"
            fill={true}
            className={styles.imgPC}
          ></Image>
        </div>
        <div className={styles.itemCategoryNameWrapper}>
          <p className={styles.itemCategoryName}>{itemName}</p>
          <div className={styles.itemCategorySubNameWrapper}>
            <p className={styles.itemCategorySubName}>{subName}</p>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <mask
            id="mask0_2640_114"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="7"
            y="0"
            width="10"
            height="17"
          >
            <path
              d="M7.97597 15.7982L16.0784 7.74667M16.0336 8.97333L8.04262 0.933939"
              stroke="white"
              stroke-width="2"
            />
          </mask>
          <g mask="url(#mask0_2640_114)">
            <rect x="9" width="10" height="18" fill="white" />
          </g>
        </svg>
      </div>
    </>
  );
};

export { ItemLinkSize as ItemLinkSize, ItemLinkCategory as ItemLinkCategory };
