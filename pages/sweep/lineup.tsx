import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';

import SweepLineUpPageTemplate from '../../src/templates/sweeptemplatelineup';

// GetServerSidePropsのPropsのインターフェース
export interface LineupProps {
  SelectedSize: string; //サイズ
  SelectedCategory: string; //カテゴリー
}

const Main: NextPage<LineupProps> = (props) => {
  // サイズとカテゴリーを取得
  const { SelectedSize, SelectedCategory } = props;
  console.log('SelectedSize:' + SelectedSize);
  console.log('SelectedCategory:' + SelectedCategory);
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
      <SweepLineUpPageTemplate
        SelectedSize={SelectedSize}
        SelectedCategory={SelectedCategory}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // クエリパラメータからサイズとカテゴリーを取得
  const Size = context.query?.Size !== undefined ? context.query.Size : '';
  const Category =
    context.query?.Category !== undefined ? context.query.Category : '';

  console.log('Size:' + Size);
  console.log('Category:' + Category);
  // propsとしてページコンポーネントに渡すデータを返す
  return {
    props: {
      SelectedSize: Size,
      SelectedCategory: Category,
    },
  };
};

export default Main;

/*  




*/
