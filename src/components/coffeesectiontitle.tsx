interface Props {
  text: string;
  useClassName: string;
  fontColor: string;
  idOfElement?: string;
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
