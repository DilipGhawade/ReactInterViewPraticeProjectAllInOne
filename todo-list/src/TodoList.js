import { useReducer, useState } from "react";

export const TodoList = () => {
  //use reducer for state
  // useReducer needs reducer function and inital state.
  // then input box , add button
  // ul then map on todos -> li-> pass the key and style for textdecoration and two button toggle and delete.

  // inital state
  const initialTodoState = [];
  // todo reducer function

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          { id: Date.now(), text: action.payload, completed: false },
        ];
      case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      case "DELETE_TODO":
        return state.filter((todo) => todo.id !== action.payload);
      default:
        throw new Error("Invalid Type");
    }
  };

  // the state for input to take the todo form user
  const [input, setInput] = useState(" ");
  // reducer which takes the reducer and initial state and give us data and the dispach for dispatching the event.
  const [todos, dispach] = useReducer(todoReducer, initialTodoState);
  // function to add todo
  const addTodo = () => {
    if (!input.trim()) {
      return alert("Please Enter the todo!");
    }
    dispach({ type: "ADD_TODO", payload: input });
    setInput(" ");
  };

  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a text to add todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button
              onClick={() => dispach({ type: "TOGGLE_TODO", payload: todo.id })}
            >
              Toggle Todo
            </button>
            <button
              onClick={() => dispach({ type: "DELETE_TODO", payload: todo.id })}
            >
              Delete Todo
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
