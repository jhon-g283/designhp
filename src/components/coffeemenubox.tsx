import styles from '../../styles/cafe/cafe.module.css';
import Image from 'next/image';

import MenuBoxLabel from './coffeemenublocklabel';

interface Props {
  classNameOfBox: string;
  classNameOfBoxLabel: string;
  classNameOfBoxImg: string;
  paragramMenuTextOfLabel: JSX.Element;
  textOfMenuNameJp: string;
  textOfMenuNameEn: string;
  textOfMenuNameNum: string;
  textOfMenuprice: string;
  pathToImg: string;
  displayPattern: string;
}

const MenuBlock = ({
  classNameOfBox,
  classNameOfBoxLabel,
  classNameOfBoxImg,
  paragramMenuTextOfLabel,
  textOfMenuNameJp,
  textOfMenuNameEn,
  textOfMenuNameNum,
  textOfMenuprice,
  pathToImg,
  displayPattern,
}: Props) => {
  return displayPattern == '01' ? (
    <>
      <div>
        <div className={classNameOfBox}>
          <MenuBoxLabel
            useClassName={classNameOfBoxLabel}
            fontColor="white"
            paragramMenuText={paragramMenuTextOfLabel}
            menuNameJp={textOfMenuNameJp}
            menuNameEn={textOfMenuNameEn}
            menuNum={textOfMenuNameNum}
            price={textOfMenuprice}
            classNameArray={['11', '22']}
          />
          <div className={classNameOfBoxImg}>
            <Image
              src={pathToImg}
              width={200} // Specify different width values based on device or viewport size
              height={200}
              alt="Your Image"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div>
        <div className={classNameOfBox}>
          <div className={classNameOfBoxImg}>
            <Image
              src={pathToImg}
              width={200} // Specify different width values based on device or viewport size
              height={200}
              alt="Your Image"
              layout="responsive"
            ></Image>
          </div>
          <MenuBoxLabel
            useClassName={classNameOfBoxLabel}
            fontColor="white"
            paragramMenuText={paragramMenuTextOfLabel}
            menuNameJp={textOfMenuNameJp}
            menuNameEn={textOfMenuNameEn}
            menuNum={textOfMenuNameNum}
            price={textOfMenuprice}
            classNameArray={['11', '22']}
          />
          <div className={styles.menuBlockImgOnlySp}>
            <Image
              src={pathToImg}
              width={200} // Specify different width values based on device or viewport size
              height={200}
              alt="Your Image"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBlock;
