const cartContents = (state = [], action) => {
  switch (action.type) {
    case "CART_CONTENTS_RECEIVED": {
      return action.payload.cartContents;
    }
    case "ADD_TO_CART": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default cartContents;
