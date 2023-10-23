import "./App.css";
import Product from "./Components/Products/Product";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Store from "./Components/Pages/Store";


function App() {
  return (
    <BrowserRouter>
      <Header />
{/* 
      <Routes>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/store" exact>
        <Store />
      </Route>
      </Routes> */}
      <Home />
      <Product />
    </BrowserRouter>
  );
}

export default App;
