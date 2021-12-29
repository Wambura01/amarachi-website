import "./App.css";

import Landing from "./components/landing/landing";
import Products from "./components/products/products";
import Story from "./components/story/story";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <Story />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
