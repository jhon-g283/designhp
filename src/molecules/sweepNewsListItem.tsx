import styles from '../../styles/sweep/sweep.module.css';
import { newsData } from '../types';

import { useRouter } from 'next/router';

import { NEWS_DETAIL_LINK } from '../common/sweep/setting';

interface Props {
  newsDataProps: newsData; //進捗
}

import Image from 'next/image';

const NewsItemComponent = ({ newsDataProps }: Props) => {
  const id = newsDataProps.id;

  // ルーターと遷移先設定
  const router = useRouter();
  const url = `${NEWS_DETAIL_LINK}?id=${id}`;

  return (
    <>
      <div
        className={styles.newsListItemWrapper}
        onClick={() => {
          // クリックで商品ページへ
          router.push(url);
        }}
      >
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
              {newsDataProps.description}
            </p>
          </div>

          <div className={styles.newsItemLabelWrapper}>
            {newsDataProps.newsDetail.map((item, index) => {
              return (
                <p
                  key={'news_' + newsDataProps.id + '_' + index}
                  className={styles.newsItemLabel}
                >
                  {item.label}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItemComponent;
