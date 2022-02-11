/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useDispatch } from "react-redux";
import EditForm from "./EditForm";
import { productsReceived, productRemoved } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

const Product = ({ _id, title, quantity, price }) => {
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(productRemoved(_id));
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    dispatch(addToCart(_id));
    dispatch(productsReceived());
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
