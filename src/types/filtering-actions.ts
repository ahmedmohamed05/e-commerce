import type FilterType from "./filter";

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
