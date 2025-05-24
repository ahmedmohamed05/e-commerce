import { useUpdateFilter } from "../../context/filter";
import type { ListItem } from "../../types/filter";
import FilterListItem from "./FilterListItem";

export interface FilterListProps {
  name: string;
  list: ListItem[];
}

function FilterList({ name, list }: FilterListProps) {
  const dispatch = useUpdateFilter();

  const handleChange = (itemName: string) => {
    dispatch({
      type: "change-select",
      list: name.toLocaleLowerCase() as "categories" | "brands",
      item: itemName,
    });
  };

  return (
    <div className="border-b-2 border-gray-400 mb-3 pb-2">
      <h3 className="text-xl text-gray-800 mb-2">{name}</h3>
      <ul className="flex flex-col">
        {list.map((item, i) => (
          <FilterListItem
            key={i}
            changeHandler={handleChange}
            id={crypto.randomUUID()}
            checked={item.selected}
            itemName={item.item}
          />
        ))}
      </ul>
    </div>
  );
}

export default FilterList;
