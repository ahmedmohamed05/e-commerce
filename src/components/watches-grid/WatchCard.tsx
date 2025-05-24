import RatingStars from "../RatingStars";

export interface WatchCardProps {
  image: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
}

export default function WatchCard({
  image,
  name,
  brand,
  price,
  rating,
}: WatchCardProps) {
  return (
    <div className="border-2 border-gray-400 rounded py-2 px-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <div className="image w-full relative overflow-hidden h-60">
        <img
          src={image}
          alt={`Watch Image ${name}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="py-4">
        <p className="title text-lg">{name}</p>
        <p className="brand text-gray-600 text-sm mb-4">{brand}</p>
        <div className="details rating flex items-center">
          <p className="price font-bold">${price}</p>
          <div className="stars flex-1 flex justify-end mr-1">
            <RatingStars rating={rating} />
          </div>
          <p className="rating-number">{rating}</p>
        </div>
      </div>
    </div>
  );
}
