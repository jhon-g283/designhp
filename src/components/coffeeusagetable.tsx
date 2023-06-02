import styles from '../../styles/cafe/cafe.module.css';
import Image from 'next/image';

// 料金表のコンポーネント、SVGでそのまま表示する形式にした
const UsageTableCmp = () => {
  return (
    <>
      <div className={styles.usagePC}>
        <Image
          src={'/img/usage.svg'}
          width={200} // Specify different width values based on device or viewport size
          height={200}
          alt="Your Image"
          layout="responsive"
        ></Image>
        <div className={styles.specialPanel}>
          <Image
            src={'/img/special.svg'}
            width={200} // Specify different width values based on device or viewport size
            height={200}
            alt="Your Image"
            layout="responsive"
          ></Image>
        </div>
      </div>
      <div className={styles.usageSP}>
        <Image
          src={'/img/usage.svg'}
          width={200} // Specify different width values based on device or viewport size
          height={200}
          alt="Your Image"
          layout="responsive"
        ></Image>
        <div className={styles.specialPanel}>
          <Image
            src={'/img/special.svg'}
            width={200} // Specify different width values based on device or viewport size
            height={200}
            alt="Your Image"
            layout="responsive"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default UsageTableCmp;
