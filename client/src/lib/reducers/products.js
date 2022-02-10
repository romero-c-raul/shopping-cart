const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload.products;
    }
    case "ADD_PRODUCT": {
      return state.concat(action.payload.product);
    }
    default:
      return state;
  }
};

export default products;