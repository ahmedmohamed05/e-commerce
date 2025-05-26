import { NavLink, useParams } from "react-router-dom";
import findProduct from "../utils/find-product";
import { FaArrowLeft } from "react-icons/fa";
import RatingStars from "../components/RatingStars";
import { useUpdateCart } from "../context/cart";

export default function Product() {
  const { id } = useParams<{ id: string }>();

  const product = findProduct(id!);

  const handleAddToCart = useUpdateCart();

  if (!product)
    return (
      <div className="container max-md:px-4 mx-auto py-57">
        <h1 className="text-3xl font-bold mb-10">Couldn't find product</h1>
        <NavLink
          to="/"
          className="text-gray-600 hover:underline flex items-center gap-2"
        >
          <FaArrowLeft />
          <span>Back to Home</span>
        </NavLink>
      </div>
    );

  return (
    <div className="container max-md:px-4 mx-auto py-20">
      <NavLink
        to="/"
        className="text-gray-600 hover:underline flex items-center gap-2"
      >
        <FaArrowLeft />
        <span>Back to Home</span>
      </NavLink>

      <div className="product grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="image p-4 sm:p-8 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="relative w-full h-64 sm:h-80 md:h-96 max-w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain max-w-full max-h-full"
            />
          </div>
        </div>
        <div className="info">
          <p className="text-gray-600">{product.brand}</p>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <div className="rating flex items-center gap-2 my-2">
            <RatingStars rating={product.rating} />
            <p className="rating-number text-gray-500">
              {product.rating} (20) reviews
            </p>
          </div>
          <p className="text-2xl font-bold mb-8">${product.price}</p>
          <p className="text-gray-600 my-8 max-w-lg">{product.description}</p>

          <p className="text-gray-600 font-bold text-lg">Features:</p>
          <ul className="list-disc list-inside my-4">
            {product.features.map((feature, i) => (
              <li key={i} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>

          <button
            className="w-full md:w-auto bg-gray-950 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors cursor-pointer"
            onClick={() => {
              handleAddToCart({ type: "INCREASE_QUANTITY", id: product.id });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
