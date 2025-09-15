import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../rtk/counterSlice.js";
export const counterStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
