import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productsReceived } from "../actions/productActions";

import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsReceived());
  }, [dispatch]);

  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product key={product._id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
