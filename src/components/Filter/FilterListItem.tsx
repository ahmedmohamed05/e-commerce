export interface FilterListItemProps {
  id: string;
  checked: boolean;
  changeHandler: (item: string) => void;
  itemName: string;
}

export default function FilterListItem({
  id,
  checked,
  changeHandler,
  itemName,
}: FilterListItemProps) {
  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => {
          changeHandler(itemName);
        }}
      />
      <span className="ml-2 text-gray-500">{itemName}</span>
    </label>
  );
}
