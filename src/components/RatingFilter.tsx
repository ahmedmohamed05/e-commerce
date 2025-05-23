import { useFilter } from "../hooks/filter";
import RatingItem from "./RatingItem";

export default function RatingFilter() {
  const { rating } = useFilter();

  return (
    <div className="border-b-2 border-b-gray-300">
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <RatingItem
            key={i}
            id={i.toString()}
            name="rating"
            stars={5 - i}
            checked={rating == 5 - i}
          />
        );
      })}
    </div>
  );
}
