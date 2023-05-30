import styles from '../../styles/cafe/cafe.module.css';
import styled from 'styled-components';
interface Props {
  useClassName?: string;
  fontColor?: string;
  text1: string;
  text2: string;
}

const ParagraphWithBorder = styled.p`
  &::before {
    margin-top: 103px;

    width: 220px;

    transform-origin: left; /* 回転の中心点を左端に設定 */
    transform: rotate(180deg);

    height: 1px;
    content: ''; /*疑似要素の中身を指定*/
    position: absolute; /*絶対位置指定*/
    background-color: white;
  }
`;

const PlanLabel = ({ useClassName, fontColor, text1, text2 }: Props) => {
  return (
    <>
      <div className={useClassName} style={{ color: fontColor }}>
        <div className={styles.planLabelTextLeft}>
          <p>{text1}</p>
        </div>

        <div className={styles.planLabelTextRight}>
          {/* <p className={styles.planLabelTextRight}>{text2}</p> */}
          <ParagraphWithBorder>{text2}</ParagraphWithBorder>
        </div>
      </div>
    </>
  );
};

export default PlanLabel;
