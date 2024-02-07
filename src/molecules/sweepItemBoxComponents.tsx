import Image from 'next/image';
import styles from '../../styles/sweep/sweep.module.css';

// ヘッダー部分のコンポーネント

interface Props {
  imageUrl: string; //画像Url
  itemName?: string; //商品名
  price?: string; //価格
  review: string;
  linkParam: string;
}

const ItemBox = ({
  imageUrl = '',
  itemName = '',
  price = '',
  review = '',
  linkParam,
}: Props) => {
  const link = 'domein:::::' + linkParam;
  return (
    <>
      <div className={styles.itemBox}>
        <Image
          // src="/img/FirstSectionImg2-2.png"
          src={imageUrl}
          width={236} // Specify different width values based on device or viewport size
          height={244}
          alt="Your Image"
          className={styles.imgPC}
        ></Image>
        <div className={''}>
          <p>{itemName}</p>
          <p>価格¥{price}</p>
          <p>{review}</p>
          <div>
            <a href={link}>商品詳細へ</a>
          </div>

          <button>カートへ</button>
        </div>
      </div>
    </>
  );
};

export { ItemBox as ItemBox };
