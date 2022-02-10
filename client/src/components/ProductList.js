import Product from "./Product"

const ProductList = ({products, onDelete, onUpdate, onAddToCart}) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
         return <Product key={product._id} {...product} onDelete={onDelete} onUpdate={onUpdate} onAddToCart={onAddToCart}/>
      })}
    </div>
  )
}

export default ProductList