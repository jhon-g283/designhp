import styled from 'styled-components';
//

const width = 202;
const color = '%23A4A4A4';
const SectionTitle = styled.h1`
  &::before {
    content: url("data:image/svg+xml;utf8,
    <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='1'>
    <rect width='100%' height='100%' fill='${color}' />
    </svg>");

    bottom: 0.3em;
  }

  &::after {
    content: url("data:image/svg+xml;utf8,
    <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='1'>
    <rect width='100%' height='100%' fill='${color}' />
    </svg>");

    bottom: 0.3em;
  }
`;

export default SectionTitle;
