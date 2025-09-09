import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./counterstore/counterSlice";

export const CounterPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={(e) => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByValue(5))}>
        Increment By Amount
      </button>
    </>
  );
};
