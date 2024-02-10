import styled from 'styled-components';
//

const width = 100;
const SectionTitle = styled.h1`
  &::before {
    content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='2'><rect width='100%' height='100%' fill='white' /></svg>");

    // height: 2px;
    // top: 0px;
    // padding-top: 7px;

    // left: 0px;
    // position: absolute;
  }

  &::after {
    content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='2'><rect width='100%' height='100%' fill='white' /></svg>");

    // height: 2px;
    // top: 0px;
    // padding-top: 7px;

    // left: 0px;
    // position: absolute;
  }
`;

export default SectionTitle;