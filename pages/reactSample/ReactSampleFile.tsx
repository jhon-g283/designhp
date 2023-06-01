import React, { useState } from 'react';

const Counter = () => {
  // count：State名
  // setCount：State更新用関数（先ほどのsetState(更新するstate情報)と同じ）
  // useState(0)：初期値として0を設定
  const [count, setCount] = useState(0);

  const increment = () => {
    // Stateにインクリメントした数値をセット
    setCount(count + 1);
  };

  const decrement = () => {
    // Stateにデクリメントした数値をセット
    setCount(count - 1);
  };

  // 関数と同じくreturn分でタグ構造を変えしているが、先ほどのrender()のreturn部分と同じ
  // render（）内の処理はこのCounter関数と一体になっていると考えてもらってOK
  return (
    <div>
      <h2>カウンター</h2>
      <p>現在の値: {count}</p>
      <button onClick={increment}>増やす</button>
      <button onClick={decrement}>減らす</button>
    </div>
  );
};

export default Counter;
