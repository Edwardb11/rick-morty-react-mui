import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItems } from "../../utils/localStorage";

// Define a type for the slice state
interface CartAddState {
  id: string | number;
  name: string;
  info: string;
  img: string;
}
interface CartRemoveState {
  id: string | number;
}

const initialState: CartAddState[] = getItems("cart") || [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartAddState>) => {
      const { id } = action.payload;
      if (
        state.length === 0 ||
        state.filter((item) => item.id === id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
      const { id } = action.payload;

      if (state.some((item) => item.id === id)) {
        return (state = state.filter((item) => item.id !== id));
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
