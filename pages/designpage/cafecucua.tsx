import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../../src/components/coffeeheader";
import CoofeeTemplate from "../../src/templates/coffeetemplate";

// http://localhost:3000/designpage/cafecucua
const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <body> */}

      <CoofeeTemplate />
      {/* </body> */}
    </>
  );
};

export default Main;