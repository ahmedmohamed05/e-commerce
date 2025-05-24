import { useEffect, useState } from "react";
import { useFilter } from "../../context/filter";
import { filterList, setWatchesData } from "../../utils/filter-list";
import type { WatchType } from "../../utils/filter-list";
import WatchCard from "./WatchCard";
import { NavLink } from "react-router-dom";

function Main() {
  const filter = useFilter();
  const [filteredList, setFilteredList] = useState<WatchType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load watches data on component mount
  useEffect(() => {
    const loadWatches = async () => {
      try {
        // In development, use the direct import
        if (import.meta.env.DEV) {
          const data = await import("../../data/watches.json");
          setWatchesData(data.default || []);
        }
        // In production, fetch from the public path
        else {
          const response = await fetch(
            `${import.meta.env.BASE_URL}data/watches.json`
          );
          if (!response.ok) throw new Error("Failed to load watches data");
          const data = await response.json();
          setWatchesData(data);
        }
      } catch (error) {
        console.error("Error loading watches:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadWatches();
  }, []);

  // Update filtered list when filter changes
  useEffect(() => {
    const updateFilteredList = async () => {
      if (isLoading) return;
      const result = await filterList(filter);
      setFilteredList(result);
    };

    updateFilteredList();
  }, [filter, isLoading]);

  if (isLoading) {
    return (
      <main className="flex-1 w-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading watches...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 w-full">
      <h3 className="text-md text-gray-600 mb-4">
        {filteredList.length}{" "}
        {filteredList.length === 1 ? "Product" : "Products"}
      </h3>
      <div className="watches-grid">
        {filteredList.length > 0 ? (
          filteredList.map(({ id, name, brand, image, price, rating }) => (
            <NavLink to={`/product/${id}`} key={id}>
              <WatchCard
                name={name}
                brand={brand}
                image={image}
                price={price}
                rating={rating}
              />
            </NavLink>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl font-bold text-gray-950 mb-2">
              No products found
            </p>
            <p className="text-gray-600">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
