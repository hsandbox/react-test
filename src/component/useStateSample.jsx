import * as React from "react";
const { useState } = React;

// useState の使い方
// const [stateの値, stateの更新関数] = useState(state初期値);

export const UseStateSample = () => {
  const [count, setCount] = useState(0);

  return (
    <p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <b>{count}</b>
      <button onClick={() => setCount(count + 1)}>+</button>
    </p>
  );
};

// 複数の state を持つパターン
export const UseStateSample2 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <p>
      <b>{left}</b>
      <button
        onClick={() => {
          setLeft(left + 1);
          setRight(right - 1);
        }}
      >
        ←
      </button>
      <b>{right}</b>
      <button onClick={() => setRight(right + 1)}>+</button>
    </p>
  );
};

// 関数による state の更新
// 一度のクリックで数値が 5 ずつ変化することを期待するボタンを作成。
// しかし、- ボタンはクリック時に参照する count は常にレンダリング時の状態となるため、期待通りの動作を行わず、1 づつの減産を行う。
// 対して + ボタンは関数が呼び出されるたびに現在の count の値が参照される。
const SuperButton = ({ onClick, children }) => {
  const onClickHere =
    onClick &&
    (e => {
      for (const _ of [0, 1, 2, 3, 4]) onClick(e);
    });

  return <button onClick={onClickHere}>{children}</button>;
};

export const UseStateSample3 = () => {
  const [count, setCount] = useState(0);

  return (
    <p>
      <SuperButton onClick={() => setCount(count - 1)}>-</SuperButton>
      <b>{count}</b>
      <SuperButton onClick={() => setCount(count => count + 1)}>+</SuperButton>
    </p>
  );
};
