import type FilterType from "./filter";

export type Actions =
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
