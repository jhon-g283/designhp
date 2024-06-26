import type { NextPage } from 'next';
import Head from 'next/head';

import CoofeeTopPageTemplate from '../../src/templates/coffeetemplatetop';

// http://localhost:3000/designpage/cafetoppage
const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CoofeeTopPageTemplate />
    </>
  );
};

export default Main;
