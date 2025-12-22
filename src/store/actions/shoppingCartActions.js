export const addToCart = (product) => {
  return { type: "ADD_TO_CART", payload: product };
};

export const removeFromCart = (productId) => {
  return { type: "REMOVE_FROM_CART", payload: productId };
};

export const updateItemCount = (productId, count) => {
  return { type: "UPDATE_ITEM_COUNT", payload: { productId, count } };
};

export const toggleCheckbox = (productId) => {
  return { type: "TOGGLE_CHECKBOX", payload: productId };
};
