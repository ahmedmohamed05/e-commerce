import watches from "../data/watches.json";
import RatingStars from "./RatingStars";

function Main() {
  return (
    <main className="flex-1 w-full mb-4">
      <h3 className="text-md text-gray-600 mb-4">{watches.length} Products</h3>
      <div className="products">
        {watches.map((watch, i) => {
          return (
            <div
              className="border-2 border-gray-400 rounded py-2 px-4 cursor-pointer transition-all duration-200 hover:shadow-md"
              key={watch.id}
            >
              <div className="image w-full relative overflow-hidden h-60">
                <img
                  src={watch.image}
                  alt={`Watch number ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="py-4">
                <p className="title text-lg">{watch.name}</p>
                <p className="brand text-gray-600 text-sm mb-4">
                  {watch.brand}
                </p>
                <div className="rating-and-price">
                  <div className="rating flex items-center justify-between">
                    <p className="price font-bold">${watch.price}</p>
                    <div className="stars">
                      <RatingStars rating={watch.rating} />
                    </div>
                    <p className="rating-number">{watch.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
