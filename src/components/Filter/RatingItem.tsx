import { FaStar } from "react-icons/fa";
import { useUpdateFilter } from "../../hooks/filter";
import type FilterType from "../../types/filter";

export interface RatingItemProps {
  stars?: number;
  name: string;
  id: string;
  checked?: boolean;
}

export default function RatingItem({
  stars,
  name,
  id,
  checked,
}: RatingItemProps) {
  const dispatch = useUpdateFilter();

  const handleSelect = () => {
    dispatch({
      type: "change-rating",
      newRating: stars ? (stars as FilterType["rating"]) : 0,
    });
  };

  return (
    <label htmlFor={id} className="flex gap-2 my-2">
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={handleSelect}
      />
      <span className="stars flex gap-1 cursor-pointer">
        {stars
          ? Array.from({ length: stars }).map((_, i) => (
              <FaStar key={i} fill="#fbbf24" />
            ))
          : "All"}
      </span>
    </label>
  );
}
