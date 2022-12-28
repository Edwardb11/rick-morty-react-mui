import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CartState {
  id: string | number;
  name: string;
  info: string;
  img: string;
}

// Define the initial state using that type
const initialState: CartState[] = [];
export const cartSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState>) => {},
    removeToCart: (state, action: PayloadAction<CartState>) => {},
  },
});

export const {} = cartSlice.actions;
