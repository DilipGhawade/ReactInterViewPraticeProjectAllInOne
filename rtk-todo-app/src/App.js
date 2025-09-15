import logo from "./logo.svg";
import "./App.css";
import { todoStore } from "./rtk/todoStore";
import { Provider } from "react-redux";
import { TodoPage } from "./TodoPage";

function App() {
  return (
    <Provider store={todoStore}>
      <TodoPage />
    </Provider>
  );
}

export default App;
