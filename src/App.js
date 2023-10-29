import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Store from "./Components/Pages/Store";
import About from "./Components/Pages/About";
import ContactUs from "./Components/Pages/ContactUs";
import ProductDetails from "./Components/Pages/ProductDetails";
import Comments from "./Components/Comments/Comments";
import AuthPage from "./Components/Pages/AuthPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import { UserAuthContextProvider } from "./Context/UserAuthContext";


function App() {
  return (
    <div>
      <UserAuthContextProvider>
      <Header />
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route  path="/home" element={<Home />} />
      <Route  path="/store" element={<ProtectedRoute> <Store /></ProtectedRoute>} />
      <Route  path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/store/:productId" element={<ProductDetails />} />
      <Route path="/store/:productId/comments" element={<Comments />} />
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
