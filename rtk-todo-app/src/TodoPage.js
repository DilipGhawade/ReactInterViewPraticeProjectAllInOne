import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./rtk/todoSlice";

export const TodoPage = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  return (
    <>
      <h3>Todo With RTK Example</h3>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Enter Todo"
      />
      <button
        onClick={() => {
          if (todo.trim() !== "") {
            dispatch(addTodo(todo));
            setTodo("");
          }
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos &&
          todos.map((t) => (
            <li
              key={t.id}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
              }}
            >
              {t.text}

              <button onClick={() => dispatch(deleteTodo(t.id))}>
                Delete Todo
              </button>
              <button onClick={() => dispatch(toggleTodo(t.id))}>
                Toggle Todo
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};
