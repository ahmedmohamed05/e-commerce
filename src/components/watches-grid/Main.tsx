import watches from "../../data/watches.json";
import WatchCard from "./WatchCard";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <main className="flex-1 w-full">
      <h3 className="text-md text-gray-600 mb-4">{watches.length} Products</h3>
      <div className="watches-grid">
        {watches.map(({ id, name, brand, image, price, rating }) => (
          <NavLink to={`/product/${id}`}>
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
