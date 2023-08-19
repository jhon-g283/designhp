// メニュー一覧のメニュー表リスト
// 配列でデータを受け取って商品コンポーネントにする。

import styles from '../../styles/cafe/cafe.module.css';
import Image from 'next/image';
import Paragraph from './coffeeparagraph';
import { arrayText } from './menupagefirstsection';

interface PropsItemPanel {
  imagePath: string;
  menuName: string;
  menuPrice: string;
}

interface PropsList {
  arrayData: arrayText[];
}

// 商品のアイテム部分おコンポーネント、写真と、名前価格を表示
const ItemPanel = ({ imagePath, menuName, menuPrice }: PropsItemPanel) => {
  const name = (
    <>
      <p>{menuName}</p>
    </>
  );
  const price = (
    <>
      <p>¥{menuPrice}+tax</p>
    </>
  );
  return (
    <>
      <div className={styles.itemBox}>
        <div className={styles.itemPanelImg}>
          <Image
            src={imagePath}
            // width={180} // Specify different width values based on device or viewport size
            // height={135}
            alt="Your Image"
            fill={true}
            // layout="responsive"
          ></Image>
        </div>
        <div>
          <Paragraph
            useClassName={styles.menuItemText}
            fontColor="black"
            paragramText={name}
          />
          <Paragraph
            useClassName={styles.menuItemText}
            fontColor="black"
            paragramText={price}
          />
        </div>
      </div>
    </>
  );
};

const MenuList = ({ arrayData }: PropsList) => {
  const MapList = arrayData.map((item, index) => {
    return (
      <>
        <ItemPanel
          imagePath={item.path}
          menuName={item.name}
          menuPrice={item.price}
          key={item.key + '_' + index}
        />
      </>
    );
  });
  return (
    <>
      <div className={styles.menuListWrap}>{MapList}</div>
    </>
  );
};
export default MenuList;
