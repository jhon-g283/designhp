import styles from '../../styles/cafe/cafe.module.css';

interface Props {
  text: string;
  useClassName: string;
  fontColor: string;
}

const SectionTitleComp = ({
  text: title,
  useClassName: name,
  fontColor,
}: Props) => {
  return (
    <>
      <div className={name} style={{ color: fontColor }}>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default SectionTitleComp;
