import "./App.css";
import Order from "./Components/Order";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import TShirt from "./Components/TShirt";
import Topbar from "./Components/Topbar";
import Product from "./Components/Product";
import WTShirt from "./Components/WTShirt";
import Wishlist from "./Components/Wishlist";
import KidSection from "./Components/KidSection";
import MenSection from "./Components/MenSection";
import WomenSection from "./Components/WomenSection";
import ShoppingCart from "./Components/ShoppingCart";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WomenNav from "./Components/WomenNav";
import MenNav from "./Components/MenNav";
import Address from "./Components/Address";

function App() {
  const [active, setActive] = useState("1");

  return (
    <>
      <Router>
        <Topbar active={active} setActive={setActive} />
        {active === "1" ? <WomenNav /> : <MenNav />}
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
          <Route path="order" element={<Order />}></Route>
          <Route path="address" element={<Address />} />
          <Route path="shoppingcart" element={<ShoppingCart />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
