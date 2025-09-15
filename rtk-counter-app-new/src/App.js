import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { counterStore } from "./rtk/counerStore";
import { CounterPage } from "./CounterPage";

function App() {
  return (
    <Provider store={counterStore}>
      <CounterPage />
    </Provider>
  );
}

export default App;
