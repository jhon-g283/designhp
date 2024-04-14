import styles from '../../styles/sweep/sweep.module.css';
import { CartItemProps } from '../molecules/sweepCartItemBoxComponents';
interface Props {
  cartItemsList: CartItemProps[]; //進捗
}

import Image from 'next/image';

const DeliveryCartListComponent = ({ cartItemsList }: Props) => {
  return (
    <>
      {/* 外部こんぽへ */}
      <div className={styles.deliveryInfoCartItemListArea}>
        {cartItemsList.map((item, index) => {
          const price = parseInt(item.count) * parseInt(item.price);
          const total = price.toLocaleString();

          return (
            <div
              className={styles.deliveryItemWrapper}
              key={'cartItem_' + index}
            >
              <div className={styles.deliveryItemImageAreaOuterWrapper}>
                <div className={styles.deliveryItemImageArea}>
                  <div className={styles.deliveryItemImage}>
                    <Image
                      src={item.imageUrl}
                      // width={236} // Specify different width values based on device or viewport size
                      // height={244}
                      alt="Your Image"
                      fill={true}
                      className={styles.positionOverWrittenRelationOnSP}
                      style={{
                        borderRadius: 13,
                        border: ' 1px solid #7D7878',
                        zIndex: 1,
                      }}
                    ></Image>
                  </div>

                  <div className={styles.deliveryInfoItemCount}>
                    <a>{item.count}</a>
                  </div>
                </div>
                <p>{item.itemName}</p>
              </div>

              <p>¥{total}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DeliveryCartListComponent;
