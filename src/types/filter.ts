export interface ListItem {
  item: string;
  selected: boolean;
}

export default interface FilterType {
  searchText: string;
  categories: ListItem[];
  brands: ListItem[];
  price: number;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}
