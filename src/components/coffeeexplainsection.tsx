import styled from 'styled-components';
interface Props {
  text: string; //テキスト内容
  useClassName: string; //充てるスタイルのクラス
  fontColor: string; //フォントの色
  widthOfBorder?: number; //後ろにつけるボーダーの長さ（ピクセル）
}

// セクションの説明文のコンポーネント、テキストと後に使うボーター選を設定できる
const ExplainSectionComp = ({
  text,
  useClassName,
  fontColor,
  widthOfBorder,
}: Props) => {
  const width = widthOfBorder != undefined ? widthOfBorder : 100;
  const color = fontColor != '' ? fontColor : 'white';

  // const ParagraphWithBorder = styled.p`
  //   &::after {
  //     margin-top: 53px;
  //     border-radius: 2px;
  //     width: ${width}px;
  //     height: 2px;
  //     content: ''; /*疑似要素の中身を指定*/
  //     position: absolute; /*絶対位置指定*/
  //     background-color: ${color};
  //   }
  // `;
  const ParagraphWithBorder = styled.p`
  @media (min-width: 768px) {
    &::after {
      content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='2'><rect width='100%' height='100%' fill='${color}' /></svg>");
      // display: block;
      // width: ${width}px;
      height: 2px;
      position: absolute;
    }
  }
 
    @media (max-width: 768px) {
      &::after {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${
          width / 4
        }' height='2'><rect width='100%' height='100%' fill='${color}' /></svg>");
        // display: block;
        // width: ${width}px;
        // height: 2px;
        top:-0.3em;
        position: absolute;
      }
  `;
  return (
    <>
      <div className={useClassName} style={{ color: color }}>
        <ParagraphWithBorder>{text}</ParagraphWithBorder>
        <div></div>
      </div>
    </>
  );
};

export default ExplainSectionComp;
