import { store } from "@redux/store";

describe("cart Reducers", () => {
  const state = store.getState().cart;

  test("Add product to cart", () => {
    const { products, amount } = state;

    expect(Array.isArray(products)).toBeTruthy();
    expect(amount).toBe(0);
  });
});
