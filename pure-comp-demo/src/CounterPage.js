import { useCallback, useState } from "react";
import { CounterDispaly } from "./CounterDispaly";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => (prev += 1));
  }, []);
  const decrement = useCallback(() => {
    setCount((prev) => (prev -= 1));
  }, []);
  return (
    <CounterDispaly
      count={count}
      onDecrement={decrement}
      onIncrement={increment}
    />
  );
};

export default CounterPage;
