import { useEffect, useState } from 'react';
import styles from '../../styles/sweep/sweep.module.css';
import { default as Div } from '../common/observeDivComponent';
import {
  itemDetail,
  itemDetailData,
  searchResultData,
  utilStrage,
} from '../types';
import { ItemBox } from '../molecules/sweepItemBoxComponents';
import {
  createReviewStarsLineup,
  createReviewSquares,
} from '../common/sweep/createReviewStars';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import {
  fetchDetails,
  initialState,
} from '../store/reducers/getItemDetailSlice';
import { upDateRecentry } from '../store/reducers/utileStrageSlice';
import { AppDispatch } from '../store/index'; //方で怒られるので入れた

import { fetchPickUpItemList } from '../store/reducers/getPickUpListDataSlice';

import { ItemDetailProps } from '../../pages/sweep/itemDetail'; // 親と同じ型のインターフェースを使用する

import AddCartButton from '../atoms/addCartItem';

interface categoryConvert {
  [key: string]: string; //　郵便番号
}
interface sizeConvert {
  [key: string]: number; //　郵便番号
}

// ヘッダー部分のコンポーネント
const ItemDetailComponent = (props: ItemDetailProps) => {
  const { id, code } = props;
  // Redux：商品詳細

  const dispatch = useDispatch<AppDispatch>();
  const itemData: itemDetailData | undefined = useSelector(
    (state: { itemDetailReducer: itemDetail }) =>
      state.itemDetailReducer?.itemDetailData
        ? state.itemDetailReducer.itemDetailData
        : initialState.itemDetailData
  );

  // Redux:ピックアップ商品
  const pickUpData = useSelector(
    (state: { pickUpListReducer: searchResultData }) =>
      state.pickUpListReducer?.itemlist ? state.pickUpListReducer.itemlist : []
  );

  const recentlyList = useSelector(
    (state: { utileStrageReducer: utilStrage }) =>
      state.utileStrageReducer?.recently
        ? state.utileStrageReducer.recently
        : ['1-S', '1-S', '1-S', '1-S']
  ).join(','); //｀最近見た商品情報

  console.log(itemData);
  console.log(pickUpData);

  const itemName = itemData?.itemName || '';
  const category = itemData?.category || '';

  const categoryNames: categoryConvert = {
    Basic: 'ベーシック',
    Milk: 'ミルク',
    Caramel: 'キャラメル',
    Strawberry: 'ストロベリー',
    Sakura: 'サクラ',
    Vegetable: 'ベジタブル',
    Limited: '期間限定',
    Bitter: 'ビター',
  };

  const categoryDisplay = categoryNames[category] || '';

  // 評価値の数値作成
  const evaluationArray =
    itemData?.evaluation !== undefined
      ? itemData?.evaluation.map((item) => {
          return parseInt(item);
        })
      : [0, 0, 0, 0];

  // データ取得
  useEffect(() => {
    console.log('useEffect dispatch fetching detail');
    const recentryCode = `${id}-${code}`;
    dispatch(fetchDetails(id));
    dispatch(fetchPickUpItemList(recentlyList));
    dispatch(upDateRecentry(recentryCode));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const sizeArray: sizeConvert = { S: 0, M: 1, L: 2 };

  const initSelectedSize = sizeArray[code] || 0;

  // 現在選択中のボタン(数値と配列のインデックスを連動させる。)
  const [selectedSize, setSelectedSize] = useState(initSelectedSize); //現在のサイズ
  const [selectedImage, setSelectedImage] = useState(0); //選択してる画像
  const [count, setCount] = useState(1); //商品数

  // カート数追加
  const increaseCount = (currentCount: number) => {
    currentCount++;
    setCount(currentCount);
  };
  // カート数減少
  const decreaseCount = (currentCount: number) => {
    currentCount = currentCount == 1 ? 1 : currentCount - 1;
    console.log(currentCount);
    setCount(currentCount);
  };

  const codeArray = ['S', 'M', 'L'];
  // 商品コード
  const itemCode = codeArray[selectedSize];

  const imageUrl = itemData?.imageUrl1 || '';
  const imageUrl2 = itemData?.imageUrl2 || '';
  const imageUrl3 = itemData?.imageUrl3 || '';

  const featureImageUrl2 = itemData?.itemFeatures[0].featureImage || '';
  const featureImageUrl3 = itemData?.itemFeatures[1].featureImage || '';
  // const imageUrl3 = '/imgSweep/ItemDetail_Feature_2.jpg';

  const thumbNailImageArray = [];

  thumbNailImageArray.push(imageUrl);
  thumbNailImageArray.push(imageUrl2);
  thumbNailImageArray.push(imageUrl3);

  const pieces = itemData?.pieces[selectedSize];

  const itemNameDisplay = itemName + pieces;

  const cartImageUrl =
    itemData?.imageUrlCartThumbnail !== undefined
      ? itemData.imageUrlCartThumbnail
      : imageUrl;

  const priceArray =
    itemData?.price.map((item) => {
      return parseInt(item);
    }) || [];

  const voiceData = itemData?.review?.map((item) => {
    const result = {
      name: item.reviewerName,
      revierInfo: item.reviewerAge + '代' + item.reviewerGender,
      titie: item.reviewTitle,
      evaluation: item.review,
      comment: item.commentText,
    };

    return result;
  });

  // サイズのボタン
  const buttonArray = priceArray.map((item, index) => {
    let buttonText = '';

    // 配列のインデックス数でボタン名変更
    if (index == 0) {
      buttonText = '１週間セット';
    } else if (index == 1) {
      buttonText = '１ヶ月セット';
    } else {
      buttonText = 'エクストラ';
    }

    // ボタンのクラス選択中のサイズとインデックスが同じか比較する。
    const buttonClass =
      selectedSize == index
        ? styles.itemDetailSelectedButton
        : styles.itemDetailSizeButton;

    return (
      <>
        <button
          className={`${buttonClass}`}
          onClick={() => {
            setSelectedSize(index);
          }}
        >
          {buttonText}
        </button>
      </>
    );
  });

  const starEvaluation = (title: string, evaluation: number) => {
    const stars = createReviewStarsLineup(
      evaluation,
      '#000000',
      '#A7A7A7',
      'top_item_box'
    );
    return (
      <div className={styles.itemDetailStarEvaluationWrapper}>
        <a>{title}</a>
        <span>{stars}</span>
      </div>
    );
  };

  const squareEvaluation = (title: string, evaluation: number) => {
    const square = createReviewSquares(
      evaluation,
      '#000000',
      '#A7A7A7',
      'top_item_box'
    );
    return (
      <div className={styles.itemDetailSquareEvaluationWrapper}>
        <a>{title}</a>
        <span>{square}</span>
      </div>
    );
  };

  const starEvaluationVoive = (evaluation: number) => {
    const stars = createReviewStarsLineup(
      evaluation,
      '#FFFFFF',
      '#A7A7A7',
      'top_item_box'
    );
    return (
      <div className={styles.itemDetailStarEvaluationWrapper}>
        <span>{stars}</span>
      </div>
    );
  };

  const itemDescription =
    'ベーシックな苦味が特徴で初めての方にとてもおすすめのチョコです!';

  return (
    <>
      <div className={styles.itemDetailComponentWrapper}>
        {/* パンクズりすと */}
        <div className={styles.itemDetailBreadList}>
          <a>{categoryDisplay}</a>
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2909_1454"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="4"
              y="1"
              width="7"
              height="11"
            >
              <path
                d="M5.09996 11.3988L10.5501 5.98277M10.52 6.8079L5.14479 1.4001"
                stroke="white"
              />
            </mask>
            <g mask="url(#mask0_2909_1454)">
              <rect x="6" y="1" width="6" height="12" fill="#FCF5F5" />
            </g>
          </svg>

          <a>{itemName}</a>
        </div>
        {/* 商品情報 */}

        <div className={styles.itemDetailItemImfomation}>
          <div className={styles.itemDetailImageArea}>
            <div className={styles.itemDetailItemMainImageWrapper}>
              <Image
                src={thumbNailImageArray[selectedImage]}
                // width={540} // Specify different width values based on device or viewport size
                // height={110}
                alt="Your Image"
                fill={true}
              ></Image>
            </div>
            <div className={styles.itemDetailItemThumbNailArea}>
              {thumbNailImageArray.map((item, index) => {
                return (
                  <>
                    <div
                      className={styles.itemDetailItemThumbNailImageWrapper}
                      onClick={() => {
                        setSelectedImage(index);
                      }}
                    >
                      <Image
                        src={item}
                        // width={129} // Specify different width values based on device or viewport size
                        // height={110}
                        alt="Your Image"
                        style={{
                          objectFit: 'cover',
                        }}
                        fill={true}
                      ></Image>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* 商品の評価 */}
          <div className={styles.itemDetailDescribeArea}>
            <div className={styles.itemDetailTextArea}>
              <div className={styles.itemDetailItemNameWrapper}>
                <h2>{itemNameDisplay}</h2>
              </div>

              <p className={styles.itemDetailItemDescrib}>{itemDescription}</p>
              <p className={styles.itemDetailItemPrice}>
                価格
                <span className={styles.itemDetailItemPriceSpan}>
                  ¥{priceArray[selectedSize].toLocaleString()}
                </span>
                (税込)
              </p>

              <div className={styles.itemDetailSizeButtonWrapper}>
                {buttonArray}
              </div>

              <div className={styles.itemDetailEvaluationArea}>
                {starEvaluation('平均評価', evaluationArray[0])}
                <p>美味しさメーター</p>
                {squareEvaluation('甘さ', evaluationArray[1])}
                {squareEvaluation('苦味', evaluationArray[2])}
                {squareEvaluation('まろやかさ', evaluationArray[3])}
              </div>
            </div>
            {/* ボタン類 */}
            <div className={styles.itemDetailButtonArea}>
              {/* 数量 */}
              <div className={styles.itemDetailContButtonArea}>
                <a>数量</a>
                {/* 共通化する ーーーーーーーーーーーーーー*/}
                <div className={styles.itemDetailContButtonOuterWrapper}>
                  <button
                    className={styles.itemDetailContMinusButton}
                    onClick={() => {
                      decreaseCount(count);
                    }}
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.imgPC}
                    >
                      <line y1="8.5" x2="17" y2="8.5" stroke="black" />
                    </svg>
                    <svg
                      width="26.5"
                      height="26.5"
                      viewBox="0 0 53 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.imgSP}
                    >
                      <line
                        x1="0.576172"
                        y1="26.9652"
                        x2="52.5762"
                        y2="26.9652"
                        stroke="black"
                        stroke-width="2"
                      />
                    </svg>
                  </button>
                  <div className={styles.itemDetailContWrapper}>
                    <a className={styles.itemDetailCont}>{count}</a>
                  </div>

                  <button
                    className={styles.itemDetailContPlusButton}
                    onClick={() => {
                      increaseCount(count);
                    }}
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.imgPC}
                    >
                      <line y1="8.5" x2="17" y2="8.5" stroke="black" />
                      <line
                        x1="8.5"
                        y1="2.18557e-08"
                        x2="8.5"
                        y2="17"
                        stroke="black"
                      />
                    </svg>
                    <svg
                      width="26.5"
                      height="26.5"
                      viewBox="0 0 53 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.imgSP}
                    >
                      <line
                        x1="0.576172"
                        y1="26.9652"
                        x2="52.5762"
                        y2="26.9652"
                        stroke="black"
                        stroke-width="2"
                      />
                      <line
                        x1="26.5762"
                        y1="0.965248"
                        x2="26.5762"
                        y2="52.9652"
                        stroke="black"
                        stroke-width="2"
                      />
                    </svg>
                  </button>
                </div>
                {/* ーーーーーーーーーーーーーーー */}
              </div>
              {/* カートボタン */}
              <div className={styles.itemDetailCartButtonWrapper}>
                <AddCartButton
                  className={styles.itemDetailCartButton}
                  id={id}
                  code={itemCode}
                  itemName={itemNameDisplay}
                  imageUrl={cartImageUrl}
                  count={count}
                  price={priceArray[selectedSize]}
                >
                  カートへ
                </AddCartButton>
              </div>
            </div>
          </div>
        </div>

        {/* 商品の特徴 */}
        <div className={styles.itemDetailItemFeaturesArea}>
          {/* 特徴１ */}
          <div className={styles.itemDetailItemFeatures1Wrapper}>
            <div className={styles.itemDetailItemFeaturesText}>
              <div className={styles.itemDetailFeaturesTitleWrapper}>
                <p className={styles.itemDetailItemFeaturesTitle}>
                  ビターチョコの特徴
                </p>
              </div>

              <div className={styles.itemDetailFeaturesSubTitleWrapper}>
                <p className={styles.itemDetailItemFeaturesSubTitle}>
                  口に広がる程よい苦味
                </p>
              </div>

              {/* <div className={styles.itemDetailFeaturesDescriptionWrapper}> */}
              <p className={styles.itemDetailItemFeaturesDescription}>
                ベーシックな苦味で食後に甘いものが苦手な方でも、<br></br>
                甘いものが好きな方でもすぐ口に入る味わい。
              </p>
              {/* </div> */}

              <div className={styles.itemDetailFeaturesSubTitleWrapper}>
                <p className={styles.itemDetailItemFeaturesSubTitle}>
                  ノンカフェイン
                </p>
              </div>

              <p className={styles.itemDetailItemFeaturesDescription}>
                他のチョコレートとは違い、眠りを妨げるカフェインなどは
                <br className={styles.imgPC}></br>
                一切使用しておりません。
              </p>
            </div>

            <div className={styles.itemDetailItemFeaturesImage}>
              <Image
                src={featureImageUrl2}
                // width={540} // Specify different width values based on device or viewport size
                // height={110}
                alt="Your Image"
                fill={true}
              ></Image>
            </div>
          </div>
          {/* 特徴２ */}
          <div className={styles.itemDetailItemFeatures2Wrapper}>
            <div className={styles.itemDetailItemFeaturesText}>
              <div className={styles.itemDetailFeaturesTitleWrapper}>
                <p className={styles.itemDetailItemFeaturesTitle}>
                  こだわりの原材料
                </p>
              </div>

              <div className={styles.itemDetailFeaturesSubTitleWrapper}>
                <p className={styles.itemDetailItemFeaturesSubTitle}>カカオ</p>
              </div>

              {/* <div className={styles.itemDetailFeaturesDescriptionWrapper}> */}
              <p className={styles.itemDetailItemFeaturesDescription}>
                原料に使用するカカオなどは質にこだわり現地の農家から
                <br className={styles.imgPC}></br>
                直接仕入れを行っています。
              </p>
              {/* </div> */}

              <div className={styles.itemDetailFeaturesSubTitleWrapper}>
                <p className={styles.itemDetailItemFeaturesSubTitle}>砂糖</p>
              </div>

              <p className={styles.itemDetailItemFeaturesDescription}>
                砂糖は海外産でなく国産の砂糖を使用しています。
                <br className={styles.imgPC}></br>
                沖縄産の黒糖を材料に使用することで甘すぎず、苦過ぎない<br></br>
                程よい味わいにしています。
              </p>
            </div>

            <div className={styles.itemDetailItemFeaturesImage}>
              <Image
                src={featureImageUrl3}
                // width={540} // Specify different width values based on device or viewport size
                // height={110}
                alt="Your Image"
                fill={true}
              ></Image>
            </div>
          </div>
        </div>

        {/* <div className={styles.itemDetailItemVoiceAreaBorder}></div> */}
        <div className={styles.itemDetailItemVoiceArea}>
          <p>お客様からの声</p>

          {voiceData?.map((item, index) => {
            return (
              <div
                className={styles.itemDetailItemVoiceItemWrapper}
                key={'itemDetailItemVoiceItem_' + index}
              >
                <div className={styles.itemDetailItemVoiceItem}>
                  <div className={styles.itemDetailItemVoiceItemImage}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <circle cx="25.5" cy="25.5" r="25.5" fill="#D9D9D9" />
                      <mask
                        id="mask0_2911_1646"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="51"
                        height="51"
                      >
                        <circle cx="25.5" cy="25.5" r="25.5" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2911_1646)">
                        <mask
                          id="mask1_2911_1646"
                          style={{ maskType: 'alpha' }}
                          maskUnits="userSpaceOnUse"
                          x="10"
                          y="-3"
                          width="31"
                          height="60"
                        >
                          <rect
                            x="10"
                            y="-3"
                            width="31"
                            height="60"
                            fill="#121212"
                          />
                        </mask>
                        <g mask="url(#mask1_2911_1646)">
                          <circle cx="25.5" cy="19.5" r="11.5" fill="white" />
                          <circle cx="25.5" cy="51.5" r="24.5" fill="white" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className={styles.itemDetailItemVoiceItemTextArea}>
                    <div className={styles.itemDetailItemVoiceItemNameWrapper}>
                      <a className={styles.itemDetailItemVoiceItemName}>
                        {item.name}
                      </a>
                      <a className={styles.itemDetailItemVoiceItemAge}>
                        {item.revierInfo}
                      </a>
                    </div>
                    {/* <div className={styles.itemDetailItemVoiceItemTitleWrapper}> */}
                    <p className={styles.itemDetailItemVoiceItemTitle}>
                      {item.titie}
                    </p>
                    {/* </div> */}
                    <div className={styles.itemDetailItemVoiceItemStarWrapper}>
                      {starEvaluationVoive(item.evaluation)}
                    </div>
                    <div
                      className={styles.itemDetailItemVoiceItemCommentWrapper}
                    >
                      <p
                        className={styles.itemDetailItemVoiceItemComment}
                        // style={{ whiteSpace: 'pre-wrap' }}
                      >
                        {item.comment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.itemDetailItemRecentryCheckedItem}>
          <p>最近チェックした商品</p>
          <div className={styles.itemDetailItemRecentryCheckedItemListWrapper}>
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

      {/* {itemId} */}
    </>
  );
};

export default ItemDetailComponent;
