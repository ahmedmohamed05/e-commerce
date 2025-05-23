import { useReducer } from "react";
import { FilterContext, UpdateFilterContext } from "../hooks/filter";
import type FilterType from "../types/filter";
import { brands, categories } from "../data/data";

export type Actions =
  | {
      type: "text-change";
      newText: string;
    }
  | {
      type: "change-select";
      list: "brands" | "categories";
      item: string;
    }
  | {
      type: "change-price";
      newPrice: number;
    }
  | {
      type: "change-rating";
      newRating: FilterType["rating"];
    }
  | { type: "clear" };

const INIT_FILTER: FilterType = {
  searchText: "",
  categories,
  brands,
  price: 0,
  rating: 0,
};

function filterReducer(filter: FilterType, action: Actions): FilterType {
  switch (action.type) {
    case "text-change":
      return { ...filter, searchText: action.newText };

    case "change-select": {
      const newList = filter[action.list].map((item) =>
        item.item === action.item ? { ...item, selected: !item.selected } : item
      );

      return { ...filter, [action.list]: newList };
    }

    case "change-price":
      return { ...filter, price: action.newPrice };

    case "change-rating":
      console.log(action.newRating);
      return { ...filter, rating: action.newRating };

    case "clear":
      return INIT_FILTER;

    default:
      return filter;
  }
}

export interface FilterProviderProps {
  children: React.ReactNode;
}

export default function FilterProvider({ children }: FilterProviderProps) {
  const [filter, dispatch] = useReducer(filterReducer, INIT_FILTER);

  return (
    <FilterContext.Provider value={filter}>
      <UpdateFilterContext value={dispatch}>{children}</UpdateFilterContext>
    </FilterContext.Provider>
  );
}
