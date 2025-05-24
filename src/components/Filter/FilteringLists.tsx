import { useMemo } from "react";
import { useFilter } from "../../context/filter";
import FilterList from "./FilterList";

export default function FilteringLists() {
  const selectedFilter = useFilter();

  const brands = useMemo(() => selectedFilter.brands, [selectedFilter.brands]);
  const categories = useMemo(
    () => selectedFilter.categories,
    [selectedFilter.categories]
  );

  return (
    <>
      <FilterList name="Categories" list={categories} />
      <FilterList name="Brands" list={brands} />
    </>
  );
}
