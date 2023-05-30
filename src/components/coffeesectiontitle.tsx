interface Props {
  text: string; //テキスト
  useClassName: string; //スタイつのクラス
  fontColor: string; //フォントの色
  idOfElement?: string; //HTMLのID
}

const SectionTitleComp = ({
  text: title,
  useClassName: name,
  fontColor,
  idOfElement,
}: Props) => {
  return (
    <>
      <div className={name} style={{ color: fontColor }}>
        <h2 id={idOfElement}>{title}</h2>
      </div>
    </>
  );
};

export default SectionTitleComp;
