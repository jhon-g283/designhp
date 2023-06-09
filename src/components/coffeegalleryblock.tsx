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

// ギャラリー部分の写真表示コンポーネント、２列で写真を表示する。
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
          margin: 15,
        }}
      >
        <div
          style={{
            height: 238,
            // width: 669,
            width: `${widthVal}%`,

            backgroundColor: 'black',
            margin: 0,
            position: 'relative',
          }}
        >
          <Image
            src={path1}
            // width={150} // Specify different width values based on device or viewport size
            // height={727}
            alt="Your Image"
            // layout="responsive"
            style={{ objectFit: 'cover' }}
            fill
          ></Image>
        </div>
        <div
          style={{
            height: 238,
            // width: '40%',
            backgroundColor: 'black',
            flex: 1,
            margin: 0,
            // marginRight: 0,

            // display: 'table-cell',
            // zIndex: 2,
            position: 'relative',
          }}
        >
          <Image
            src={path2}
            // width={150} // Specify different width values based on device or viewport size
            // height={727}
            alt="Your Image"
            // layout="responsive"
            style={{ objectFit: 'cover' }}
            fill
          ></Image>
        </div>
      </div>
    </>
  );
};

// ギャラリー部分の写真表示コンポーネント、１列＋２列で写真を表示する。フラグで左右を逆転させることが可能、写真の割合もピクセル（％）で設定できる。
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
          position: 'relative',
          margin: 15,
        }}
      >
        <div
          style={{
            height: 238,
            // width: 669,
            width: `${widthVal}%`,

            backgroundColor: 'black',
            margin: 5,
            position: 'relative',
          }}
        >
          <Image
            src={path1}
            // width={150} // Specify different width values based on device or viewport size
            // height={727}
            alt="Your Image"
            // layout="responsive"
            style={{ objectFit: 'cover' }}
            fill
          ></Image>
        </div>
        <div
          style={{
            height: 238,
            // width: '40%',
            backgroundColor: 'black',
            flex: 1,
            margin: 5,
            position: 'relative',
            // marginRight: 0,

            // display: 'table-cell',
            // zIndex: 2,
          }}
        >
          <div
            style={{
              // display: 'block',
              backgroundColor: 'black',
              height: 283,
              position: 'relative',
            }}
          >
            <div
              style={{
                // display: 'block',
                backgroundColor: 'black',
                height: 120,
                position: 'relative',
                margin: 5,
              }}
            >
              <Image
                src={path2}
                // width={150} // Specify different width values based on device or viewport size
                // height={727}
                alt="Your Image"
                // layout="responsive"
                style={{ objectFit: 'cover' }}
                fill
              ></Image>
            </div>

            <div
              style={{
                // display: 'block',
                backgroundColor: 'black',
                height: 120,
                position: 'relative',
                margin: 5,
              }}
            >
              <Image
                src={path3}
                // width={700} // Specify different width values based on device or viewport size
                // height={727}
                alt="Your Image"
                // layout="responsive"
                style={{ objectFit: 'cover' }}
                fill
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
