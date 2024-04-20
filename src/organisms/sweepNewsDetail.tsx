import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import styled from 'styled-components';
import { default as Div } from '../common/observeDivComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfomations } from '../store/reducers/getNewsDataSlice';
import { AppDispatch } from '../store/index';
import { newsDataList, newsData } from '../types';
import { NewsDetailProps } from '../../pages/sweep/news/newsDetail';
import Image from 'next/image';
import NewsItemComponent from '../molecules/sweepNewsListItem';

// ヘッダー部分のコンポーネント
const NewsDetailComponent = ({ newsId }: NewsDetailProps) => {
  // Redux{}

  // ダミーのnewsData型データ
  const dummyNewsData: newsData[] = [
    {
      id: '999',
      date: '2023.09.01',
      title: 'ダミーニュースタイトル',
      imageUrl: '/imgSweep/Dummy_news.jpg',
      detailImagePC: '/imgSweep/DummyDetailImage_PC.jpg',
      detailImageSP: '/imgSweep/DummyDetailImage_SP.jpg',
      type: 'NEWS',
      description: 'これはダミーのニュース詳細です。',
      newsDetail: [
        {
          label: 'ダミーラベル',
          title: 'ダミータイトル',
          text: 'ダミーテキストです。',
        },
      ],
    },
  ];

  const dispatch = useDispatch<AppDispatch>();
  const newsDataArray = useSelector(
    (state: { newsListReducer: newsDataList }) =>
      state.newsListReducer?.data ? state.newsListReducer.data : dummyNewsData
  );

  const newsData: newsData | undefined = newsDataArray.find((item) => {
    return item.id == newsId;
  });

  const query = newsId !== '' ? `id=${newsId}` : '';

  useEffect(() => {
    console.log('useEffect dispatch fetching information');
    dispatch(fetchInfomations(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // idからニュースを絞り込む
  const newsTitle = newsData?.title !== undefined ? newsData.title : '';
  const imageUrl =
    newsData?.detailImagePC !== undefined ? newsData.detailImagePC : '';
  const imageUrlSP =
    newsData?.detailImageSP !== undefined ? newsData.detailImageSP : '';

  const newsDetailDataArray =
    newsData?.newsDetail !== undefined ? newsData.newsDetail : [];

  return (
    <>
      <div className={styles.newsDetailComponentWrapper}>
        <div className={styles.newsDetailComponentInnerWrapper}>
          <div className={styles.newsDetailTitleWrapper}>
            <p>{newsTitle}</p>
          </div>

          <div className={styles.newsDetailOuterWrapper}>
            <div className={styles.newsDetailImage}>
              <Image
                src={imageUrl}
                // width={129} // Specify different width values based on device or viewport size
                // height={110}
                alt="Your Image"
                fill={true}
                style={{ objectFit: 'contain' }}
                className={`${styles.imgPC} ${styles.lineupImg}`}
              ></Image>
              <Image
                src={imageUrlSP}
                // width={129} // Specify different width values based on device or viewport size
                // height={110}
                alt="Your Image"
                fill={true}
                style={{ objectFit: 'contain' }}
                className={`${styles.imgSP} ${styles.lineupImg}`}
              ></Image>
            </div>
          </div>

          <div className={styles.newsDetailTextArea}>
            {newsDetailDataArray.map((item, index) => {
              return (
                <div key={'newsDetail_' + index}>
                  <p className={styles.itemDetailLabel}>{item.label}</p>

                  <div className={styles.newsDetailDescriptionWrapper}>
                    <p>{item.title}</p>
                  </div>
                  <div className={styles.newsDetailTextWrapper}>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.newsDetailTitleWrapper}>
            <p className={styles.newsDetailListTitle}>お知らせ一覧</p>
          </div>

          <div className={styles.newsDetailNewsListWrapper}>
            {newsDataArray.map((item, index) => {
              return (
                <NewsItemComponent
                  newsDataProps={item}
                  key={'NewsItemComponent_' + index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailComponent;
