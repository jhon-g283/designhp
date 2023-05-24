import styles from "../../styles/cafe/cafe.module.css";
import Image from "next/image";
import styled from "styled-components";
import Header from "../../src/components/coffeeheader";
import TopFirstSection from "../components/toppagefirstsection";
import hearoImg from "../../public/img/hero.png";
import SideMenuBar from "../components/coffeesidbemenu";

const backgroundImage = "/img/hero.png";

const test = "/img/hero.png";
console.log(hearoImg.src);

const ImgCmp = styled.div`
  background-image: url("/img/hero.png");

  padding: auto auto;

  //   background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;
  //   display: flex;
`;

const HeroImage = (
  <div className={styles.heroimgclass}>
    <Image
      src="/img/hero.png"
      width={1500} // Specify different width values based on device or viewport size
      height={727}
      alt="Your Image"
      layout="responsive"
    ></Image>
  </div>
);

console.log("ImgCmp");
console.log(ImgCmp);

const Hero = () => {
  return (
    <>
      {HeroImage}
      {/* <ImgCmp> */}
      <div className={styles.heroword}>
        <p className={styles.subtext1}>クリエイターの立ち寄るカフェ</p>
        <p className={styles.shopname}>Cafe Cucua Coffee</p>
        <p className={styles.subtext1}>In TOKYO</p>
      </div>
      {/* </ImgCmp> */}
    </>
  );
};

const CoofeeTemplate = () => {
  return (
    <>
      <Header />
      <div className={styles.wrap1}>
        <Hero></Hero>
        <SideMenuBar />
      </div>

      <TopFirstSection />
      <TopFirstSection />
      <TopFirstSection />
      <TopFirstSection />
      <TopFirstSection />
    </>
  );
};

export default CoofeeTemplate;
