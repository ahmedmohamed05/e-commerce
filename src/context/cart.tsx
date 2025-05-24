import { createContext, type Dispatch, useContext } from "react";
import type { CartActions, CartType } from "../types/cart";

export const CartContext = createContext<CartType>([]);
export const useCart = () => useContext(CartContext);

export const UpdateCartContext = createContext<Dispatch<CartActions>>(() => {});
export const useUpdateCart = () => useContext(UpdateCartContext);
