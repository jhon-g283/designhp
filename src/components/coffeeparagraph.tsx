import type React from 'react';

// 受け取ったタグ構造にクラス名でスタイルをつける
interface Props {
  useClassName?: string;
  fontColor?: string;
  paragramText: React.JSX.Element;
}

const Paragraph = ({ useClassName, fontColor, paragramText }: Props) => {
  return (
    <>
      <div className={useClassName} style={{ color: fontColor }}>
        {paragramText}
      </div>
    </>
  );
};

export default Paragraph;
