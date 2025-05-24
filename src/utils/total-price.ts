import type { CartItem } from "../types/cart";
import findProduct from "./find-product";

export function getTotalPrice(orders: CartItem[]): number {
  return orders.reduce((total, order) => {
    const product = findProduct(order.id.toString());
    return total + (product ? product.price * order.quantity : 0);
  }, 0);
}
