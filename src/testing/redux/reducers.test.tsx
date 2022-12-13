import React from "react";
import { store } from "@redux/store";
import { setupServer } from "msw/node";
import { handlers } from "src/mocks/handlers";
import { render, screen } from "@testing-library/react";
import Navbar from "src/components/Navbar";

describe("cart Reducers", () => {
  const state = store.getState().cart;

  test("Verify initial state", () => {
    const { products, amount, loading, total } = state;

    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toEqual(0);
    expect(loading).toEqual(true);
    expect(total).toEqual(0);
    expect(amount).toBe(0);
  });

  test("Get all products", () => {
    const { products } = state;
    expect(products.length).toEqual(0);
  });
});

describe("Products reducer", () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("it fetches the products and affects the store", async () => {
    render(<Navbar />);

    const res = await screen.getByText("XX59 Headphones");
    console.log(res);
    expect(res).toBeTruthy();
  });
});
