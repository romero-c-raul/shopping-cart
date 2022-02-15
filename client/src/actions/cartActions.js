import apiClient from "../lib/ApiClient";

export const addToCartSuccess = (allCartItems) => {
  return { type: "ADD_TO_CART", payload: allCartItems };
};

export const addToCart = (id) => {
  return async (dispatch) => {
    const allCartItems = await apiClient.addToCart(id);
    dispatch(addToCartSuccess(allCartItems));
  };
};

export const getCartContentsSuccess = (data) => {
  return {
    type: "CART_CONTENTS_RECEIVED",
    payload: { cartContents: data },
  };
};

export const getCartContents = () => {
  return async (dispatch) => {
    const allCartItems = await apiClient.getCartContents();
    dispatch(getCartContentsSuccess(allCartItems));
  };
};

export const checkoutSuccess = () => {
  return { type: "CART_CONTENTS_RECEIVED", payload: { cartContents: [] } };
};

export const checkout = () => {
  return async (dispatch) => {
    await apiClient.checkout();
    dispatch(checkoutSuccess());
  };
};
