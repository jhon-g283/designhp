// トップページテンプレ
import styles from '../../styles/cafe/cafe.module.css';
import stylesAnimation from '../../styles/cafe/cafeanimation.module.css';
import Image from 'next/image';

import Header from '../organisms/sweepheader';

const SweepTopPageTemplate = () => {
  return (
    <>
      {/* header */}

      <Header />
      {/* FV */}
      <p>fv</p>
      {/* news */}
      <p>news</p>
      {/* about */}
      <p>about</p>
      {/* product */}
      <p>product</p>
      {/* pick up */}
      <p>pick up</p>
      {/* campaign */}
      <p>campaign</p>
      {/* voice */}
      <p>voice</p>
      {/* sns */}
      <p>sns</p>
      {/* footer */}
      <p>footer</p>
      <p>SWEEp</p>
    </>
  );
};

export default SweepTopPageTemplate;
