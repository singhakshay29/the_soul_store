import "./App.css";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Order from "./Pages/Order";
import Term from "./Pages/AboutUs";
import Nav from "./Components/Nav";
import Member from "./Pages/Member";
import NoPage from "./Pages/NoPage";
import { ProtectedRoute } from "./protected";
import SignUp from "./Pages/SignUp";
import Policy from "./Pages/Policy";
import AboutUs from "./Pages/AboutUs";
import Product from "./Pages/Product";
import Address from "./Pages/Address";
import Profile from "./Pages/Profile";
import Popup from "./Components/Popup";
import Wishlist from "./Pages/Wishlist";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import ContactUs from "./Pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Popup />
        <Topbar />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="term" element={<Term />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="member" element={<Member />} />
          <Route path="category" element={<Main />} />
          <Route path="privacy" element={<Policy />} />
          <Route path="product" element={<Product />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="shoppingcart" element={<Cart />} />
          <Route path="contact" element={<ContactUs />} />
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
