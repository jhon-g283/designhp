import Image from 'next/image';
interface Props {
  text: string;
  useClassName: string;
  fontColor: string;
}

const MoreButtonComp = ({
  text: text,
  useClassName: useClassName,
  fontColor,
}: Props) => {
  const arrowImg =
    fontColor == 'white' ? '/img/WiteArrow.svg' : '/img/BlackArrow.svg';
  const witeArrowImage = (
    <>
      <Image
        src={arrowImg}
        width={100} // Specify different width values based on device or viewport size
        height={100}
        alt="Your Image"
        // layout="responsive"
      ></Image>
    </>
  );
  return (
    <>
      <div className={useClassName}>
        <a style={{ color: fontColor }}>{text}</a>
        {witeArrowImage}
      </div>
    </>
  );
};

export default MoreButtonComp;
