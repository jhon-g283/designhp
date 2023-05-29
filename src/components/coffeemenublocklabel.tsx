import Paragraph from './coffeeparagraph';
import styles from '../../styles/cafe/cafe.module.css';
interface Props {
  useClassName: string;
  fontColor: string;
  paragramMenuText: JSX.Element;
  menuNameJp: string;
  menuNameEn: string;
  price: string;
  menuNum: string;
  classNameArray?: string[];
}

// あとでクラスを分けられるように修正する。
const MenuBoxLabel = ({
  useClassName,
  fontColor,
  paragramMenuText,
  menuNameJp,
  menuNameEn,
  price,
  menuNum,
  classNameArray,
}: Props) => {
  const menuJp = <p>{menuNameJp}</p>;
  const menuEn = <p>{menuNameEn}</p>;
  const [blockClass, paragrapClass]: string[] = classNameArray ?? ['', ''];

  return (
    <>
      <div className={useClassName} style={{ color: fontColor }}>
        <div className={styles.menuNumWrapper}>
          <p>MENU</p>
          <p className={styles.menuNumber}> {menuNum}</p>
        </div>
        <div className={styles.menuText}>
          <Paragraph
            useClassName={styles.paragramCmpClass}
            fontColor={fontColor}
            paragramText={menuJp}
          />
          <Paragraph
            useClassName={styles.menuItemName}
            fontColor={fontColor}
            paragramText={menuEn}
          />
          <Paragraph
            useClassName={styles.paragramCmpClass}
            fontColor={fontColor}
            paragramText={paragramMenuText}
          />

          <Paragraph
            useClassName={styles.priceText}
            fontColor={fontColor}
            paragramText={
              <p>
                単品 <span>¥{price}+tax</span>
              </p>
            }
          />
        </div>
      </div>
    </>
  );
};

export default MenuBoxLabel;
