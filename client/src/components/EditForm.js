/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productUpdated } from "../actions/productActions";

const EditForm = ({ cancelEdit, title, price, quantity, id, onUpdate }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleUpdate = async (e) => {
    e.preventDefault();

    dispatch(
      productUpdated(
        id,
        { title: newTitle, price: newPrice, quantity: newQuantity },
        products
      )
    );

    cancelEdit();
  };

  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
        </div>

        <div class="actions form-actions">
          <a onClick={handleUpdate} class="button">
            Update
          </a>
          <a onClick={cancelEdit} class="button">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
