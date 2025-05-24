import { useReducer, type ReactNode } from "react";
import { CartContext, UpdateCartContext } from "../../context/cart";
import type { CartActions, CartType } from "../../types/cart";

export interface CartProviderProps {
  children: ReactNode;
}

const INIT_CART: CartType = [];

function cartReducer(cart: CartType, action: CartActions): CartType {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      // push new element
      if (!cart.find((item) => item.id === action.id))
        return [...cart, { id: action.id, quantity: 1 }];

      // increment quantity
      return cart.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

    case "DECREASE_QUANTITY": {
      const order = cart.find((item) => item.id === action.id);

      // if somehow the order not found
      if (!order) return cart;

      if (order.quantity === 1)
        cartReducer(cart, { type: "REMOVE_ITEM", id: action.id });

      return cart.map((order) => {
        if (order.id === action.id)
          return { ...order, quantity: order.quantity - 1 };
        return order;
      });
    }

    case "REMOVE_ITEM":
      return cart.filter((order) => order.id !== action.id);

    case "CLEAR_CART":
      return [];

    default:
      return cart;
  }
}

export default function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, INIT_CART);

  return (
    <CartContext.Provider value={state}>
      <UpdateCartContext.Provider value={dispatch}>
        {children}
      </UpdateCartContext.Provider>
    </CartContext.Provider>
  );
  return;
}
