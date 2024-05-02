import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import SectionTitle from '../atoms/sweepTitleComponent';
import SectionSubTitle from '../atoms/sweepSubTitleComponent';
import { TopPageItemBox } from '../molecules/sweepItemBoxComponents';
import { searchResultData } from '../types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { AppDispatch } from '../store/index'; //方で怒られるので入れた
import { fetchPickUpItemList } from '../store/reducers/getPickUpListDataSlice';

// ヘッダー部分のコンポーネント
const PickUpComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  // データ取得
  useEffect(() => {
    console.log('useEffect dispatch fetching information');

    dispatch(fetchPickUpItemList('1,1,1,1'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Redux:ピックアップ商品
  const pickUpData = useSelector(
    (state: { pickUpListReducer: searchResultData }) =>
      state.pickUpListReducer?.itemlist ? state.pickUpListReducer.itemlist : []
  );

  return (
    <>
      <div className={styles.pickUpConponentWrapper}>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet10}></div>
        </Div>
        <div className={styles.pickUpListWrapper}>
          {pickUpData.slice(0, 3).map((item, index) => {
            const key = 'campaignList1_Items_' + index;
            const param = `id=${item?.id}&code=${item?.code}`; //商品ID+コード
            return (
              <TopPageItemBox
                key={key}
                id={item.id || ''}
                code={item.code || ''}
                imageUrl={item.imageUrl || ''}
                itemName={item.itemName || ''}
                price={item.price || ''}
                review={item.evaluation || 0}
                linkParam={param || ''}
              />
            );
          })}
        </div>
        <Div
          afterClass="test"
          beforeClass="pre--"
          className="defoooo"
          once={true}
          rootMargin="0px"
        >
          <div className={styles.backGroundSheet9}></div>
        </Div>
        <div className={styles.pickupSectionWrapper}>
          <div className={styles.sectionHeaderWrapper}>
            <SectionTitle
              className={`${styles.titlePickUp} ${styles.sectionHeader}`}
            >
              PICK UP
            </SectionTitle>
          </div>
          <div className={styles.pickupDiscriptionWrapper}>
            <div className={styles.sectionSubTitleWrapper}>
              <SectionSubTitle className={styles.sectionSubTitle}>
                あなたにおすすめの商品
              </SectionSubTitle>
            </div>

            <p>こちらの商品をぜひお試しになってはいかがでしょうか？</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickUpComponent;
