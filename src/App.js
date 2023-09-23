import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./Components/Topbar";
import WomenSection from "./Components/WomenSection";
import MenSection from "./Components/MenSection";
import KidSection from "./Components/KidSection";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import TShirt from "./Components/TShirt";
import Product from "./Components/Product";
import Wishlist from "./Components/Wishlist";

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
          <Route path="product/:id" element={<Product />}></Route>
          <Route path="wishlist" element={<Wishlist />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
