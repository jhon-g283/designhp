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
  const witeArrowImage = (
    <>
      <Image
        src="/img/WiteArrow.svg"
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
        <p style={{ color: fontColor }}>{text}</p>
        {witeArrowImage}
      </div>
    </>
  );
};

export default MoreButtonComp;
