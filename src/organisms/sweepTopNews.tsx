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
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Tuple } from '@reduxjs/toolkit';

// ヘッダー部分のコンポーネント
const NewsComponent = () => {
  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const newsData = useSelector((state: { newsListReducer: newsDataList }) =>
    state.newsListReducer?.data ? state.newsListReducer.data : []
  ); //商品リスト取得
  //dispatch実行
  useEffect(() => {
    console.log('useEffect dispatch fetchinfomation');
    dispatch(fetchInfomations(''));
  }, [dispatch]);

  const newsSlide = newsData.map((item, index) => {
    return (
      <SplideSlide key={`news-slide-${index}`}>
        <div
          className={styles.newsItemWrapper}
          // key={'news_div_' + index}
        >
          <NewsItemTop
            topicType={item.type}
            imageUrl={item.imageUrl}
            date={item.date}
            title={item.title}
          />
        </div>
      </SplideSlide>
    );
  });

  if (newsData.length == 0) {
    // alert(newsData.length);
    // newsSlide = [<></>, <></>, <></>, <></>];
  } else {
  }

  // スライダー
  const sliderArea = (
    <>
      <Splide
        hasTrack={false}
        options={{
          autoHeight: true,
          autoWidth: true,
          perMove: 1,
          perPage: 4,
          padding: '0px',
          gap: '0vw',
          pagination: false,

          mediaQuery: 'max',
          // width: '100%',
          breakpoints: {
            // 768p以下
            768: {
              perPage: 2,
              // width: '100vw',
              padding: '12px',
              gap: '6vw',
            },
            // 468px以下
            468: {
              perPage: 2,
              // width: '100vw',
              padding: '12px',
              gap: '6vw',
            },
          },
          arrows: true,
          lazyLoad: true,
          autoplay: false,
          rewind: false,
        }}
        aria-label="お気に入りの写真"
      >
        <SplideTrack>{newsSlide}</SplideTrack>
        <div className={`splide__arrows ${styles.imgSP}`}>
          <button className="splide__arrow splide__arrow--prev news-slider-arrow-prev">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="16.7071"
                y1="8.70711"
                x2="8.22182"
                y2="17.1924"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="16.2929"
                y1="9.70711"
                x2="7.80761"
                y2="1.22182"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </button>
          <button className="splide__arrow splide__arrow--next news-slider-arrow-next">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="16.7071"
                y1="8.70711"
                x2="8.22182"
                y2="17.1924"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="16.2929"
                y1="9.70711"
                x2="7.80761"
                y2="1.22182"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </Splide>
    </>
  );

  return (
    <>
      <div className={styles.marginBlock}>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet1}></div>
        </Div>
      </div>
      <div className={styles.newsConponentWrapper}>
        <div className={styles.newsCompoTitleArea}>
          {/* タイトル名 */}
          <div className={styles.sectionHeaderWrapper}>
            <SectionTitle
              className={`${styles.titleNews} ${styles.sectionHeader}`}
            >
              News
            </SectionTitle>
          </div>

          <div className={styles.newsParagraph}>
            <p className={styles.paragraph}>
              注目のトピック<br className={styles.onlySPBr}></br>
              新作商品やキャンペーンなど気になる情報は
              <br className={styles.onlySPBr}></br>
              こちらから
            </p>
          </div>
        </div>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet2}></div>
        </Div>

        <div className={styles.newsListWrapper}>{sliderArea}</div>
      </div>
      <div className={styles.linkButtonWrapper}>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet3}></div>
        </Div>
        <div className={styles.readMoreButton}>
          <a>READ MORE</a>
        </div>
      </div>
    </>
  );
};

export default NewsComponent;
