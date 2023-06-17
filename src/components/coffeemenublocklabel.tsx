import Paragraph from './coffeeparagraph';
import styles from '../../styles/cafe/cafe.module.css';
import Image from 'next/image';
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

// メニュー部分の説明文（ラベル）用のコンポーネント
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
        {menuNum != '' ? (
          <>
            <div className={styles.menuNumWrapper}>
              {/* <p>MENU</p>
              <p className={styles.menuNumber}>{menuNum}</p> */}
              <Image
                src={'/img/menu01Logo.svg'}
                width={200} // Specify different width values based on device or viewport size
                height={200}
                alt="Your Image"
                layout="responsive"
              ></Image>
            </div>
          </>
        ) : (
          <></>
        )}

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

          {price != '' ? (
            <>
              <Paragraph
                useClassName={styles.priceText}
                fontColor={fontColor}
                paragramText={
                  <p>
                    単品 <span>¥{price}+tax</span>
                  </p>
                }
              />
            </>
          ) : (
            <></>
          )}
          {/* <Paragraph
            useClassName={styles.priceText}
            fontColor={fontColor}
            paragramText={
              <p>
                単品 <span>¥{price}+tax</span>
              </p>
            }
          /> */}
        </div>
      </div>
    </>
  );
};

export const MenuBoxLabelForeArea = ({
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
        {menuNum != '' ? (
          <>
            <div className={styles.menuNumWrapper}>
              <p>MENU</p>
              <p className={styles.menuNumber}>{menuNum}</p>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className={styles.areaText}>
          <Paragraph
            useClassName={styles.paragramOfArea}
            fontColor={fontColor}
            paragramText={menuJp}
          />
          <Paragraph
            useClassName={styles.areaItemName}
            fontColor={fontColor}
            paragramText={menuEn}
          />
          <Paragraph
            useClassName={styles.paragramOfArea}
            fontColor={fontColor}
            paragramText={paragramMenuText}
          />

          {price != '' ? (
            <>
              <Paragraph
                useClassName={styles.priceText}
                fontColor={fontColor}
                paragramText={
                  <p>
                    単品 <span>¥{price}+tax</span>
                  </p>
                }
              />
            </>
          ) : (
            <></>
          )}
          {/* <Paragraph
            useClassName={styles.priceText}
            fontColor={fontColor}
            paragramText={
              <p>
                単品 <span>¥{price}+tax</span>
              </p>
            }
          /> */}
        </div>
      </div>
    </>
  );
};
export default MenuBoxLabel;
