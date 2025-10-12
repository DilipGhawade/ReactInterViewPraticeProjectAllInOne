import { memo } from "react";

const CounterDisplay = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <h1>Counter With Pure Component</h1>
      <h4>Count: {count}</h4>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </>
  );
};

export default memo(CounterDisplay);
