import RatingStars from "../RatingStars";

// Helper function to get the correct image path
const getImagePath = (imagePath: string) => {
  // If the image path is already a full URL, return it as is
  if (imagePath.startsWith("http") || imagePath.startsWith("data:")) {
    return imagePath;
  }

  // In production, we need to prepend the base URL
  if (import.meta.env.PROD) {
    // Remove leading slash if present
    const cleanPath = imagePath.startsWith("/")
      ? imagePath.slice(1)
      : imagePath;
    return `/e-commerce/${cleanPath}`;
  }

  // In development, use the path as is
  return imagePath;
};

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
  const imageUrl = getImagePath(image);

  return (
    <div className="border-2 border-gray-400 rounded py-2 px-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <div className="image w-full relative overflow-hidden h-60">
        <img
          src={imageUrl}
          alt={`${name} by ${brand}`}
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
