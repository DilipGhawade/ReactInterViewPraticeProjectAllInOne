const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      //   localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme, setItem } = themeSlice.actions;

export default themeSlice.reducer;
