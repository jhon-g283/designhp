// トップページテンプレ
import styles from '../../styles/cafe/cafe.module.css';
import stylesAnimation from '../../styles/cafe/cafeanimation.module.css';
import Image from 'next/image';

import Header from '../components/coffeeheader';
import Footer from '../components/coffeefooter';
import TopFirstSection from '../components/toppagefirstsection';

import SideMenuBar from '../components/coffeesidbemenu';
import TopSecondSection from '../components/toppagesecondsection';
import TopThirdSection from '../components/toppagethirdsection';

import InViewWrapper from '../common/observecomponent';

const SweepCartPageTemplate = () => {
  return (
    <>
      {/* header */}
      <p>header</p>
      {/* FV */}
      <p>progress image</p>
      <p>cart item LIST</p>
      <p>attention</p>
      <p>delively date</p>

      {/* footer */}
      <p>footer</p>
      <p>SWEEp</p>
    </>
  );
};

export default SweepCartPageTemplate;
