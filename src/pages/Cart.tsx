import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart";
import CartProducts from "../components/cart/CartProducts";
import EmptyCart from "../components/cart/EmptyCart";

export default function Cart() {
  const cart = useCart();

  return (
    <div className="container mx-auto max-md:px-4 mb-35 pt-20 flex flex-col">
      <div className="top">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        <NavLink
          to="/"
          className="text-gray-600 hover:underline flex items-center gap-2"
        >
          <FaArrowLeft />
          <span>Continue shopping</span>
        </NavLink>
      </div>
      <div className="cart">
        {cart.length ? <CartProducts /> : <EmptyCart />}
      </div>
    </div>
  );
}
