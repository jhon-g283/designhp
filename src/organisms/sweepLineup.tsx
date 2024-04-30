import { useState, useEffect } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import { searchResultData } from '../types';
import { ItemBox } from '../molecules/sweepItemBoxComponents';
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import {
  fetchItemList,
  resultOfSearchItems,
} from '../store/reducers/searchItemsSlice';
import { AppDispatch } from '../store/index'; //方で怒られるので入れた
import { fetchPickUpItemList } from '../store/reducers/getPickUpListDataSlice';

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

  // Redux:ピックアップ商品
  const pickUpData = useSelector(
    (state: { pickUpListReducer: searchResultData }) =>
      state.pickUpListReducer?.itemlist ? state.pickUpListReducer.itemlist : []
  );

  // 商品概要の表示項モックをuseSelecterから取得
  const categoryName =
    categoryData.length > 0 ? categoryData[0].categoryName : ''; //カテゴリー名
  const categoryDescription =
    categoryData.length > 0 ? categoryData[0].categoryDescription : ''; //カテゴリー概要
  const categoryDetail =
    categoryData.length > 0 ? categoryData[0].categoryDetail : ''; //カテゴリーの詳細分

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

    // 商品詳細
    dispatch(fetchItemList(query));
    // PickUpリスト
    dispatch(fetchPickUpItemList(''));
  }, [category, size, dispatch]);

  const ItemListComponent = itemlistData.map((item, index) => {
    const uniqueKey = 'ItemListComponent_key_' + index;

    const param = `id=${item?.id}&code=${item?.code}`; //商品ID+コード
    return (
      <ItemBox
        id={item.id || ''}
        code={item.code || ''}
        imageUrl={item.imageUrl || ''}
        itemName={item.itemName}
        price={item.price}
        review={item.evaluation}
        linkParam={param}
        key={uniqueKey}
      />
    );
  });

  // カテゴリカテゴリのチェックボックス
  const CategoryCheckBox = (currentCategory: string = '') => {
    return (
      <>
        <input
          type="checkbox"
          name="category"
          className={styles.lineupCheckBox}
          checked={category == currentCategory}
          // onChange={() => {}}
          readOnly
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

  // カテゴリカテゴリのチェックボックスサイズのチェックボックス
  const SizeCheckBox = (currentSize: string = '') => {
    return (
      <>
        <input
          type="checkbox"
          className={styles.lineupCheckBox}
          name="size"
          checked={size == currentSize}
          // onChange={() => {}}
          readOnly
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
          <p>
            フィルター
            <span className={`${styles.lineupFilterSVG1} ${styles.imgSP}`}>
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9448 20.8008L23.5089 0.771301H0.380763L11.9448 20.8008Z"
                  fill="black"
                />
              </svg>
            </span>
          </p>

          <div className={styles.lineupFilterBlockWrapper}>
            <p>
              <span>
                <svg
                  width="20"
                  height="2"
                  viewBox="0 0 20 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.imgSP}
                >
                  <line
                    x1="0.533203"
                    y1="1.22827"
                    x2="19.9316"
                    y2="1.22827"
                    stroke="black"
                  />
                </svg>
                カテゴリ
                <svg
                  width="20"
                  height="2"
                  viewBox="0 0 20 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.imgSP}
                >
                  <line
                    x1="0.533203"
                    y1="1.22827"
                    x2="19.9316"
                    y2="1.22827"
                    stroke="black"
                  />
                </svg>
              </span>
            </p>
            <ul>
              <li
                onClick={() => {
                  setCategory('Basic');
                }}
              >
                ベーシック{CategoryCheckBox('Basic')}
              </li>
              <li
                onClick={() => {
                  setCategory('Caramel');
                }}
              >
                キャラメル{CategoryCheckBox('Caramel')}
              </li>
              <li
                onClick={() => {
                  setCategory('Milk');
                }}
              >
                ミルク{CategoryCheckBox('Milk')}
              </li>
              <li
                onClick={() => {
                  setCategory('Strawberry');
                }}
              >
                ストロベリー{CategoryCheckBox('Strawberry')}
              </li>
              <li
                onClick={() => {
                  setCategory('Sakura');
                }}
              >
                サクラ{CategoryCheckBox('Sakura')}
              </li>
              <li
                onClick={() => {
                  setCategory('Bitter');
                }}
              >
                ビター{CategoryCheckBox('Bitter')}
              </li>
              <li
                onClick={() => {
                  setCategory('Limited');
                }}
              >
                期間限定{CategoryCheckBox('Limited')}
              </li>
            </ul>
          </div>

          <div
            className={`${styles.lineupFilterBlockWrapper} ${styles.listWrapperMargin}`}
          >
            <p>
              <span>
                <svg
                  width="20"
                  height="2"
                  viewBox="0 0 20 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.imgSP}
                >
                  <line
                    x1="0.533203"
                    y1="1.22827"
                    x2="19.9316"
                    y2="1.22827"
                    stroke="black"
                  />
                </svg>
                サイズ
                <svg
                  width="20"
                  height="2"
                  viewBox="0 0 20 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.imgSP}
                >
                  <line
                    x1="0.533203"
                    y1="1.22827"
                    x2="19.9316"
                    y2="1.22827"
                    stroke="black"
                  />
                </svg>
              </span>
            </p>
            <ul>
              <li
                onClick={() => {
                  setSize('A');
                }}
              >
                全サイズ{SizeCheckBox('A')}
              </li>
              <li
                onClick={() => {
                  setSize('S');
                }}
              >
                １週間セット{SizeCheckBox('S')}
              </li>
              <li
                onClick={() => {
                  setSize('M');
                }}
              >
                １ヶ月セット{SizeCheckBox('M')}
              </li>
              <li
                onClick={() => {
                  setSize('L');
                }}
              >
                エクストラ{SizeCheckBox('L')}
              </li>
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
            <p>最近チェックした商品</p>
          </div>

          <div className={styles.lineupItemListWrapper}>
            {pickUpData.slice(0, 4).map((item, index) => {
              const key = 'recently_' + index;
              const param = `id=${item?.id}&code=${item?.code}`; //商品ID+コード
              return (
                <ItemBox
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
        </div>
      </div>
    </>
  );
};

export default LineupComponent;
