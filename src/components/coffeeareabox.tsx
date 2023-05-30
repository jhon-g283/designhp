import styles from '../../styles/cafe/cafe.module.css';

import { MenuBlockForArea } from './coffeemenubox';

// 試しに設定する
const AreaBoxCmp = () => {
  const text1 = (
    <>
      <p>
        同じチームメンバーやクライアント様との<br></br>
        打ち合わせに使用できるエリア
      </p>
    </>
  );
  return (
    <>
      <div>
        <MenuBlockForArea
          classNameOfBox={styles.areaBlock}
          classNameOfBoxLabel={styles.areaTextLabelBlack}
          classNameOfBoxImg={styles.areaBlockImg}
          paragramMenuTextOfLabel={text1}
          textOfMenuNameJp={'ミーティングエリア'}
          textOfMenuNameEn={'Meeting Area'}
          textOfMenuNameNum={''}
          textOfMenuprice={''}
          pathToImg={'/img/meeting.png'}
          displayPattern={'01'}
        />
      </div>
      <div>
        <MenuBlockForArea
          classNameOfBox={styles.areaBlock}
          classNameOfBoxLabel={styles.areaTextLabelBlackReverse}
          classNameOfBoxImg={styles.areaBlockImgReverse}
          paragramMenuTextOfLabel={text1}
          textOfMenuNameJp={'ミーティングエリア'}
          textOfMenuNameEn={'Meeting Area'}
          textOfMenuNameNum={''}
          textOfMenuprice={''}
          pathToImg={'/img/meeting.png'}
          displayPattern={'02'}
        />
      </div>
      <div>
        <MenuBlockForArea
          classNameOfBox={styles.areaBlock}
          classNameOfBoxLabel={styles.areaTextLabelBlack}
          classNameOfBoxImg={styles.areaBlockImg}
          paragramMenuTextOfLabel={text1}
          textOfMenuNameJp={'ミーティングエリア'}
          textOfMenuNameEn={'Meeting Area'}
          textOfMenuNameNum={''}
          textOfMenuprice={''}
          pathToImg={'/img/meeting.png'}
          displayPattern={'01'}
        />
      </div>
    </>
  );
};

export default AreaBoxCmp;
