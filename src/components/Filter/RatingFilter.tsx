import { useFilter } from "../../context/filter";
import RatingItem from "./RatingItem";

export default function RatingFilter() {
  const { rating } = useFilter();

  return (
    <div>
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
      <RatingItem id="All" name="rating" checked={rating == 0} />
    </div>
  );
}
