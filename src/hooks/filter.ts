import { createContext, useContext, type Dispatch } from "react";
import type FilterType from "../types/filter";
import type { Actions } from "../components/FilterProvider";

export const FilterContext = createContext<FilterType>({
  searchText: "",
  categories: [],
  brands: [],
  price: 0,
  rating: 0,
});

export const UpdateFilterContext = createContext<Dispatch<Actions>>(() => {});

export const useFilter = () => useContext(FilterContext);
export const useUpdateFilter = () => useContext(UpdateFilterContext);
