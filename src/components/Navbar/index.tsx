import { addAmount, reduceAmount } from "@slices/cart/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/store";

const Navbar = () => {
  const state = useSelector((store: RootState) => store.cart);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>The amount is</h2>
      <p>{state.amount}</p>
      <button onClick={() => dispatch(addAmount())}>Increase One</button>
      <button onClick={() => dispatch(reduceAmount())}>Decrease One</button>
    </div>
  );
};

export default Navbar;
