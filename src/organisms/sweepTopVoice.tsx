import styles from '../../styles/sweep/sweep.module.css';
import animationStyle from '../../styles/sweep/sweepanimation.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import ReviewItem from '../molecules/sweepReviewItemComponents';
import { useEffect } from 'react';
import { AppDispatch } from '../store/index'; //方で怒られるので入れた
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { fetchReviewItemList } from '../../src/store/reducers/reviewListSlice';

import { reviewList } from '../types';

// ヘッダー部分のコンポーネント
const VoiceComponent = () => {
  // Redux
  const dispatch = useDispatch<AppDispatch>();
  // データ取得
  useEffect(() => {
    console.log('useEffect dispatch fetching information');

    dispatch(fetchReviewItemList(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Redux:ピックアップ商品
  const reviewDataList = useSelector(
    (state: { getReviewListReducer: reviewList }) =>
      state.getReviewListReducer?.reviewList
        ? state.getReviewListReducer.reviewList
        : []
  ).slice(0, 4);

  console.log(reviewDataList);

  return (
    <>
      <Div
        className={styles.voiceConponentWrapper}
        afterClass={`${animationStyle.FeedIn1}`}
        beforeClass=""
        once={true}
        rootMargin="0px"
      >
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet16}></div>
        </Div>
        <div className={styles.voiceSectionWrapper}>
          <div className={styles.sectionHeaderWrapper}>
            <SectionTitle
              className={`${styles.titleVoice} ${styles.sectionHeader}`}
            >
              VOICE
            </SectionTitle>
          </div>

          <div className={styles.sectionSubTitleWrapper}>
            <SectionSubTitle className={styles.sectionSubTitle}>
              お客様の声
            </SectionSubTitle>
          </div>
        </div>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet17}></div>
        </Div>
        <div className={styles.reviewItemListWrapper}>
          <div className={styles.reviewItemList}>
            {reviewDataList.map((item, index) => {
              const reviewerInfo = `(${item.reviewerAge} ${item.reviewerJob} ${item.reviewerGender})`;
              const param = `id=${item?.id}&code=${item?.code}`; //商品ID+コード
              return (
                <ReviewItem
                  key={'reviewItem_' + index}
                  imageUrl={item.imageUrl}
                  itemName={item.itemName}
                  price={item.price}
                  review={item.review}
                  linkParam={param}
                  reviewerInfo={reviewerInfo}
                  commentText={item.commentText}
                />
              );
            })}
          </div>
        </div>
      </Div>
    </>
  );
};

export default VoiceComponent;
