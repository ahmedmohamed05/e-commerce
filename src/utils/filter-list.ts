import type FilterType from "../types/filter";

// Define the WatchType based on the expected structure
export interface WatchType {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  features: string[];
}

// This will be populated when the data loads
let watchesCache: WatchType[] = [];

// Function to set the watches data
let setWatchesData: (watches: WatchType[]) => void = () => {};

// Function to wait for watches data to be loaded
const getWatches = async (): Promise<WatchType[]> => {
  if (watchesCache.length > 0) return watchesCache;
  
  return new Promise((resolve) => {
    setWatchesData = (data: WatchType[]) => {
      watchesCache = data;
      resolve(data);
    };
  });
};

// Export the setWatchesData function to be used by the data loading logic
export { setWatchesData };

function noFilter(filter: FilterType) {
  return (
    filter.categories.filter((item) => item.selected).length === 0 &&
    filter.brands.filter((item) => item.selected).length === 0 &&
    filter.price === 0 &&
    filter.rating === 0 &&
    filter.searchText === ""
  );
}

export async function filterList(filter: FilterType): Promise<WatchType[]> {
  const watches = await getWatches();
  
  if (noFilter(filter)) return [...watches];

  let filteredList = [...watches];

  // Filter by selected brands
  if (filter.brands.filter((b) => b.selected).length > 0) {
    const selectedBrands = filter.brands
      .filter((b) => b.selected)
      .map((b) => b.item);

    filteredList = filteredList.filter((item) =>
      selectedBrands.includes(item.brand)
    );
  }

  // Filter by selected categories

  if (filter.categories.filter((b) => b.selected).length > 0) {
    const selectedCategories = filter.categories
      .filter((c) => c.selected)
      .map((c) => c.item);
    filteredList = filteredList.filter((item) =>
      selectedCategories.includes(item.category)
    );
  }

  // Filter by price
  if (filter.price !== 0) {
    filteredList = filteredList.filter((item) => item.price >= filter.price);
  }

  // Filter by rating
  if (filter.rating !== 0) {
    filteredList = filteredList.filter((item) => item.rating >= filter.rating);
  }

  // Filter by search text
  if (filter.searchText !== "") {
    const text = filter.searchText.toLowerCase();
    filteredList = filteredList.filter((item) =>
      item.name.toLowerCase().includes(text)
    );
  }
  return filteredList;
}
