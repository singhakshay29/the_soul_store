import "./App.css";
import { useState } from "react";
import Shop from "./Components/Shop";
import Order from "./Components/Order";
import Login from "./Components/Login";
import Popup from "./Components/Popup";
import SignUp from "./Components/SignUp";
import Topbar from "./Components/Topbar";
import MenNav from "./Components/MenNav";
import Footer from "./Components/Footer";
import Address from "./Components/Address";
import Product from "./Components/Product";
import Section from "./Components/Section";
import Profile from "./Components/Profile";
import WomenNav from "./Components/WomenNav";
import Wishlist from "./Components/Wishlist";
import ShoppingCart from "./Components/ShoppingCart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Member from "./Components/Member";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Term from "./Components/Term";
import PrivacyPolicy from "./Components/PrivacyPolicy";

function App() {
  const [active, setActive] = useState("1");
  const [message, setMessage] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

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
        {active === "1" ? (
          <WomenNav openPopover={openPopover} />
        ) : (
          <MenNav openPopover={openPopover} />
        )}
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
          <Route
            path="order"
            element={<Order openPopover={openPopover} />}></Route>
          <Route path="address" element={<Address />} />
          <Route path="member" element={<Member />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="term" element={<Term />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="contact" element={<ContactUs />} />
          <Route
            path="shoppingcart"
            element={<ShoppingCart openPopover={openPopover} />}></Route>
        </Routes>
        <Footer active={active} />
      </Router>
    </>
  );
}

export default App;
