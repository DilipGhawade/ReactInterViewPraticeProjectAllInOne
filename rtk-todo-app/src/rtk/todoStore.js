import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../rtk/todoSlice.js";
export const todoStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
