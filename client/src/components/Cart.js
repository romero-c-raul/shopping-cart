import CartItem from "./CartItem"

const Cart = ({ cartContents, onCheckout }) => {
  const cartTotal = () => {
    let sum = 0

    cartContents.forEach(content => {
      sum += (content.price * content.quantity)
    })

    return sum
  }

  const handleCheckout = (e) => {
    e.preventDefault()
    onCheckout()
  }

  return ( 
    <div class="cart">
      <h2>Your Cart</h2>
      {(cartContents.length === 0) ?
      (<>
      <p>Your cart is empty</p>
      <p>Total: $0</p>
      <a class="button checkout disabled">Checkout</a>
      </>) : 
      (<>
      <table class="cart-items">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cartContents.map(content => {
          return <CartItem {...content}/>
        })}
      <tr>
        <td colspan="3" class="total">Total: ${cartTotal().toFixed(2)}</td>
      </tr>
      </table>
      <a onClick={handleCheckout} class="button checkout">Checkout</a>
      </>)
    }
    </div>
  )
}


export default Cart