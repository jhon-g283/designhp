import styles from '../../styles/cafe/cafe.module.css';
interface Props {
  useClassName?: string;
  fontColor?: string;
  titleText: string;
  subTitleText: string;
}

const TopViewTextCmp = ({
  useClassName,
  fontColor,
  titleText,
  subTitleText,
}: Props) => {
  return (
    <>
      <div className={useClassName} style={{ color: fontColor }}>
        <p className={styles.moretopviewTitle}>{titleText}</p>
        <p className={styles.moretopviewSubTitle}>{subTitleText}</p>
      </div>
    </>
  );
};

export default TopViewTextCmp;
