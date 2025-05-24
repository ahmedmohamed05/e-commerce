import FilteringLists from "./FilteringLists";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

function Filters() {
  return (
    <aside className="w-full lg:w-[250px] pb-8">
      <FilteringLists />
      <PriceFilter />
      <RatingFilter />
    </aside>
  );
}

export default Filters;
