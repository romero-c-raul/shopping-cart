import { useReducer, createContext } from "react";
import apiClient from "../lib/ApiClient";

const CartContext = createContext();

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "CART_CONTENTS_RECEIVED": {
      return action.payload.cartItems;
    }
    case "ADD_TO_CART": {
      return action.payload;
    }
    default:
      return state;
  }
};

const getCartContents = async (dispatch) => {
  const cartItems = await apiClient.getCartContents();
  dispatch({ type: "CART_CONTENTS_RECEIVED", payload: { cartItems } });
};

const addToCart = async (dispatch, id) => {
  const allCartItems = await apiClient.addToCart(id);
  dispatch({ type: "ADD_TO_CART", payload: allCartItems });
};

const CartProvider = ({ children }) => {
  const [cartContents, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cartContents, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, getCartContents, addToCart };
