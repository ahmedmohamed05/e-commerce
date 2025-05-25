import { useFilter } from "../../context/filter";
import WatchCard from "./WatchCard";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { filterList } from "../../utils/filter-list";
import type { WatchType } from "../../utils/filter-list";

export default function Main() {
  const filter = useFilter();
  const [products, setProducts] = useState<WatchType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const filteredProducts = await filterList(filter);
        setProducts(filteredProducts);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [filter]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main className="flex-1 w-full">
      <h3 className="text-md text-gray-600 mb-4">
        {products.length} {products.length === 1 ? "Product" : "Products"}
      </h3>
      <div className="watches-grid">
        {products.length > 0 ? (
          products.map(({ id, name, brand, image, price, rating }) => (
            <NavLink to={`/product/${id}`} key={id} className="block h-full">
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
