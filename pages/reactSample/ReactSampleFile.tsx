import React, { useState } from 'react';

const Counter = () => {
  // 初期値として0を設定
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log('AAAAAAA');
    setCount(count);
  };

  const decrement = () => {
    console.log('BBBBB');
    setCount(count);
  };

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
