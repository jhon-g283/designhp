import Image from 'next/image';
import { useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { addCart, selectCount } from '../store/reducers/addCartDataSlice';
import { cartData } from '../types';

// ヘッダー部分のコンポーネント
const Header = () => {
  // Redux
  const dispatch = useDispatch();
  const topPageLink = './cafetoppage';
  const cartCount = useSelector((state: { cartreducer: cartData }) =>
    state.cartreducer?.totalCountcount ? state.cartreducer.totalCountcount : 0
  ); //商品リスト取得(カート数)

  // const cartCount2 = useSelector(selectCount); //商品リスト取得(カート数)
  // console.log(selectCount);
  // console.log(cartCount2);
  console.log(cartCount);

  const addCartFunction = () => {
    dispatch(addCart('77'));
  };
  return (
    <>
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <Image
          src={'/imgSweep/sweeplogo.svg'}
          width={135} // Specify different width values based on device or viewport size
          height={40}
          alt="Your Image"
          // fill={true}
          // layout="responsive"
        ></Image>

        <a href="./top">top</a>
        <a href="./lineup">lineup</a>
        <a>news</a>

        <Image
          src={'/imgSweep/cartImage.svg'}
          width={40} // Specify different width values based on device or viewport size
          height={40}
          alt="Your Image"
          // fill={true}
          // layout="responsive"
        ></Image>
      </div>
      <p>{cartCount}</p>
      <button onClick={() => addCartFunction()}>test</button>
    </>
  );
};

export default Header;
