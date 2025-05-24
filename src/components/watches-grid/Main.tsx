import { useMemo } from "react";
import { useFilter } from "../../context/filter";
import watches from "../../data/watches.json";
import { filterList } from "../../utils/filter-list";
import WatchCard from "./WatchCard";
import { NavLink } from "react-router-dom";

function Main() {
  const filter = useFilter();
  const filteredList = useMemo(() => filterList(filter), [filter]);

  return (
    <main className="flex-1 w-full">
      <h3 className="text-md text-gray-600 mb-4">{watches.length} Products</h3>
      <div className="watches-grid">
        {filteredList.map(({ id, name, brand, image, price, rating }) => (
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
        ))}
      </div>
    </main>
  );
}

export default Main;
