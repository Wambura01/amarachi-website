import "./App.css";

import Landing from "./components/landing/landing";
import Products from "./components/products/products";
import Story from "./components/story/story";

function App() {
  return (
    <div className="App">
      <Landing />
      <Story />
      <Products />
    </div>
  );
}

export default App;
