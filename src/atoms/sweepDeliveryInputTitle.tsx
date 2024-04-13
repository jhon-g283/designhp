import styled from 'styled-components';
//

const width = 38;

const color = 'black';
const InputTitle = styled.p`
  // PC表示の場合
  @media (min-width: 768px) {
    // 前
    &::before {
      content: url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='1'>
      <rect width='100%' height='100%' fill='${color}' />
      </svg>
    
    ");
    }

    // 後
    &::after {
      content: url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='1'>
      <rect width='100%' height='100%' fill='${color}' />
      </svg>");
    }
  }
  //SP表示時には長さを半分にする
  @media (max-width: 768px) {
    &::before {
      content: url("data:image/svg+xml;utf8,
        <svg xmlns='http://www.w3.org/2000/svg' width='${width / 2}' height='1'>
        <rect width='100%' height='100%' fill='${color}' />
        </svg>");
    }
    &::after {
      content: url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='${width / 2}' height='1'>
      <rect width='100%' height='100%' fill='${color}' />
      </svg>");
    }
  }
`;

export default InputTitle;
