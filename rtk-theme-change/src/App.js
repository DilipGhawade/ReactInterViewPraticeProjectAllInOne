// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./rtk/theeSlice";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <h1>🌗 Redux Toolkit Theme Example</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>

      <div className="card">
        <p>This card changes color with theme!</p>
      </div>
    </div>
  );
}

export default App;
