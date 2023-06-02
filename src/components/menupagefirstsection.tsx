// Moreページの最初のセクション

export interface arrayText {
  name: string;
  price: string;
  path: string;
  key: string;
}

import styles from '../../styles/cafe/cafe.module.css';

import SectionTitleComp from './coffeesectiontitle';
import ExplainSectionComp from './coffeeexplainsection';

import Paragraph from './coffeeparagraph';
import MenuList from './coffeemenulist';

const textBlack1 = (
  <>
    <p>体を癒すドリンク類はホット・アイス各種取り揃えています。</p>
  </>
);

const menuTitle1 = (
  <>
    <p>フード</p>
  </>
);

const textBlack2 = (
  <>
    <p>
      軽食からランチメニューまで様々なメニューがございます。期間限定のものもございますのでぜひ来店ください
    </p>
  </>
);

const menuTitle2 = (
  <>
    <p>ドリンク</p>
  </>
);

const textBlack3 = (
  <>
    <p>
      ナッツやスイーツなど作業中の頭や体をリフレッシュするメニューになります。
    </p>
  </>
);

const menuTitle3 = (
  <>
    <p>デザート・その他</p>
  </>
);

const menuArrayDrink: arrayText[] = [
  { name: 'ブレンドコーヒー', price: '500', path: '/img/Drink1.png', key: 'A' },
  {
    name: 'アメリカンコーヒー',
    price: '500',
    path: '/img/Drink2.png',
    key: 'A',
  },
  { name: 'アイスカフェオレ', price: '600', path: '/img/Drink3.png', key: 'A' },
  { name: '抹茶ラテ', price: '600', path: '/img/Drink4.png', key: 'A' },
  { name: 'プレミアムカフェ', price: '800', path: '/img/Drink5.png', key: 'A' },
  {
    name: 'プレミアムブレンド',
    price: '800',
    path: '/img/Drink6.png',
    key: 'A',
  },
];

const menuArrayFood: arrayText[] = [
  {
    name: 'サンドウィッチセット',
    price: '500',
    path: '/img/Food1.png',
    key: 'A',
  },
  {
    name: '魚介スープ',
    price: '500',
    path: '/img/Food2.png',
    key: 'A',
  },
  {
    name: 'マカロニカルボナーラ',
    price: '500',
    path: '/img/Food3.png',
    key: 'A',
  },
  {
    name: 'ミートソースパスタ',
    price: '600',
    path: '/img/Food4.png',
    key: 'A',
  },
  { name: 'アボガドの肉づめ', price: '800', path: '/img/Food5.png', key: 'A' },
  {
    name: 'クリームカレー',
    price: '1000',
    path: '/img/Food6.png',
    key: 'A',
  },
];

const menuArrayOther: arrayText[] = [
  {
    name: 'ピーナッツ',
    price: '200',
    path: '/img/Other1.png',
    key: 'A',
  },
  {
    name: 'コーヒーパフェラテ',
    price: '400',
    path: '/img/Other2.png',
    key: 'A',
  },
  {
    name: 'チーズタルト',
    price: '500',
    path: '/img/Other3.png',
    key: 'A',
  },
  {
    name: 'チーズケーキ',
    price: '600',
    path: '/img/Other4.png',
    key: 'A',
  },
  {
    name: 'ストロベリータルト',
    price: '700',
    path: '/img/Other5.png',
    key: 'A',
  },
  {
    name: 'レモンタルト',
    price: '800',
    path: '/img/Other6.png',
    key: 'A',
  },
];

const MenuFirstSection = () => {
  return (
    <>
      <div className={styles.menufirstsectionwrapper}>
        <SectionTitleComp
          text={'MENU'}
          useClassName={styles.sectionTitle}
          fontColor={'black'}
          idOfElement={'morepageFirstSection'}
        />
        <ExplainSectionComp
          text={'メニュー一覧'}
          useClassName={styles.explainsection}
          fontColor={'black'}
          widthOfBorder={300}
        />
        <div className={styles.menuTitleLabelUnderbar}>
          <Paragraph
            useClassName={styles.menuTitleLabel}
            fontColor="white"
            paragramText={menuTitle1}
          />
        </div>
        <Paragraph
          useClassName={styles.paragramCmpClass}
          fontColor="black"
          paragramText={textBlack1}
        />
        <MenuList arrayData={menuArrayDrink} />
        <div className={styles.menuTitleLabelUnderbar}>
          <Paragraph
            useClassName={styles.menuTitleLabel}
            fontColor="white"
            paragramText={menuTitle1}
          />
        </div>
        <Paragraph
          useClassName={styles.paragramCmpClass}
          fontColor="black"
          paragramText={textBlack2}
        />
        <MenuList arrayData={menuArrayFood} />
        <div className={styles.menuTitleLabelUnderbar}>
          <Paragraph
            useClassName={styles.menuTitleLabel}
            fontColor="white"
            paragramText={menuTitle3}
          />
        </div>
        <Paragraph
          useClassName={styles.paragramCmpClass}
          fontColor="black"
          paragramText={textBlack3}
        />
        <MenuList arrayData={menuArrayOther} />
      </div>
    </>
  );
};

export default MenuFirstSection;
