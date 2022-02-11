/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import EditForm from "./EditForm";

const Product = ({ _id, title, quantity, price }) => {
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products);

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await axios.delete(`/api/products/${_id}`);

    if (response.status !== 200) {
      console.log("Product not found.")
    } else {
      dispatch({ type: "DELETE_PRODUCT", payload: { id: _id } });
    }
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/add-to-cart', {productId: _id})

    if (response.status !== 200) {
      console.log("Could not update cart.")
    } else {
      const cartResponse = await axios.get('/api/cart')
      const allCartItems = cartResponse.data
      dispatch({type: "ADD_TO_CART", payload: allCartItems})

      const response = await axios.get("/api/products")
      const data = response.data
      dispatch({type: "PRODUCTS_RECEIVED", payload: {products: data} })
    }
  };

  return (
    <div class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">{`$${price}`}</p>
        <p class="quantity">{quantity} left in stock</p>
        {isEdit ? (
          <EditForm
            cancelEdit={() => setIsEdit(false)}
            title={title}
            price={price}
            quantity={quantity}
            id={_id}
          />
        ) : (
          <div class="actions product-actions">
            <a onClick={handleAddToCart} class="button add-to-cart">
              Add to Cart
            </a>
            <a onClick={() => setIsEdit(true)} class="button edit">
              Edit
            </a>
          </div>
        )}
        <a onClick={handleDelete} class="delete-button">
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
