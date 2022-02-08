import Product from "./Product"

const ProductList = ({products, onDelete}) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
         return <Product key={product._id} {...product} onDelete={onDelete}/>
      })}
    </div>
  )
}

export default ProductList