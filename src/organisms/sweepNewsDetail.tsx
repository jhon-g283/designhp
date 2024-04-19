import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import styled from 'styled-components';
import { default as Div } from '../common/observeDivComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfomations } from '../store/reducers/getNewsDataSlice';
import { AppDispatch } from '../store/index';
import { newsDataList } from '../types';
import { NewsDetailProps } from '../../pages/sweep/news/newsDetail';
import NewsItemComponent from '../molecules/sweepNewsListItem';

// ヘッダー部分のコンポーネント
const NewsListComponent = ({ newsId }: NewsDetailProps) => {
  // Redux{}

  const dispatch = useDispatch<AppDispatch>();
  const newsData = useSelector((state: { newsListReducer: newsDataList }) =>
    state.newsListReducer?.data ? state.newsListReducer.data : []
  );

  const query = newsId !== '' ? `id=${newsId}` : '';

  useEffect(() => {
    console.log('useEffect dispatch fetching information');
    dispatch(fetchInfomations(`${query}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <div className={styles.newsDetailComponentWrapper}>
        <div className={styles.newsDetailListWrapper}>
          {/* {newsData.map((item, index) => {
            return (
              <NewsItemComponent
                newsDataProps={item}
                key={'NewsItemComponent_' + index}
              />
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default NewsListComponent;
