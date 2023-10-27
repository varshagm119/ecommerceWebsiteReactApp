import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route,  } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Store from "./Components/Pages/Store";
import About from "./Components/Pages/About";
import ContactUs from "./Components/Pages/ContactUs";
import ProductDetails from "./Components/Pages/ProductDetails";


function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route  path="/store" element={<Store />} />
      <Route  path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
