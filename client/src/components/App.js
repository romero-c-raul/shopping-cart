import React from "react";
import {useState, useEffect} from "react"
import axios from "axios"
import Header from "./Header"
import ProductList from "./ProductList"
import FooterForm from "./FooterForm"
// import data from "../lib/data"

const App = () => {
  // const [products, setProducts] = useState([])
  // const [cartContents, setCartContents] = useState([])

  // useEffect(() => {
  //   // const getProducts = async () => {
  //   //   const response = await axios.get("/api/products")
  //   //   const data = response.data
  //   //   setProducts(data)
  //   // }
  //   const getCart = async () => {
  //     const cartResponse = await axios.get('/api/cart')
  //     const allCartItems = cartResponse.data
  //     setCartContents(allCartItems)  
  //   }

  //   // getProducts()
  //   getCart()
  // }, [])

  // const handleSubmit = async (newProduct, callback) => {
  //   const response = await axios.post("/api/products", {...newProduct})
  //   const data = response.data
  //   setProducts(products.concat(data))
  //   if (callback) {
  //     callback()
  //   }
  // }

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

  //     // const response = await axios.get("/api/products")
  //     // const data = response.data
  //     // setProducts(data)      
  //   }
  // }

  // const handleCheckout = async () => {
  //   const response = await axios.post('/api/checkout')
  //   setCartContents(response.data)
    
  //   if (response !== 200) {
  //     console.log("Could not checkout cart")
  //   } else {
  //   }
  // }

  return (
    <div id="app">
      {/* <Header onCheckout={handleCheckout} /> */}
      <Header />

      <main>
        {/* <ProductList onUpdate={handleUpdate} onAddToCart={handleAddToCart}/>
       <FooterForm onSubmit={handleSubmit}/> */}
        <ProductList />
        <FooterForm />
      </main>
    </div>
  );
};

export default App;

  // Page Header
    // Cart Info
  // Product List
    // Product(s)
  // Footer Form