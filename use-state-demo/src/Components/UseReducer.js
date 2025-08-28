import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };

      default:
        throw Error("action not found", action.type);
    }
  };
  const initial = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initial);
  const hanldeIncrement = () => {
    dispatch({ type: "increment" });
  };
  return (
    <>
      <h1>Count {state.count}</h1>
      <button onClick={hanldeIncrement}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};

export default UseReducer;
