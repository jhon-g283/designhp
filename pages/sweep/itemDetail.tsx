import type { NextPage, GetServerSideProps } from 'next';

import Head from 'next/head';

import SweepItemDetailPageTemplate from '../../src/templates/sweeptemplateitemdetail';

// GetServerSidePropsのPropsのインターフェース
export interface ItemDetailProps {
  itemId: string; //商品ID
}

const Main: NextPage<ItemDetailProps> = (props) => {
  // Propsから商品IDを取得
  const id = props.itemId;

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
      {/* 商品IDを渡す */}
      <SweepItemDetailPageTemplate itemId={id} />
    </>
  );
};

// サーバーサイドの処理を実施してクエリパラメータを取得後、Propsとして渡す。
export const getServerSideProps: GetServerSideProps = async (context) => {
  // クエリパラメータから商品IDを取得
  const id = context.query?.id !== undefined ? context.query.id : '0';

  // propsとしてページコンポーネントに渡すデータを返す
  return {
    props: {
      itemId: id,
    },
  };
};

export default Main;