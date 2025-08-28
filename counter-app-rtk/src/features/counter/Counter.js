import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  incrementAsync,
} from "./counterSlice";
export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const parsed = Number(amount) || 0;
  return (
    <>
      <h1>The Counter App using RTK Basic Demo</h1>
      <h2>Count: {value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={() => dispatch(incrementByAmount(Number(parsed)))}>
        -
      </button>
    </>
  );
}
