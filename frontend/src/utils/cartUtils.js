export const addDecimals = (amount) => {
  return (Math.round(amount * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  if (!state.cartItems) {
    state.cartItems = [];
  }

  // Calculate the item price
  state.itemPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calculate shipping price
  state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);

  // Calculate the tax
  state.taxPrice = addDecimals(Number(0.15 * state.itemPrice).toFixed(2));

  // Calculate total price
  state.totalPrice = (
    Number(state.itemPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
