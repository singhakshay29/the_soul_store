import "./App.css";
import Order from "./Components/Order";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import TShirt from "./Components/TShirt";
import Topbar from "./Components/Topbar";
import Product from "./Components/Product";
import Wishlist from "./Components/Wishlist";
import KidSection from "./Components/KidSection";
import MenSection from "./Components/MenSection";
import WomenSection from "./Components/WomenSection";
import ShoppingCart from "./Components/ShoppingCart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WTShirt from "./Components/WTShirt";

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<WomenSection />}></Route>
          <Route path="/men" element={<MenSection />}></Route>
          <Route path="/kid" element={<KidSection />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="tshirt" element={<TShirt />}></Route>
          <Route path="category" element={<WTShirt />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="wishlist" element={<Wishlist />}></Route>
          <Route path="shoppingcart" element={<ShoppingCart />}></Route>
          <Route path="order" element={<Order />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
