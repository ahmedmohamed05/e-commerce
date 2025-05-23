import { IoCartOutline } from "react-icons/io5";
import { useRef } from "react";
import { useUpdateFilter } from "../hooks/filter";

function Header() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useUpdateFilter();

  const handleTextChange = () => {
    dispatch({ type: "text-change", newText: searchRef.current!.value });
  };

  return (
    <header className="py-4 border-b-2 border-b-gray-300">
      <div className="container mx-auto flex items-center gap-4 md:gap-8">
        <h1 className="text-2xl md:text-3xl font-bold">Watch Haven</h1>
        <div className="search flex-1 md:pl-8">
          <input
            ref={searchRef}
            className="w-full outline-2 outline-gray-300 py-1 px-2 shadow rounded"
            placeholder="Search Watches"
            type="text"
            value={searchRef.current?.value}
            onChange={handleTextChange}
          />
        </div>
        <button className="cart cursor-pointer p-1.5" onClick={() => {}}>
          <IoCartOutline size={26} />
        </button>
      </div>
    </header>
  );
}

export default Header;
