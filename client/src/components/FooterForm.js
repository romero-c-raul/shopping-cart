import { useState } from "react"

const FooterForm = ({onSubmit}) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")

  const displayForm = (event) => {
    event.preventDefault()
    const buttonParent = event.target.parentElement.parentElement
    buttonParent.classList.add("visible")
  }

  const hideForm = (event) => {
    event.preventDefault()
    const buttonParent = event.target.closest("div.add-form")
    buttonParent.classList.remove("visible")
    resetInputs()
  }

  const resetInputs = () => {
    setTitle("")
    setPrice("")
    setQuantity("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({title, price, quantity}, hideForm(e))
  }

  return (
    <div class="add-form">
      <p><a onClick={displayForm} class="button add-product-button">Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>

        <div class="actions form-actions">
          <a onClick={handleSubmit} class="button">Add</a>
          <a onClick={hideForm} class="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default FooterForm