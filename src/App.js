import "./App.css";
import Protected from "./protected";
import Popup from "./Components/Popup";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import Wishlist from "./Pages/Wishlist";
import Term from "./Pages/AboutUs";
import Nav from "./Components/Nav";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Main from "./Pages/Main";
import Policy from "./Pages/Policy";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Order from "./Pages/Order";
import Address from "./Pages/Address";
import Member from "./Pages/Member";
import Profile from "./Pages/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Popup />
        <Topbar />
        <Nav />
        <Routes>
          <Route path="term" element={<Term />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="category" element={<Main />} />
          <Route path="privacy" element={<Policy />} />
          <Route path="product" element={<Product />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="shoppingcart" element={<Cart />} />
          <Route path="member" element={<Member />} />
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

function ProtectedRoute({ element, whenLoggedIn = false }) {
  return <Protected whenLoggedIn={whenLoggedIn}>{element}</Protected>;
}

export default App;
