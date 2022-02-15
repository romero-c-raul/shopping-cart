import Cart from "./Cart"

const Header = ({ cartContents, onCheckout }) => {
  return (  
    <header>
      <h1>The Shop!</h1>
      <Cart cartContents={cartContents} onCheckout={onCheckout}/>
    </header>
  )
}

export default Header