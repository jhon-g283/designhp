import styles from "../../styles/cafe/cafe.module.css";
import Image from "next/image";

import Header from "./coffeeheader";

const SectionTitle = (
  <>
    <h1>ABOUT</h1>
  </>
);

const ExplainSection = (
  <>
    <p>Cafe Cucua Coffee とは？</p>
  </>
);

const ExplainSection1 = (
  <>
    <p>Concept</p>
  </>
);

const ExplainSection2 = (
  <>
    <p>”クリエイターのため”に作られたカフェ</p>
  </>
);

const TextWite = (
  <>
    <p>
      当店ではクリエイティブなアイデアを生み出すために
      以下をご用意しております。
    </p>
  </>
);

const ListWite = (
  <>
    <ul>
      <li>Wi-Fiやコンセントなどの機材環境</li>
      <li>リラックスしてアイデアを練り上げられる空間</li>
    </ul>
  </>
);

const BlackBackGroundDiv = (
  <>
    <div>
      {TextWite}
      {ListWite}
    </div>
  </>
);

const Image1 = (
  <>
    <div className={styles.sectionImage1}>
      <Image
        src="/img/FirstSectionImg1.png"
        width={200} // Specify different width values based on device or viewport size
        height={200}
        alt="Your Image"
        layout="responsive"
      ></Image>
    </div>
  </>
);

const TopFirstSection = () => {
  return (
    <>
      {SectionTitle}
      {ExplainSection}
      {ExplainSection1}
      {ExplainSection2}
      {BlackBackGroundDiv}
      {Image1}
    </>
  );
};

export default TopFirstSection;
