import styles from '../../styles/sweep/sweep.module.css';
import { newsData } from '../types';

interface Props {
  newsDataProps: newsData; //進捗
}

import Image from 'next/image';

const NewsItemComponent = ({ newsDataProps }: Props) => {
  return (
    <>
      <div className={styles.newsItemWrapper}>
        <div className={styles.newsItemImage}>
          <Image
            src={newsDataProps.imageUrl}
            // width={540} // Specify different width values based on device or viewport size
            // height={110}
            alt="Your Image"
            fill={true}
          ></Image>
        </div>
        <div className={styles.newsTextArea}>
          <div className={styles.newsItemDateWrapper}>
            <p className={styles.newsItemDate}>{newsDataProps.date}</p>
          </div>
          <div className={styles.newsItemTitleWrapper}>
            <p className={styles.newsItemTitle}>{newsDataProps.title}</p>
          </div>
          <div className={styles.newsItemDescriptionWrapper}>
            <p className={styles.newsItemDescription}>
              {' '}
              {newsDataProps.description}
            </p>
          </div>

          <div className={styles.newsItemLabelWrapper}>
            {newsDataProps.newsDetail.map((item, index) => {
              return (
                <a key={'news_' + newsDataProps.id + '_' + index}>
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItemComponent;
