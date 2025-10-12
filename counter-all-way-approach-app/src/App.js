import logo from "./logo.svg";
import "./App.css";
import { CounterUseState } from "./CounterWithUseState/CounterUseState";
import { CounterWithUseReducer } from "./CounterWithUseReducer";
import CounterWithRTK from "./CounterWithRTK/CounterWithRTK";
import { Provider } from "react-redux";
import { counterStore } from "./CounterWithRTK/counterStore";
import { CounterPage } from "./CounterWithPurecomponent/CounterPage";
import { CounterUseReducer } from "./CounterReducer";

function App() {
  return (
    <div className="App">
      {/* <CounterUseState /> */}
      {/* <CounterWithUseReducer /> */}
      {/* <Provider store={counterStore}>
        <CounterWithRTK />
      </Provider> */}

      {/* <CounterPage /> */}

      <CounterUseReducer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
