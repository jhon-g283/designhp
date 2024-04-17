import styles from '../../styles/sweep/sweep.module.css';
import { CartItemProps } from '../molecules/sweepCartItemBoxComponents';
interface Props {
  cartItemsList: CartItemProps[]; //進捗
}

import Image from 'next/image';

const NewsItemComponent = ({ cartItemsList }: Props) => {
  return (
    <>
      <div>
        <div>{/* Image */}</div>
        <div>
          <div>{/* date */}</div>
          <div>{/* title */}</div>
          <div>{/* context */}</div>
        </div>
      </div>
    </>
  );
};

export default NewsItemComponent;
