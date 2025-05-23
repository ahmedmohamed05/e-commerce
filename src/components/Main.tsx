import watches from "../data/watches.json";
import WatchCard from "./WatchCard";

function Main() {
  return (
    <main className="flex-1 w-full mb-4">
      <h3 className="text-md text-gray-600 mb-4">{watches.length} Products</h3>
      <div className="watches-grid">
        {watches.map(({ id, name, brand, image, price, rating }) => (
          <WatchCard
            key={id}
            name={name}
            brand={brand}
            image={image}
            price={price}
            rating={rating}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
