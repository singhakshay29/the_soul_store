import "./App.css";
import ProtectedRoute from "./protected";
import Shop from "./Components/Shop";
import Member from "./Components/Member";
import Order from "./Components/Order";
import Term from "./Components/Term";
import Login from "./Components/Login";
import Popup from "./Components/Popup";
import SignUp from "./Components/SignUp";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import Address from "./Components/Address";
import Product from "./Components/Product";
import Section from "./Components/Section";
import Profile from "./Components/Profile";
import WomenNav from "./Components/WomenNav";
import Wishlist from "./Components/Wishlist";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ShoppingCart from "./Components/ShoppingCart";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Popup />
        <Topbar />
        <WomenNav />
        <Routes>
          <Route path="term" element={<Term />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/" element={<Section />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="category" element={<Shop />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="product" element={<Product />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route
            path="login"
            element={<ProtectedRoute element={<Login />} />}
          />
          <Route
            path="signup"
            element={<ProtectedRoute element={<SignUp />} />}
          />
          <Route
            path="order"
            element={<ProtectedRoute whenLoggedIn element={<Order />} />}
          />
          <Route
            path="address"
            element={<ProtectedRoute whenLoggedIn element={<Address />} />}
          />
          <Route
            path="member"
            element={<ProtectedRoute whenLoggedIn element={<Member />} />}
          />
          <Route
            path="profile"
            element={<ProtectedRoute whenLoggedIn element={<Profile />} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
