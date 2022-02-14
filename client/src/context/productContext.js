import { useReducer, createContext } from "react";
import apiClient from "../lib/ApiClient";

const ProductContext = createContext();

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload.products;
    }
    case "ADD_PRODUCT": {
      return state.concat(action.payload.product);
    }
    case "DELETE_PRODUCT": {
      return state.filter((product) => product._id !== action.payload.id);
    }
    default:
      return state;
  }
};

const getProducts = async (dispatch) => {
  const products = await apiClient.getProducts();
  dispatch({ type: "PRODUCTS_RECEIVED", payload: { products } });
};

const deleteProduct = async (dispatch, id) => {
  await apiClient.deleteProduct(id);
  dispatch({ type: "DELETE_PRODUCT", payload: { id: id } });
};

const editProduct = async (dispatch, id, newProduct, products) => {
  const recentProducts = await apiClient.editProduct(id, newProduct, products);
  dispatch({
    type: "PRODUCTS_RECEIVED",
    payload: { products: recentProducts },
  });
};

const addProduct = async (dispatch, newProduct, callback) => {
  const product = await apiClient.addProduct(newProduct);
  dispatch({ type: "ADD_PRODUCT", payload: { product } });
  if (callback) {
    callback();
  }
};


const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export {
  ProductContext,
  ProductProvider,
  getProducts,
  deleteProduct,
  editProduct,
  addProduct,
};
