import "./App.css";
import Order from "./Components/Order";
import Login from "./Components/Login";
import Popup from "./Components/Popup";
import SignUp from "./Components/SignUp";
import TShirt from "./Components/TShirt";
import Topbar from "./Components/Topbar";
import MenNav from "./Components/MenNav";
import Footer from "./Components/Footer";
import Address from "./Components/Address";
import WTShirt from "./Components/WTShirt";
import Product from "./Components/Product";
import Wishlist from "./Components/Wishlist";
import WomenNav from "./Components/WomenNav";
import MenSection from "./Components/MenSection";
import WomenSection from "./Components/WomenSection";
import ShoppingCart from "./Components/ShoppingCart";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          <Route path="/" element={<WomenSection />}></Route>
          <Route path="/men" element={<MenSection />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="tshirt" element={<TShirt />}></Route>
          <Route
            path="category"
            element={<WTShirt openPopover={openPopover} />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route
            path="wishlist"
            element={<Wishlist openPopover={openPopover} />}></Route>
          <Route path="order" element={<Order />}></Route>
          <Route path="address" element={<Address />} />
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
