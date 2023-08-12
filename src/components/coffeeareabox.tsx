import styles from '../../styles/cafe/cafe.module.css';

import { MenuBlockForArea } from './coffeemenubox';

// Areaセクションのエリア紹介部分のコンポ
const AreaBoxCmp = () => {
  const text1 = (
    <>
      <p>
        同じチームメンバーやクライアント様との<br></br>
        打ち合わせに使用できるエリア
      </p>
    </>
  );
  const text2 = (
    <>
      <p>
        自然にアイデアの湧き出る開放感のあるエリア。
        <br className={styles.brOnlyPC}></br>
        他クリエイターとの交流の場にもなります。
      </p>
    </>
  );
  const text3 = (
    <>
      <p>
        業務上重要な作業や会議を鍵と防音のある場所
        <br className={styles.brOnlyPC}></br>
        で行いたい、集中した場所が必要な方への エリア
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
          pathToImgSP={'/img/meetingSP.jpg'}
          displayPattern={'01'}
        />
      </div>
      <div>
        <MenuBlockForArea
          classNameOfBox={styles.areaBlockReverse}
          classNameOfBoxLabel={styles.areaTextLabelBlackReverse}
          classNameOfBoxImg={styles.areaBlockImgReverse}
          paragramMenuTextOfLabel={text2}
          textOfMenuNameJp={'プレミアムエリア'}
          textOfMenuNameEn={'Premium Area'}
          textOfMenuNameNum={''}
          textOfMenuprice={''}
          pathToImg={'/img/premiumarea.jpg'}
          pathToImgSP={'/img/premiumareaSP.jpg'}
          displayPattern={'01'}
        />
      </div>
      <div>
        <MenuBlockForArea
          classNameOfBox={styles.areaBlock}
          classNameOfBoxLabel={styles.areaTextLabelBlack}
          classNameOfBoxImg={styles.areaBlockImg}
          paragramMenuTextOfLabel={text3}
          textOfMenuNameJp={'セキュアエリア'}
          textOfMenuNameEn={'Secure Area'}
          textOfMenuNameNum={''}
          textOfMenuprice={''}
          pathToImg={'/img/securearea.jpg'}
          pathToImgSP={'/img/secureareaSP.jpg'}
          displayPattern={'01'}
        />
      </div>
    </>
  );
};

export default AreaBoxCmp;
