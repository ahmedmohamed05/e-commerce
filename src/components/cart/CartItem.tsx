export interface CartItemProps {
  name: string;
  id: number;
  image: string;
  brand: string;
  quantity: number;
  price: number;
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  handleRemoveItem: (id: number) => void;
}

export default function CartItem({
  name,
  id,
  image,
  brand,
  quantity,
  price,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveItem,
}: CartItemProps) {
  return (
    <div className="border-b border-gray-200 py-6 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-6">
        <div className="relative h-32 w-32 bg-white rounded-lg shadow-sm border border-gray-100 flex-shrink-0 overflow-hidden">
          <img
            // remove /e-commerce in development
            src={image}
            alt={name}
            className="object-contain w-full h-full p-3"
          />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div>
              <h3 className="font-medium text-gray-900 text-lg">{name}</h3>
              <p className="text-gray-500 text-sm">{brand}</p>
            </div>
            <p className="font-bold text-lg text-gray-950">
              ${price.toFixed(2)}
            </p>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex justify-between items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => handleDecreaseQuantity(id)}
                className="p-2 hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900 w-10 h-10 flex items-center justify-center cursor-pointer"
                aria-label="Decrease quantity"
              >
                <span className="text-lg">-</span>
              </button>
              <span className="px-4 w-12 text-center font-medium">
                {quantity}
              </span>
              <button
                onClick={() => handleIncreaseQuantity(id)}
                className="p-2 hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900 w-10 h-10 flex items-center justify-center cursor-pointer"
                aria-label="Increase quantity"
              >
                <span className="text-lg">+</span>
              </button>
            </div>
            <button
              onClick={() => handleRemoveItem(id)}
              className="text-gray-400 hover:text-red-500 transition-colors p-2 -mr-2 cursor-pointer"
              aria-label="Remove item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
          <div className="mt-3 text-sm text-gray-500">
            ${(price * quantity).toFixed(2)} total
          </div>
        </div>
      </div>
    </div>
  );
}
