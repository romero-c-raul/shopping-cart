const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload.products;
    }
    case "ADD_PRODUCT": {
      return state.concat(action.payload.product);
    }
    case "DELETE_PRODUCT": {
      return state.filter((product) => product._id !== action.payload.id)
    }
    default:
      return state;
  }
};

export default products;
