import { useState, useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import { searchResultData } from '../types';
import { ItemBox } from '../molecules/sweepItemBoxComponents';
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { fetchInfomations } from '../store/reducers/getNewsDataSlice';
import { fetchItemList } from '../store/reducers/searchItemsSlice';
import { AppDispatch } from '../store/index'; //方で怒られるので入れた

// ヘッダー部分のコンポーネント
const LineupComponent = () => {
  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const itemlistData = useSelector(
    (state: { itemListReducer: searchResultData }) =>
      state.itemListReducer?.itemlist ? state.itemListReducer.itemlist : []
  ); //商品リスト取得

  const categoryData = useSelector(
    (state: { itemListReducer: searchResultData }) =>
      state.itemListReducer?.categories ? state.itemListReducer.categories : []
  ); //商品リスト取得

  // 商品概要の表示項モックをuseSelecterから取得
  const categoryName = categoryData[0].categoryName; //カテゴリー名
  const categoryDescription = categoryData[0].categoryDescription; //カテゴリー概要
  const categoryDetail = categoryData[0].categoryDetail; //カテゴリーの詳細分

  // useState(選択中のカテゴリ名)
  const [category, setCategory] = useState('Basic');
  // useState(選択中のサイズ)
  const [size, setSize] = useState('A');

  //dispatch実行
  useEffect(() => {
    // カテゴリー
    console.log('useEffect dispatch fetchinfomation');

    // 問い合わせクエリ
    const query = 'Category=' + category + '&' + 'Size=' + size;

    dispatch(fetchItemList(query));
  }, [category, size, dispatch]);

  const ItemListComponent = itemlistData.map((item) => {
    return (
      <>
        <ItemBox
          imageUrl={item.imageUrl || ''}
          itemName={item.itemName}
          price={item.price}
          review={item.evaluation}
          linkParam={item.id || ''}
        />
      </>
    );
  });

  const CheckBox = (currentCategory: string = '') => {
    return (
      <>
        <input
          type="checkbox"
          name="category"
          checked={category == currentCategory}
        />
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.568397"
            y1="3.69662"
            x2="5.51815"
            y2="8.64637"
            stroke="white"
          />
          <line
            x1="4.82079"
            y1="8.63633"
            x2="12.8188"
            y2="1.08442"
            stroke="white"
          />
        </svg>
      </>
    );
  };

  return (
    <>
      <div className={styles.lineupConponentWrapper}>
        <div className={styles.lineupFilterArea}>
          <p>フィルター</p>

          <div className={styles.lineupFilterBlockWrapper}>
            <p>カテゴリ</p>
            <ul>
              <li
                onClick={() => {
                  setCategory('Basic');
                }}
              >
                ベーシック
                {CheckBox('Basic')}
              </li>
              <li
                onClick={() => {
                  setCategory('Caramel');
                }}
              >
                キャラメル
                {CheckBox('Caramel')}
              </li>
              <li>ミルク</li>
              <li>ストロベリー</li>
              <li>サクラ</li>
              <li>ビター</li>
              <li>期間限定</li>
            </ul>
          </div>

          <div
            className={`${styles.lineupFilterBlockWrapper} ${styles.listWrapperMargin}`}
          >
            <p>サイズ</p>
            <ul>
              <li>全サイズ</li>
              <li>１週間セット</li>
              <li>１ヶ月セット</li>
              <li>エクストラ</li>
            </ul>
          </div>
        </div>

        <div className={styles.lineupItemArea}>
          <div className={styles.lineupCategoryExprainArea}>
            <div className={styles.lineupCategoryTitle}>
              <h2>{categoryName}</h2>
            </div>
            <div className={styles.lineupExplainText1}>
              <p>{categoryDescription}</p>
            </div>

            <p>{categoryDetail}</p>
          </div>

          <div className={styles.lineupItemListWrapper}>
            {ItemListComponent}
          </div>

          <div className={styles.lineupHorizontalBarArea}>
            <svg
              width="1263"
              height="1"
              viewBox="0 0 1263 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="-4.37114e-08"
                y1="0.5"
                x2="1263"
                y2="0.49989"
                stroke="#A4A4A4"
              />
            </svg>
            <p>最近チェックした商品</p>
          </div>

          <div className={styles.lineupItemListWrapper}>
            <ItemBox
              imageUrl="/imgSweep/Product_Bitter.jpg"
              itemName="ビターチョコ(7個)"
              price="500"
              review="2"
              linkParam="bbb"
            />
            <ItemBox
              imageUrl="/imgSweep/Product_Bitter.jpg"
              itemName="ビターチョコ(7個)"
              price="500"
              review="2"
              linkParam="bbb"
            />
            <ItemBox
              imageUrl="/imgSweep/Product_Bitter.jpg"
              itemName="ビターチョコ(7個)"
              price="500"
              review="2"
              linkParam="bbb"
            />
            <ItemBox
              imageUrl="/imgSweep/Product_Bitter.jpg"
              itemName="ビターチョコ(7個)"
              price="500"
              review="2"
              linkParam="bbb"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LineupComponent;
