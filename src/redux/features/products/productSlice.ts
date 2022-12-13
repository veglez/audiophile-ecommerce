import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "src/mocks/api";

const initialState = {
  products: [],
  loading: true,
  error: "",
};
export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const res = await API.getAllProduct();
  console.log("respuesta es: ", res);
  return res;
});
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addOne: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    }),
      builder.addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;

export const { addOne } = productSlice.actions;
