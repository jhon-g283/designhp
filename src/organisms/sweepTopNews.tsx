import { useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import { newsDataList } from '../types';
import { NewsItemTop } from '../molecules/sweepTopNewsItemComponent';
import { fetchInfomations } from '../store/reducers/getNewsDataSlice';
import { AppDispatch } from '../store/index'; //方で怒られるので入れた
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import styled from 'styled-components';

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

  const newsList = newsData.map((item) => {
    return (
      <>
        <div>
          <NewsItemTop
            topickType={item.type}
            imageUrl={item.imageUrl}
            date={item.date}
            title={item.title}
          />
        </div>
      </>
    );
  });

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
      <div className={styles.newsConponentWrapper}>
        <div>
          <div>ss</div>
          <SectionTitle
            className={`${styles.titleNews} ${styles.sectionHeader}`}
          >
            News
          </SectionTitle>
          <p>
            注目のトピック 新作商品やキャンペーンなど気になる情報は こちらから
          </p>
        </div>
        <div className={styles.newsListWrapper}>{newsList}</div>
      </div>
      <div className={styles.linkButtonWrapper}>
        <div className={styles.readMoreButton}>
          <a>READ MORE</a>
        </div>
      </div>
    </>
  );
};

export default NewsComponent;
