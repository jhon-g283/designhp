import { useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import Title from '../atoms/sweepTitleComponent';
import { newsDataList } from '../types';
import { NewsItemTop } from '../molecules/sweepTopNewsItemComponent';
import { fetchInfomations } from '../store/reducers/getNewsDataSlice';
import { AppDispatch } from '../store/index'; //方で怒られるので入れた
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み

// ヘッダー部分のコンポーネント
const NewsComponent = () => {
  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const newsData = useSelector((state: { newsListReducer: newsDataList }) =>
    state.newsListReducer?.data ? state.newsListReducer.data : []
  ); //商品リスト取得(カート数)
  //dispatch実行
  useEffect(() => {
    console.log('useEffect dispatch fetchinfomation');
    dispatch(fetchInfomations(''));
  }, [dispatch]);

  console.log(newsData);
  return (
    <>
      <Div
        afterClass="test"
        beforeClass="pre--"
        className="defoooo"
        once={true}
        rootMargin="0px"
      >
        <p>ooooo</p>
      </Div>
      <div>
        <div>ss</div>
        <Title className={styles.title1}>News</Title>
        <p>
          注目のトピック 新作商品やキャンペーンなど気になる情報は こちらから
        </p>
      </div>
      <div>
        <NewsItemTop
          topickType="news"
          imageUrl="/img/FirstSectionImg2-2.png"
          date="2023.02.02"
          title="New Item"
        />
      </div>
    </>
  );
};

export default NewsComponent;
