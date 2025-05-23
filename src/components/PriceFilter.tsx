import { useRef } from "react";
import { useFilter, useUpdateFilter } from "../hooks/filter";

export default function PriceFilter() {
  const { price } = useFilter();
  const dispatch = useUpdateFilter();
  const input = useRef<HTMLInputElement | null>(null);

  const changeHandler = () => {
    dispatch({
      type: "change-price",
      newPrice: parseInt(input.current!.value),
    });
  };

  return (
    <div className="border-b-2 border-b-gray-300 my-4">
      <h3 className="text-xl text-gray-800 mb-2">Price Range</h3>
      <input
        className="price-range w-full accent-black"
        type="range"
        ref={input}
        min={0}
        max={1000}
        step={10}
        value={price}
        onChange={changeHandler}
      />
      <div className="flex justify-between items-center text-gray-600 pb-4">
        <span>{price}$</span>
        <span>1000$</span>
      </div>
    </div>
  );
}
