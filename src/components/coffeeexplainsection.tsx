import styled from 'styled-components';
interface Props {
  text: string; //テキスト内容
  useClassName: string; //充てるスタイルのクラス
  fontColor: string; //フォントの色
  widthOfBorder?: number; //後ろにつけるボーダーの長さ（ピクセル）
}

const ExplainSectionComp = ({
  text,
  useClassName,
  fontColor,
  widthOfBorder,
}: Props) => {
  const width = widthOfBorder != undefined ? widthOfBorder : 100;
  const color = fontColor != '' ? fontColor : 'white';

  const ParagraphWithBorder = styled.p`
    &::after {
      margin-top: 53px;
      border-radius: 2px;
      width: ${width}px;
      height: 2px;
      content: ''; /*疑似要素の中身を指定*/
      position: absolute; /*絶対位置指定*/
      background-color: ${color};
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
