// レビューの星を生成する処理
const createReviewStars = (
  reviewCount: number,
  activeColor: string = '#000000',
  deactiveColor: string = '#A7A7A7',
  keyInfo: string = ''
) => {
  let starArray = [];

  for (let i = 0; i < 5; i++) {
    // レビューの数値より低い場合は星の色を黒くする。
    const flag = i < reviewCount;
    const color = flag ? activeColor : deactiveColor;
    const key = keyInfo + '_' + i;
    //
    const star = (
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={key}
      >
        <path
          d="M2.37976 11.738L3.87776 7.286L0.265758 4.864H4.68976L6.27176 0.0899992L7.88176 4.864H12.2778L8.66576 7.286L10.1918 11.738L6.27176 8.896L2.37976 11.738Z"
          fill={color}
        />
      </svg>
    );
    // 配列に詰めて返却
    starArray.push(star);
  }
  return starArray;
};

const createReviewStarsLineup = (
  reviewCount: number,
  activeColor: string = '#000000',
  deactiveColor: string = '#A7A7A7',
  keyInfo: string = ''
) => {
  let starArray = [];

  for (let i = 0; i < 5; i++) {
    const flag = i < reviewCount;
    const color = flag ? activeColor : deactiveColor;
    const key = keyInfo + '_lineup_' + i;
    const star = (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.79391 17.5325L5.93391 11.1725L0.773906 7.71253H7.09391L9.35391 0.892534L11.6539 7.71253H17.9339L12.7739 11.1725L14.9539 17.5325L9.35391 13.4725L3.79391 17.5325Z"
          fill={color}
        />
      </svg>
    );
    starArray.push(star);
  }
  return starArray;
};

const createReviewSquares = (
  reviewCount: number,
  activeColor: string = '#000000',
  deactiveColor: string = '#A7A7A7',
  keyInfo: string = ''
) => {
  let squareArray = [];

  for (let i = 0; i < 5; i++) {
    // レビューの数値より低い場合は星の色を黒くする。
    const flag = i < reviewCount;
    const color = flag ? activeColor : deactiveColor;
    const key = keyInfo + '_' + i;
    //
    const square = (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        key={key}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="16" height="16" fill={color} />
      </svg>
    );
    // 配列に詰めて返却
    squareArray.push(square);
  }
  return squareArray;
};

export {
  createReviewStars as createReviewStars,
  createReviewSquares as createReviewSquares,
  createReviewStarsLineup as createReviewStarsLineup,
};
