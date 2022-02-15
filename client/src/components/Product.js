import {useState} from "react"
import EditForm from "./EditForm"

const Product = ({_id, title, quantity, price, onDelete, onUpdate, onAddToCart}) => {
  const [isEdit, setIsEdit] = useState(false)

  const handleDelete = (e) => {
    e.preventDefault()
    onDelete(_id)
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    // Need to call a function defined in App that performs a post request to add to cart route
    onAddToCart(_id)
  }

  return (
    <div class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">{`$${price}`}</p>
        <p class="quantity">{quantity} left in stock</p>
        {isEdit ? (
          <EditForm cancelEdit={() => setIsEdit(false)} title={title} price={price} quantity={quantity} id={_id} onUpdate={onUpdate}/>
        ) : (
          <div class="actions product-actions">
            <a onClick={handleAddToCart} class="button add-to-cart">Add to Cart</a>
            <a onClick={() => setIsEdit(true)} class="button edit">Edit</a>
          </div>
        )
        }
        <a onClick={handleDelete} class="delete-button"><span>X</span></a>
      </div>
    </div>
  )
}

export default Product