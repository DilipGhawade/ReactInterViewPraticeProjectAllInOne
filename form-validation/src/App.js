import logo from "./logo.svg";
import "./App.css";
import { FormValidation } from "./FormValidation";
import { DropDown } from "./DropDown";
import { SearchInput } from "./SearchInput";
import { UseLocalStoragePage } from "./UseLocalStoragePage";
import { TodoList } from "./TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
      {/* <FormValidation /> */}
      {/* <DropDown /> */}
      {/* <SearchInput /> */}
      {/* <UseLocalStoragePage /> */}
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
