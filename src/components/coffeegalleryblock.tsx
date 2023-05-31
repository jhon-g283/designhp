import { relative } from 'path';
import styles from '../../styles/cafe/cafe.module.css';
import Image from 'next/image';

interface Props {
  imagePath1?: string;
  imagePath2?: string;
  imagePath3?: string;
  width1?: string;
  flg?: boolean;
}

export const GalleryBlockCmp = ({ imagePath1, imagePath2, width1 }: Props) => {
  const imagePath = '/img/galleryImg3.png';

  const path1: string = imagePath1 != undefined ? imagePath1 : imagePath;
  const path2: string = imagePath2 != undefined ? imagePath2 : imagePath;
  const widthVal = width1 != undefined ? width1 : '60';

  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            // height: 238,
            // width: 669,
            width: `${widthVal}%`,

            backgroundColor: 'blue',
            margin: 0,
          }}
        >
          <Image
            src={path1}
            width={150} // Specify different width values based on device or viewport size
            height={727}
            alt="Your Image"
            layout="responsive"
          ></Image>
        </div>
        <div
          style={{
            // height: 238,
            // width: '40%',
            backgroundColor: 'green',
            flex: 1,
            margin: 0,
            // marginRight: 0,

            // display: 'table-cell',
            // zIndex: 2,
          }}
        >
          <Image
            src={path2}
            width={150} // Specify different width values based on device or viewport size
            height={727}
            alt="Your Image"
            layout="responsive"
          ></Image>
        </div>
      </div>
    </>
  );
};

export const GalleryBlockCmp3Images = ({
  imagePath1,
  imagePath2,
  imagePath3,
  width1,
  flg,
}: Props) => {
  const imagePath = '/img/galleryImg3.png';

  const path1: string = imagePath1 != undefined ? imagePath1 : imagePath;
  const path2: string = imagePath2 != undefined ? imagePath2 : imagePath;
  const path3: string = imagePath3 != undefined ? imagePath3 : imagePath;
  const widthVal = width1 != undefined ? width1 : '60';

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: `${flg ? 'row-reverse' : 'row'}`,
        }}
      >
        <div
          style={{
            // height: 238,
            // width: 669,
            width: `${widthVal}%`,

            backgroundColor: 'blue',
            margin: 0,
          }}
        >
          <Image
            src={path1}
            width={150} // Specify different width values based on device or viewport size
            height={727}
            alt="Your Image"
            layout="responsive"
          ></Image>
        </div>
        <div
          style={{
            height: 238,
            // width: '40%',
            backgroundColor: 'green',
            flex: 1,
            margin: 0,
            // marginRight: 0,

            // display: 'table-cell',
            // zIndex: 2,
          }}
        >
          <div
            style={{
              // display: 'block',
              backgroundColor: 'red',
              // height: 238,
            }}
          >
            <Image
              src={path2}
              width={150} // Specify different width values based on device or viewport size
              height={727}
              alt="Your Image"
              layout="responsive"
            ></Image>

            <Image
              src={path3}
              width={700} // Specify different width values based on device or viewport size
              height={727}
              alt="Your Image"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};
