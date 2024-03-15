import styled from 'styled-components';

const width = 1;
const height = 30;
// サブタイトルの棒線
const SectionSubTitle = styled.h2`
  // PC表示の場合
  @media (min-width: 768px) {
    &::before {
      content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'><rect width='100%' height='100%' fill='white' /></svg>");

      position: relative;
      margin-left: -0.75em;
      padding-right: 0.64em;
      height: 2px;
      top: 0.2em;
    }
  }

  //SP表示時
  @media (max-width: 768px) {
    &::before {
      content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height /
      1.5}'><rect width='100%' height='100%' fill='white' /></svg>");

      position: relative;
      margin-left: -0.5em;
      padding-right: 0.46em;
      height: 2px;
      top: 0.25em;
    }
  }
`;

export default SectionSubTitle;
