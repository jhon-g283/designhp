import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    console.log('更新' + this.state.count);
    return (
      <div>
        <h2>カウンター(クラスコンポーネント)</h2>
        <p>現在の値: {this.state.count}</p>
        <button onClick={() => this.increment()}>増やす</button>
        <button onClick={() => this.decrement()}>減らす</button>
      </div>
    );
  }
}

export default Counter;
