import React from "react";
import { useGlobalContext } from "./context";
const CartItem = ({ name, price, amount, img, id }) => {
  const { dispatch } = useGlobalContext();
  return (
    <>
      <div className="container ">
        <div className="row cart-item">
          <div className="col-md-2  col-4 ">
            <div className="row d-flex align-items-center">
              <div className="col-md-9">
                <img src={img} alt="" />
              </div>

              <div></div>
            </div>
          </div>
          <div className="col-md-6 col-4 cart-middle">
            <h4 className="name"> {name} </h4>
            <div className=" price">${price} </div>
            <button
              onClick={() => dispatch({ type: "REMOVE", id: id })}
              className=" remove"
            >
              Remove
            </button>
          </div>

          <div className="col-4 cart-item-last text-center ps-5">
            <div>
              <button onClick={() => dispatch({ type: "INC", id: id })}>
                <i className="fas fa-sort-up"></i>
              </button>
            </div>
            <div> {amount} </div>
            <div>
              <button onClick={() => dispatch({ type: "DEC", id: id })}>
                <i className="fas fa-sort-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
