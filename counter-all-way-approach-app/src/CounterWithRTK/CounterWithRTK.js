import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "./counterSlice";

const CounterWithRTK = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter With RTK</h1>

      <h3>Count : {count}</h3>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
    </>
  );
};

export default CounterWithRTK;
