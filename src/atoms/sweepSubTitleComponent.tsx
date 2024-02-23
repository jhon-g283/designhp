import styled from 'styled-components';
//

const width = 1;
// サブタイトルの棒線
const SectionSubTitle = styled.h2`
  &::before {
    content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='30'><rect width='100%' height='100%' fill='white' /></svg>");

    position: relative;
    margin-left: -0.75em;

    padding-right: 16px;

    height: 2px;
    top: 0.2em;
  }
`;

export default SectionSubTitle;
