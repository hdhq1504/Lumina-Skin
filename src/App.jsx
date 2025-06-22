import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Index from "./components/Pages/Index";
import ProductDetails from "./components/Pages/ProductDetails";
import Wishlist from "./components/Pages/Wishlist";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
import Shop from "./components/Pages/Shop";
import Stores from "./components/Pages/Stores";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/stores" element={<Stores />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
