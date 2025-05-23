import { FaStar as Star } from "react-icons/fa";
import { FaStarHalfAlt as StarHalf } from "react-icons/fa";
import { FaRegStar as StarEmpty } from "react-icons/fa";

export interface RatingStarsProps {
  rating: number;
  max?: number;
}

export default function RatingStars({ rating, max = 5 }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex">
      {/* Render full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-amber-400" />
      ))}

      {/* Render half star if needed */}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-amber-400" />}

      {/* Render empty stars */}
      {Array.from({ length: max - fullStars - (hasHalfStar ? 1 : 0) }).map(
        (_, i) => (
          <StarEmpty key={`empty-${i}`} className="w-4 h-4 fill-amber-400" />
        )
      )}
    </div>
  );
}
