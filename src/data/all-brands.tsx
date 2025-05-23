import type { ListItem } from "../types/filter";
import watches from "./watches.json";

export const brands: ListItem[] = [];
export const categories: ListItem[] = [];

// Use forEach instead of map (since we're not using the return value)
watches.forEach((watch) => {
  // Check for existing brand by VALUE
  const brandExists = brands.some((b) => b.item === watch.brand);
  if (!brandExists) {
    brands.push({ item: watch.brand, selected: false });
  }

  // Check for existing category by VALUE
  const categoryExists = categories.some((c) => c.item === watch.category);
  if (!categoryExists) {
    categories.push({ item: watch.category, selected: false });
  }
});
