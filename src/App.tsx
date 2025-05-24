import { Routes, Route } from "react-router-dom";
import FilterProvider from "./components/Filter/FilterProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Home from "./pages/Home";
import CartProvider from "./components/cart/CartProvider";

export default function App() {
  return (
    <div className="wrapper min-h-dvh flex flex-col">
      <FilterProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </CartProvider>
      </FilterProvider>
      <Footer />
    </div>
  );
}
