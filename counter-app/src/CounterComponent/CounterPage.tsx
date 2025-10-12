import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);
  const setValue = (value: number) => setCount(value);

  return (
    <>
      <h1>First Counter app with TypeScript</h1>

      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setValue(10)}>Set The Count</button>
    </>
  );
};

export default CounterPage;
