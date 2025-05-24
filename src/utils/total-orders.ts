import type { CartItem } from "../types/cart";

export function getTotalOrders(orders: CartItem[]): number {
  return orders.reduce((prev, current) => prev + current.quantity, 0);
}
