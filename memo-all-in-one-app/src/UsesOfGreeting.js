import { use, useState } from "react";
import Greeting from "./Greeting";

export const UsesOfGreeting = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Greeting name={"Dilip Ghawade"} />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => (prev += 1))}>Increment</button>
    </>
  );
};
