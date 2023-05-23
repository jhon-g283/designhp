import styles from "../../styles/cafe/cafe.module.css";
import Image from "next/image";

import Header from "../../src/components/coffeeheader";

const hearo = (
  <>
    {" "}
    <div>
      <p>クリエイターの立ち寄るカフェ</p>
      <p>Cafe Cucua Coffee</p>
      <p>In TOKYO</p>
    </div>
  </>
);

const AboutArea = () => {
  return <>{hearo}</>;
};

export default AboutArea;
