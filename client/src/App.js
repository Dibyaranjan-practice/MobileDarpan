import "./css/output.css";
import "./css/global.css";
import Header from "./components/main/Header.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Wishlist from "./components/Wishlist";
import Footer from "./components/main/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
