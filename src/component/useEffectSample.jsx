import * as React from "react";
const { useState, useEffect } = React;

// useEffect の使い方
// useEffect( didUpdate, [timingOfEffects])
// didUpdate - コンポーネントのレンダリング完了後に呼ばれる。再レンダリング発生時も同様。
// timingOfEffects(option) - コールバック関数を呼ぶタイミングを制御できる。

export const UseEffectSample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);

    // クリーンアップ関数を返す
    return () => clearTimeout(timerId);
  }, [count]);

  return (
    <p>
      time: <b>{count}</b>
    </p>
  );
};
