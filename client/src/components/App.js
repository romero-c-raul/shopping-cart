import React from "react";
import Header from "./Header"
import ProductList from "./ProductList"
import FooterForm from "./FooterForm"

const App = () => {
  // const handleDelete = async (id) => {
  //   const response = await axios.delete(`/api/products/${id}`)
  //   if (response.status !== 200) {
  //     console.log("Product not found.")
  //   } else {
  //     setProducts(products.filter(product => product._id !== id))
  //   }
  // }

  // const handleUpdate = async(id, newProduct) => {
  //   const response = await axios.put(`/api/products/${id}`, {...newProduct})
  //   const updatedProduct = response.data

  //   if (response.status !== 200) {
  //     console.log("Product not found.")
  //   } else {
  //     const recentProducts = products.map(product => {
  //       if (product._id !== id) {
  //         return product
  //       } else {
  //         return updatedProduct
  //       }
  //     })
  //     setProducts(recentProducts)
  //   }
  // }

  // const handleAddToCart = async(id) => {
  //   const response = await axios.post('/api/add-to-cart', {productId: id})
  //   // const allProducts = response

  //   if (response.status !== 200) {
  //     console.log("Could not update cart.")
  //   } else {
  //     const cartResponse = await axios.get('/api/cart')
  //     const allCartItems = cartResponse.data
  //     setCartContents(allCartItems)

  //     const response = await axios.get("/api/products")
  //     const data = response.data
  //     setProducts(data)      
  //   }
  // }

  // const handleCheckout = async () => {
  //   const response = await axios.post('/api/checkout')
  //   setCartContents(response.data)
    
    // if (response !== 200) {
    //   console.log("Could not checkout cart")
    // } else {
    // }
  // }

  return (
    <div id="app">
      <Header />
      <main>
        <ProductList />
       {/* <ProductList onDelete={handleDelete} onUpdate={handleUpdate} onAddToCart={handleAddToCart}/> */}
       <FooterForm />
      </main>
    </div>
  )
};

export default App;
