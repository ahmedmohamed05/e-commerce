import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex justify-center items-center">
      <div className="p-10 shadow-md rounded-2xl mt-20 flex flex-col justify-center items-center">
        <IoCartOutline size={120} />
        <p className="text-2xl font-bold">Your Cart Is Empty</p>
        <p className="text-gray-600 mt-6 leading-0.5">
          Looks like you haven't added any watches to your cart yet.
        </p>
        <NavLink
          to="/"
          className="text-gray-600 hover:underline flex items-center gap-2"
        >
          <button className="py-4 px-6 mt-10 bg-gray-950 transition-colors hover:bg-gray-800 text-white cursor-pointer rounded">
            Brows Watches
          </button>
        </NavLink>
      </div>
    </div>
  );
}
