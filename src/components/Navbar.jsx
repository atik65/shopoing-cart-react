import React from "react";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { state } = useGlobalContext();
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="row  my-nav">
          <div className="col-6 my-nav-first">Navbar</div>
          <div className="col-6 text-end my-nav-last ">
            <i className="fas fa-shopping-bag    "></i>{" "}
            <span> {state.amount} </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
