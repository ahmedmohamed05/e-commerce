import FilteringLists from "./FilteringLists";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

function Filters() {
  return (
    <aside className="w-full lg:w-[250px] pb-8">
      <FilteringLists />
      <PriceFilter />
      <RatingFilter />

      <button className="bg-black text-white w-full mt-8 py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
        Apply Filter
      </button>
    </aside>
  );
}

export default Filters;
