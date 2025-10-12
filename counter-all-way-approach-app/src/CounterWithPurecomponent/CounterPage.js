import { useCallback, useState } from "react";
import CounterDisplay from "./CounterDispaly";

export const CounterPage = () => {
  const [count, setCount] = useState(0);

  const Increment = useCallback(() => {
    setCount((prev) => (prev += 1));
  }, []);
  const decrement = useCallback(() => {
    setCount((prev) => (prev -= 1));
  }, []);

  return (
    <>
      <CounterDisplay
        count={count}
        onIncrement={Increment}
        onDecrement={decrement}
      />
    </>
  );
};
