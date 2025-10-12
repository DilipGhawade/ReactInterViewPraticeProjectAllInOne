import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterPage from "./CounterComponent/CounterPage";
import { User, UserCard, UserProps } from "./PropsAndStateWithTs/UserCard";

function App() {
  const u: User = { name: "Dilip", age: 32 };
  return (
    <div className="App">
      <UserCard user={u} />
      {/* <CounterPage /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
