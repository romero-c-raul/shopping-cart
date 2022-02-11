import apiClient from "../lib/ApiClient";

export const productsReceivedSuccess = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: { products } };
};

export const productsReceived = () => {
  return async (dispatch) => {
    const products = await apiClient.getProducts();
    dispatch(productsReceivedSuccess(products));
  };
};

export const productRemovedSuccess = (id) => {
  return { type: "DELETE_PRODUCT", payload: { id: id } };
};

export const productRemoved = (id) => {
  return async (dispatch) => {
    await apiClient.deleteProduct(id);
    dispatch(productRemovedSuccess(id));
  };
};

export const productUpdatedSuccess = (recentProducts) => {
  return { type: "PRODUCTS_RECEIVED", payload: { products: recentProducts } };
};

export const productUpdated = (id, newProduct, products) => {
  return async (dispatch) => {
    const recentProducts = await apiClient.editProduct(
      id,
      newProduct,
      products
    );
    dispatch(productUpdatedSuccess(recentProducts));
  };
};
