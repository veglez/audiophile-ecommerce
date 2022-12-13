import { addAmount, reduceAmount } from "@slices/cart/cartSlice";
import { fetchProducts } from "@slices/products/productSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "src/redux/store";

const Navbar = () => {
  const state = useSelector((store: RootState) => store.cart);
  const products = useSelector((store: RootState) => store.products);
  const dispatch = useDispatch<AppDispath>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (products.loading) {
    return <p>Is loading...</p>;
  }

  return (
    <div>
      <h2>The amount is</h2>
      <p>{state.amount}</p>
      <div>
        <h3>The products from cart: </h3>
        <pre>{state.products}</pre>
      </div>
      <button onClick={() => dispatch(addAmount())}>Increase One</button>
      <button onClick={() => dispatch(reduceAmount())}>Decrease One</button>
      <ul>
        {products.products.map((res: Cart.Product) => {
          return <p key={res.id}>{res.name}</p>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
