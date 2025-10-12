import { memo } from "react";

const CounterDispaly = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <h1>Rect Counter Application</h1>
      <h4>Count {count}</h4>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </>
  );
};

export default memo(CounterDispaly);
