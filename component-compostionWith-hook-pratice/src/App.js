import logo from "./logo.svg";
import "./App.css";
import { ProductCard } from "./EcommerceProductPages/ProductCard";
import ErrorBoundry from "./ErrorBoundry";
import { UserContext } from "./UseContextDemo";
import { use } from "react";
const product1 = {
  name: "Watter Bottle",
  imageUrl: "https://picsum.photos/seed/picsum/200/300",
};
function App() {
  const user = { name: "Dilip", age: 32 };
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <ErrorBoundry>
          <ProductCard product={product1} />
        </ErrorBoundry>
      </UserContext.Provider>
    </div>
  );
}

export default App;
