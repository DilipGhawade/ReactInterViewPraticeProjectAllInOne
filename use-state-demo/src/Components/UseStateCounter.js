import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prev) => prev + 1);
  }
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <p>Count {count}</p>
      <button onClick={increment}>+ </button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default UseStateCounter;
