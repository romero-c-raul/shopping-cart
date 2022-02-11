/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();

  const cartTotal = () => {
    let sum = 0;

    cartContents.forEach((content) => {
      sum += content.price * content.quantity;
    });

    return sum;
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    const response = await axios.post("/api/checkout");

    dispatch({ type: "CART_CONTENTS_RECEIVED", payload: { cartContents: [] } });

    if (response.status !== 200) {
      console.log("Could not checkout cart");
    }
  };

  const cartContents = useSelector((state) => state.cartContents);

  useEffect(() => {
    const getCartContents = async () => {
      const response = await axios.get("/api/cart");
      const data = response.data;
      dispatch({
        type: "CART_CONTENTS_RECEIVED",
        payload: { cartContents: data },
      });
    };
    getCartContents();
  }, [dispatch]);

  return (
    <div class="cart">
      <h2>Your Cart</h2>
      {cartContents.length === 0 ? (
        <>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a class="button checkout disabled">Checkout</a>
        </>
      ) : (
        <>
          <table class="cart-items">
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cartContents.map((content) => {
              return <CartItem {...content} />;
            })}
            <tr>
              <td colspan="3" class="total">
                Total: ${cartTotal().toFixed(2)}
              </td>
            </tr>
          </table>
          <a onClick={handleCheckout} class="button checkout">
            Checkout
          </a>
        </>
      )}
    </div>
  );
};

export default Cart;
