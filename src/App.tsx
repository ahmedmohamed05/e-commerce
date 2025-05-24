import { Routes, Route } from "react-router-dom";
import FilterProvider from "./components/Filter/FilterProvider";
import Filters from "./components/Filter/Filters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/watches-grid/Main";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

// Todo: crate separted component
function Home() {
  return (
    <>
      <div className="container max-md:px-1 mx-auto py-8">
        <h2 className="text-3xl font-bold">Luxury Watches</h2>
      </div>
      <div className="container max-md:px-1 mx-auto flex flex-col lg:flex-row gap-8">
        <Filters />
        <Main />
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="wrapper min-h-dvh flex flex-col">
      <FilterProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </FilterProvider>
      <Footer/>
    </div>
  );
}
