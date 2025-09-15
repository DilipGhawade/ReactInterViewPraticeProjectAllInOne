import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../rtk/theeSlice.js";

export const themeStore = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
