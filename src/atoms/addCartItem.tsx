import { addCart } from '../store/reducers/addCartDataSlice';
import { AppDispatch } from '../store/index'; //方で怒られるので入れた
import { useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import styled from 'styled-components';

interface Prop {
  id?: string;
  code?: string;
  itemName?: string;
  imageUrl?: string;
  count?: number;
  price?: number;
  children?: React.ReactNode; //リアクトの子要素
  className?: string; //クラス名
}
// カート追加を行うボタンのコンポーネント
const AddCartButton = (prop: Prop) => {
  const {
    id = '',
    code = '',
    itemName = '',
    imageUrl = '',
    count = 0,
    price = 0,
    children = <></>,
    className = '',
  } = prop;
  const dispatch = useDispatch<AppDispatch>();

  //   追加用関数
  const addCartFunction = (
    id: string,
    code: string,
    itemName: string,
    imageUrl: string,
    count: number,
    price: number
  ) => {
    const addData = {
      itemId: id, //商品ID
      code: code, //コード
      itemName: itemName, //商品名
      imageUrl: imageUrl, //カート画像Url
      price: price, //価格',
      count: count, //商品の個数',
    };
    // カート追加(dispatch)
    dispatch(addCart(addData));
  };

  const cartButton = (
    <button
      onClick={() => {
        addCartFunction(id, code, itemName, imageUrl, count, price);
      }}
      className={className}
    >
      {children}
    </button>
  );

  const bt = styled.button;

  return cartButton;
};

export default AddCartButton;
