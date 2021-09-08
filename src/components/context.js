import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import data from "./data";
const AppContext = React.createContext();

const initialState = {
  cart: data,
  amount: 1,
  totalPrice: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
