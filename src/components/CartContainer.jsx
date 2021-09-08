import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { state, dispatch } = useGlobalContext();
  return (
    <>
      <div className="cart-container ">
        <section className="cart-container-part-one">
          {state.cart.length === 0 ? (
            <h2> Cart is Empty</h2>
          ) : (
            <h1>All cart Items are Bellow here</h1>
          )}
        </section>

        <section className="cart-container-part-two container">
          {state.cart.map((item, index) => {
            return <CartItem key={index} {...item} />;
          })}
        </section>
        <hr />
        <section>
          <div className="row total">
            <div className="col-6 text-center "> Total </div>
            <div className="col-6 text-center "> ${state.totalPrice}</div>
          </div>
        </section>

        <section className="d-flex justify-content-center">
          <button
            onClick={() => dispatch({ type: "REMOVE_ALL" })}
            className="btn btn-outline-danger mb-5"
          >
            Remove All
          </button>
        </section>
      </div>
    </>
  );
};

export default CartContainer;
