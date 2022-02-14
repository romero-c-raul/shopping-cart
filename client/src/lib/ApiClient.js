import axios from "axios";

const apiClient = {
  getProducts: async () => {
    try {
      const response = await axios.get("/api/products");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      const response = await axios.delete(`/api/products/${id}`);

      if (response.status !== 200) {
        console.log("Product not found.");
      } else {
        return id;
      }
    } catch (error) {
      console.log(error);
    }
  },
  editProduct: async (id, newProduct, products) => {
    const response = await axios.put(`/api/products/${id}`, newProduct);
    const updatedProduct = response.data;

    if (response.status !== 200) {
      console.log("Product not found.");
    } else {
      const recentProducts = products.map((product) => {
        if (product._id !== id) {
          return product;
        } else {
          return updatedProduct;
        }
      });
      return recentProducts;
    }
  },
  addProduct: async (newProduct) => {
    const response = await axios.post("/api/products", { ...newProduct });
    if (response.status !== 200) {
      console.log("Could not add product");
    } else {
      return response.data;
    }
  },
  addToCart: async (id) => {
    const response = await axios.post("/api/add-to-cart", { productId: id });

    if (response.status !== 200) {
      console.log("Could not update cart.");
    } else {
      const cartResponse = await axios.get("/api/cart");
      const allCartItems = cartResponse.data;
      return allCartItems;
    }
  },
  getCartContents: async () => {
    const response = await axios.get("/api/cart");
    const data = response.data;
    return data;
  },
  checkout: async () => {
    const response = await axios.post("/api/checkout");

    if (response.status !== 200) {
      console.log("Could not checkout cart");
    }
  },
};

export default apiClient;
