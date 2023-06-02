import styles from '../../styles/cafe/cafe.module.css';
interface Props {
  useClassName?: string;
  fontColor?: string;
  titleText: string;
  subTitleText?: string;
  subTTitleParagraph?: JSX.Element;
}

// トップビューのタイトル名
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
// トップビューのタイトル名（メニュー画面用）
export const TopViewTextMenuCmp = ({
  useClassName,
  fontColor,
  titleText,

  subTTitleParagraph,
}: Props) => {
  return (
    <>
      <div className={useClassName} style={{ color: fontColor }}>
        <p className={styles.menutopviewTitle}>{titleText}</p>

        {subTTitleParagraph}
        {/* <p className={styles.moretopviewSubTitle}>{subTitleText}</p> */}
      </div>
    </>
  );
};

export default TopViewTextCmp;
