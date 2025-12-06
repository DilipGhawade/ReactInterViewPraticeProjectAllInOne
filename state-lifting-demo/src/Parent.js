import { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

export const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter (Lifting State Up)</h1>
      <ChildComponent1
        onIncrement={() => setCount((perv) => (perv += 1))}
        count={count}
      />
      <ChildComponent2 count={count} />
    </>
  );
};
