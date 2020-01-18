import React, { useReducer } from "react";
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// useReducer の使い方
// const [state, dispatch] = useState(reducer, initialArg, init);

export const UseReducerSample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <p>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <b>{state.count}</b>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </p>
  );
};
