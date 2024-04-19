import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import styled from 'styled-components';
import { default as Div } from '../common/observeDivComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfomations } from '../store/reducers/getNewsDataSlice';
import { AppDispatch } from '../store/index';
import { newsDataList } from '../types';

import NewsItemComponent from '../molecules/sweepNewsListItem';

// ヘッダー部分のコンポーネント
const NewsListComponent = () => {
  // Redux{}

  const dispatch = useDispatch<AppDispatch>();
  const newsData = useSelector((state: { newsListReducer: newsDataList }) =>
    state.newsListReducer?.data ? state.newsListReducer.data : []
  );

  useEffect(() => {
    console.log('useEffect dispatch fetching information');
    dispatch(fetchInfomations(''));
  }, [dispatch]);

  const width = 38;

  const color = 'black';
  const Title = styled.p`
    // PC表示の場合
    @media (min-width: 768px) {
      // 前
      &::before {
        content: url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='1'>
      <rect width='100%' height='100%' fill='${color}' />
      </svg>
    
    ");
      }

      // 後
      &::after {
        content: url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='1'>
      <rect width='100%' height='100%' fill='${color}' />
      </svg>");
      }
    }
    //SP表示時には長さを半分にする
    @media (max-width: 768px) {
      &::before {
        content: url("data:image/svg+xml;utf8,
        <svg xmlns='http://www.w3.org/2000/svg' width='${width / 2}' height='1'>
        <rect width='100%' height='100%' fill='${color}' />
        </svg>");
      }
      &::after {
        content: url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='${width / 2}' height='1'>
      <rect width='100%' height='100%' fill='${color}' />
      </svg>");
      }
    }
  `;

  return (
    <>
      <div className={styles.newsListComponentWrapper}>
        <div className={styles.newsListTitleWrapper}>
          <Title>お知らせ一覧</Title>
        </div>
        <div className={styles.newsListDescriptionWrapper}>
          <p>
            実施中のキャンペーンや新商品の情報、
            <br className={styles.imgSP}></br>その他トピックなどを紹介
          </p>
        </div>

        <div className={styles.newsListPageListWrapper}>
          {newsData.map((item, index) => {
            return (
              <NewsItemComponent
                newsDataProps={item}
                key={'NewsItemComponent_' + index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsListComponent;
