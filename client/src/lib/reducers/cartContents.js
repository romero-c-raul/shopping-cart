const cartContents = (state = [], action) => {
  switch (action.type) {
    case "CART_CONTENTS_RECEIVED": {
      return action.payload.cartContents;
    }
    default:
      return state;
  }
};

export default cartContents;