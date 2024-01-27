import styled from 'styled-components';
//

const height = 2;
const SectionSubTitle = styled.h2`
  &::before {
    content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${height}' height='30'><rect width='100%' height='100%' fill='white' /></svg>");

    position: relative;
    margin-left: -10px;
    // margin: 10px;
    padding-right: 5px;

    // height: 2px;
    // top: 0px;
    // padding-top: 7px;

    // left: 0px;
    // position: absolute;
  }
`;

export default SectionSubTitle;
