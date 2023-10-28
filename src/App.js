import "./App.css";
import Order from "./Components/Order";
import Login from "./Components/Login";
import Popup from "./Components/Popup";
import SignUp from "./Components/SignUp";
import Topbar from "./Components/Topbar";
import MenNav from "./Components/MenNav";
import Footer from "./Components/Footer";
import Address from "./Components/Address";
import Product from "./Components/Product";
import Wishlist from "./Components/Wishlist";
import WomenNav from "./Components/WomenNav";
import ShoppingCart from "./Components/ShoppingCart";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section from "./Components/Section";
import Shop from "./Components/Shop";
import Profile from "./Components/Profile";

function App() {
  const [active, setActive] = useState("1");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openPopover = (check) => {
    setIsPopoverOpen(true);
    setMessage(check);
    setTimeout(() => {
      setIsPopoverOpen(false);
    }, 3000);
  };

  return (
    <>
      <Router>
        <Topbar active={active} setActive={setActive} />
        {active === "1" ? <WomenNav /> : <MenNav />}
        {isPopoverOpen && <Popup message={message} />}
        <Routes>
          <Route
            path="/"
            element={<Section active={active} setActive={setActive} />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route
            path="category"
            element={<Shop openPopover={openPopover} />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route
            path="wishlist"
            element={<Wishlist openPopover={openPopover} />}></Route>
          <Route path="order" element={<Order />}></Route>
          <Route path="address" element={<Address />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="shoppingcart"
            element={<ShoppingCart openPopover={openPopover} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
