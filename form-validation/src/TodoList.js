import { useReducer, useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { CustomButton } from "./CustomButton";

export const TodoList = () => {
  const [todo, setTodo] = useState("");
  const initialTodo = [];
  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO": {
        return [
          ...state,
          { id: Date.now(), text: action.payload, completed: false },
        ];
      }
      case "DELETE_TODO":
        return state.filter((todo) => todo.id !== action.payload);
      case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      default:
        return state;
    }
  };
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);

  return (
    <>
      <h4>Todo App</h4>
      <ToggleButton />
      <CustomButton
        lable={"Custom Button 1"}
        onClick={() => alert("Custom button 1 clicked")}
      />

      <CustomButton
        lable={"Custom Button 2"}
        onClick={() => alert("Custom button 2 clicked")}
      />
      <br />
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
      />
      <button onClick={(e) => dispatch({ type: "ADD_TODO", payload: todo })}>
        Add Todo
      </button>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
              <button
                onClick={(e) =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                }
              >
                Toggle Todo
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              >
                Delete Todo
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};
