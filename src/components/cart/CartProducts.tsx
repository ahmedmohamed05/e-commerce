import { FaRegTrashAlt } from "react-icons/fa";
import { useCart, useUpdateCart } from "../../context/cart";
import findProduct from "../../utils/find-product";
import CartItem from "./CartItem";
import { getTotalPrice } from "../../utils/total-price";

export default function CartProducts() {
  const orders = useCart();
  const dispatch = useUpdateCart();
  const subtotal = getTotalPrice(orders);
  const shipping = 15;
  const tax = 0;
  const total = subtotal + shipping + tax;

  const handleClearCart = () => dispatch({ type: "CLEAR_CART" });
  const increaseQuantity = (id: number) =>
    dispatch({ type: "INCREASE_QUANTITY", id });
  const decreaseQuantity = (id: number) =>
    dispatch({ type: "DECREASE_QUANTITY", id });
  const removeItem = (id: number) => dispatch({ type: "REMOVE_ITEM", id });

  return (
    <div className="container max-md:px-4 mx-auto grid grid-cols-1 lg:grid-cols-3 py-8 gap-15">
      <div className="cart-items flex-auto bg-gray-100 rounded p-4 lg:col-span-2">
        <div className="w-full flex-1 flex justify-between items-center mb-8">
          <p className="text-3xl">Cart Items ({orders.length})</p>
          <button
            className="flex justify-center items-center gap-2 cursor-pointer"
            onClick={handleClearCart}
          >
            <FaRegTrashAlt /> Clear Cart
          </button>
        </div>
        <div>
          {orders.map((order) => {
            const watch = findProduct(order.id.toString())!;
            return (
              <CartItem
                key={order.id}
                id={order.id}
                name={watch.name}
                brand={watch.brand}
                image={watch.image}
                price={watch.price}
                quantity={order.quantity}
                handleIncreaseQuantity={increaseQuantity}
                handleDecreaseQuantity={decreaseQuantity}
                handleRemoveItem={removeItem}
              />
            );
          })}
        </div>
      </div>

      <div className="order-summary bg-gray-100 rounded p-4 col-span-1 h-fit">
        <p className="text-2xl font-bold mb-4">Order Summary</p>
        <p className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span> ${subtotal.toFixed(2)}
        </p>
        <p className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span> ${shipping.toFixed(2)}
        </p>
        <p className="flex justify-between items-center">
          <span className="text-gray-600">Tax</span> ${tax.toFixed(2)}
        </p>
        <div className="line w-full h-[2px] bg-gray-950 my-8"></div>
        <p className="flex justify-between items-center">
          <span className="text-lg font-bold">Total</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </p>
        <button className="py-4 px-6 mt-8 bg-gray-950 transition-colors hover:bg-gray-800 text-white cursor-pointer rounded w-full">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}
