import { useMemo } from "react";
import { useFilter } from "../../context/filter";
import { filterList } from "../../utils/filter-list";
import WatchCard from "./WatchCard";
import { NavLink } from "react-router-dom";

function Main() {
  const filter = useFilter();
  const filteredList = useMemo(() => filterList(filter), [filter]);

  return (
    <main className="flex-1 w-full">
      <h3 className="text-md text-gray-600 mb-4">
        {filteredList.length} Products
      </h3>
      <div className="watches-grid">
        {filteredList.length > 0 ? (
          filteredList.map(({ id, name, brand, image, price, rating }) => (
            <NavLink to={`/product/${id}`} key={id}>
              <WatchCard
                key={id}
                name={name}
                brand={brand}
                image={image}
                price={price}
                rating={rating}
              />
            </NavLink>
          ))
        ) : (
          <p className="text-center text-xl font-bold text-gray-950">
            No products found
          </p>
        )}
      </div>
    </main>
  );
}

export default Main;
