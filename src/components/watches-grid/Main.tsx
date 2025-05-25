import { useFilter } from "../../context/filter";
import { filterList } from "../../utils/filter-list";
import WatchCard from "./WatchCard";
import { NavLink } from "react-router-dom";

function Main() {
  const filter = useFilter();
  const filteredList = filterList(filter);

  return (
    <main className="flex-1 w-full">
      <h3 className="text-md text-gray-600 mb-4">
        {filteredList.length}
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
