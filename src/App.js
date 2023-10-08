import "./App.css";
import { useState } from "react";
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

function App() {
  const [signinSuceess, setSignSuccess] = useState(false);

  return (
    <>
      <Router>
        <Topbar signinSuceess={signinSuceess} />
        <Routes>
          <Route path="/" element={<WomenSection />}></Route>
          <Route path="/men" element={<MenSection />}></Route>
          <Route path="/kid" element={<KidSection />}></Route>
          <Route
            path="login"
            element={
              <Login
                signinSuceess={signinSuceess}
                setSignSuccess={setSignSuccess}
              />
            }></Route>
          <Route
            path="signup"
            element={
              <SignUp
                signinSuceess={signinSuceess}
                setSignSuccess={setSignSuccess}
              />
            }></Route>
          <Route
            path="tshirt"
            element={<TShirt signinSuceess={signinSuceess} />}></Route>
          <Route
            path="product"
            element={<Product signinSuceess={signinSuceess} />}></Route>
          <Route
            path="wishlist"
            element={<Wishlist signinSuceess={signinSuceess} />}></Route>
          <Route
            path="shoppingcart"
            element={<ShoppingCart signinSuceess={signinSuceess} />}></Route>
          <Route
            path="order"
            element={<Order setSignSuccess={setSignSuccess} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
