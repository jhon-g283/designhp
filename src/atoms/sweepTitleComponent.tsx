import styled from 'styled-components';
//

const width = 202;
// const width = '5em';
const color = '%23A4A4A4';
const SectionTitle = styled.h1`
  // PC表示の場合
  @media (min-width: 768px) {
    // 前
    &::before {
      content: url("data:image/svg+xml;utf8,
    <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='1'>
    <rect width='100%' height='100%' fill='${color}' />
    </svg>");

      bottom: 0.3em;
    }

    // 後
    &::after {
      content: url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='1'>
      <rect width='100%' height='100%' fill='${color}' />
      </svg>");

      bottom: 0.3em;
    }
  }
  //SP表示時には長さを半分にする
  @media (max-width: 768px) {
    &::after {
      content: url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='${width / 2}' height='1'>
      <rect width='100%' height='100%' fill='${color}' />
      </svg>");

      bottom: 0.3em;
    }
  }
`;

export default SectionTitle;
