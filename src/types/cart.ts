export interface CartItem {
  id: number;
  quantity: number;
}

export type CartType = CartItem[];

export type CartActions =
  | { type: "INCREASE_QUANTITY" | "DECREASE_QUANTITY"; id: number }
  | {
      type: "REMOVE_ITEM";
      id: number;
    }
  | { type: "CLEAR_CART" };
