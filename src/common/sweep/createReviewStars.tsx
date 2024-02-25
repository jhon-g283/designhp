// レビューの星を生成する処理
const createReviewStars = (
  reviewCount: number,
  activeColor: string = '#000000',
  deactiveColor: string = '#A7A7A7'
) => {
  let starArray = [];

  for (let i = 0; i < 5; i++) {
    // レビューの数値より低い場合は星の色を黒くする。
    const flag = i < reviewCount;
    const color = flag ? activeColor : deactiveColor;
    //
    const star = (
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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

export { createReviewStars as createReviewStars };
