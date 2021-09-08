const reducer = (currentState, action) => {
  if (action.type === "REMOVE_ALL") {
    return { ...currentState, cart: [] };
  }
  if (action.type === "INC") {
    const tempCart = currentState.cart.map((cartItem) => {
      if (cartItem.id === action.id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      } else {
        return cartItem;
      }
    });
    return { ...currentState, cart: tempCart };
  }

  if (action.type === "DEC") {
    const tempCart = currentState.cart
      .map((cartItem) => {
        if (cartItem.id === action.id) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        } else {
          return cartItem;
        }
      })
      .filter((cartItem) => cartItem.amount > 0);
    return { ...currentState, cart: tempCart };
  }
  if (action.type === "REMOVE") {
    const tempCart = currentState.cart.filter(
      (cartItem) => cartItem.id !== action.id
    );
    return { ...currentState, cart: tempCart };
  }

  if (action.type === "TOTAL") {
    const { totalPrice, amount } = currentState.cart.reduce(
      (total, currentItem) => {
        total.amount += currentItem.amount;
        total.totalPrice += currentItem.amount * currentItem.price;

        return total;
      },
      {
        totalPrice: 0,
        amount: 0,
      }
    );

    return {
      ...currentState,
      amount,
      totalPrice,
    };
  }
  return currentState;
};

export default reducer;
