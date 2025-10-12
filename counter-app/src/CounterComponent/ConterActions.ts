export type CounterActions =
  | { type: "Increment" }
  | { type: "Decrement" }
  | { type: "Reset" }
  | { type: "SetCount"; payload: number };
