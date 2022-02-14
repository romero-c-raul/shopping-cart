import { useContext, useState } from "react";
import EditForm from "./EditForm";
import { ProductContext, deleteProduct } from "../context/productContext";
import { CartContext, addToCart } from "../context/cartContext";

const Product = ({ _id, title, quantity, price, onUpdate, onAddToCart }) => {
  const { dispatch: productDispatch } = useContext(ProductContext);
  const { dispatch: cartDispatch } = useContext(CartContext);

  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteProduct(productDispatch, _id);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(cartDispatch, _id);
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
            onUpdate={onUpdate}
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
