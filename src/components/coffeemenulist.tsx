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
      <div>
        <div className={styles.itemPanelImg}>
          <Image
            src={imagePath}
            width={180} // Specify different width values based on device or viewport size
            height={135}
            alt="Your Image"
            layout="responsive"
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
