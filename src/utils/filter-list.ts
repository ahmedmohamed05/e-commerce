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

// Function to fetch watches data
let cachedWatches: WatchType[] = [];

export async function fetchWatches(): Promise<WatchType[]> {
  if (cachedWatches.length > 0) return cachedWatches;

  try {
    // In production, the file will be in the /e-commerce/data/ directory
    const basePath = import.meta.env.PROD ? '/e-commerce' : '';
    const response = await fetch(`${basePath}/data/watches.json`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch watches data');
    }
    
    const data = await response.json();
    cachedWatches = Array.isArray(data) ? data : [];
    return cachedWatches;
  } catch (error) {
    console.error('Error fetching watches:', error);
    return [];
  }
}

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
  const watches = await fetchWatches();
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
