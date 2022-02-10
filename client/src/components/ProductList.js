import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/api/products");
      const data = response.data;
      dispatch({ type: "PRODUCTS_RECEIVED", payload: { products: data } });
    };
    getProducts();
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
