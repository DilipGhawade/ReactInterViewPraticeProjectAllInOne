import { useReducer } from "react";

const initalState = {
  past: [],
  present: 0,
  future: [],
};

const counterReducer = (state, action) => {
  const { past, present, future } = state;
  switch (action.type) {
    case "INCREMENT":
      return {
        past: [...past, present],
        present: present + 1,
        future: [],
      };
    case "DECREMENT":
      return {
        past: [...past, present],
        present: present - 1,
        future: [],
      };
    case "RESET":
      return {
        past: [...past, present],
        present: 0,
        future: [],
      };

    case "UNDO":
      if (past.length === 0) return state;
      const previous = past[past.length - 1];
      return {
        past: past.slice(0, past.length - 1),
        present: previous,
        future: [present, ...future],
      };

    case "REDO":
      if (future.length === 0) return state;
      const next = future[0];

      return {
        past: [...past, present],
        present: next,
        future: future.slice(1),
      };

    default:
      return state;
  }
};

export const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initalState);

  return (
    <div>
      <h1>Counter with useReducer</h1>
      <h3>Count: {state.present}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button
        onClick={() => dispatch({ type: "UNDO" })}
        disabled={state.past.length === 0}
      >
        Undo
      </button>
      <button
        onClick={() => dispatch({ type: "REDO" })}
        disabled={state.future.length === 0}
      >
        Redo
      </button>
    </div>
  );
};
