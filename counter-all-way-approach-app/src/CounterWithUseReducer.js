import { useReducer } from "react";
const initalState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};
export const CounterWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <h1>Counter Application using use Reducer Undo and redo</h1>
      <h3>Count {state.count}</h3>

      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        Decrement
      </button>
    </>
  );
};
