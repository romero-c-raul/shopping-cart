/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from "react"
import { useDispatch } from "react-redux";
import axios from "axios";
import EditForm from "./EditForm"

const Product = ({_id, title, quantity, price}) => {
  const [isEdit, setIsEdit] = useState(false)

  // const handleDelete = async (id) => {
  //   const response = await axios.delete(`/api/products/${id}`)
  //   if (response.status !== 200) {
  //     console.log("Product not found.")
  //   } else {
  //     setProducts(products.filter(product => product._id !== id))
  //   }
  // }

  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products);

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await axios.delete(`/api/products/${_id}`)
    const data = response.data
    dispatch( { type: "DELETE_PRODUCT", payload: { product: data._id }})
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    // Need to call a function defined in App that performs a post request to add to cart route
    // onAddToCart(_id)
  }

  return (
    <div class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">{`$${price}`}</p>
        <p class="quantity">{quantity} left in stock</p>
        {isEdit ? (
          <EditForm cancelEdit={() => setIsEdit(false)} title={title} price={price} quantity={quantity} id={_id} />
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