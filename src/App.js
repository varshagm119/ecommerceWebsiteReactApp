import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route,  } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Store from "./Components/Pages/Store";
import About from "./Components/Pages/About";


function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/store" element={<Store />} />
      <Route  path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
