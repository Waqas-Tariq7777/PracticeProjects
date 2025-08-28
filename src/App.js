import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop"
import About from "./pages/about"
import Blog from "./pages/blog"
import Contact from "./pages/contact"
import Cart from "./pages/cart"
import WishList from "./pages/wishlist"
import SingleProduct from "./pages/singleproduct"
import Checkout from "./pages/checkout"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/WishList" element={<WishList/>}/>
      <Route path="/SingleProduct" element={<SingleProduct/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
    </Routes>
    </div>
  );
}

export default App;
