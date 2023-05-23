import styles from "../../styles/cafe/cafe.module.css";
import Image from "next/image";

const SideMenu = (
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
  return <>{SideMenu}</>;
};

export default AboutArea;
