import styles from "../../styles/cafe/cafe.module.css";
import Image from "next/image";
import styled from "styled-components";
import Header from "../../src/components/coffeeheader";
import AboutArea from "../../src/components/page1about";
import hearoImg from "../../public/img/hero.png";
import VS from "../../public/vercel.svg";

const backgroundImage = "public/img/hero.png";

const test = "http://localhost:3000" + VS.src;
console.log(hearoImg.src);
console.log(test);

const ImgCmp = styled.div`
  background-image: url(${hearoImg.src});

  //   width: "250px";
  //   width: 108px;
  //   background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;
  //   display: flex;
`;

const Hero = () => {
  return (
    <>
      <ImgCmp>
        <div className={styles.heroword}>
          <p>クリエイターの立ち寄るカフェ</p>
          <p className={styles.shopname}>Cafe Cucua Coffee</p>
          <p>In TOKYO</p>
        </div>
      </ImgCmp>
    </>
  );
};

const CoofeeTemplate = () => {
  return (
    <>
      <Header />
      <Hero></Hero>
      <AboutArea />
    </>
  );
};

export default CoofeeTemplate;
