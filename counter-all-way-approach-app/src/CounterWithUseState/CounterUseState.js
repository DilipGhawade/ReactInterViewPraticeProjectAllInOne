import { useState } from "react";

export const CounterUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter Application Using Use State Hook</h1>
      <h3>Count : {count}</h3>
      <button onClick={(e) => setCount((prev) => (prev += 1))}>
        Increment
      </button>
      <button onClick={(e) => setCount((prev) => (prev -= 1))}>
        Decrement
      </button>
    </>
  );
};
