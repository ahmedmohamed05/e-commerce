import { IoCartOutline } from "react-icons/io5";
import { useRef } from "react";
import { useUpdateFilter } from "../context/filter";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart";
import { getTotalOrders } from "../utils/total-orders";

function Header() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useUpdateFilter();
  const cartItems = getTotalOrders(useCart());

  const handleTextChange = () => {
    if (searchRef.current) {
      dispatch({ type: "text-change", newText: searchRef.current.value });
    }
  };

  return (
    <header className="py-4 border-b-2 border-b-gray-300">
      <div className="container max-md:px-4 mx-auto flex items-center gap-4 md:gap-8">
        <NavLink to="/" className="text-2xl md:text-3xl font-bold">
          Watch Haven
        </NavLink>
        <div className="search flex-1 md:pl-8">
          <input
            ref={searchRef}
            className="w-full outline-2 outline-gray-300 py-1 px-2 shadow rounded"
            placeholder="Search Watches"
            type="text"
            onChange={handleTextChange}
          />
        </div>
        <NavLink
          to="/cart"
          className="relative p-1.5"
          aria-label="Shopping Cart"
        >
          <IoCartOutline size={26} />
          <span className="sr-only">View Cart</span>
          <span className="absolute -top-1 -right-1 bg-gray-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems}
          </span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
