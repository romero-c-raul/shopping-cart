import { useContext, useEffect } from "react";
import { ProductContext, getProducts } from "../context/productContext";
import Product from "./Product";

const ProductList = () => {
  const { products, dispatch } = useContext(ProductContext);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            {...product}
            
            // onAddToCart={onAddToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
