import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addAmount: (state) => {
      state.amount++;
    },
    reduceAmount: (state) => {
      state.amount--;
    },
  },
});

export default cartSlice.reducer;

export const { addAmount, reduceAmount } = cartSlice.actions;
