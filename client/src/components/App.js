import React from "react";
import {useState, useEffect} from "react"
import axios from "axios"
import Header from "./Header"
import ProductList from "./ProductList"
import FooterForm from "./FooterForm"
// import data from "../lib/data"

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/api/products")
      const data = response.data
      setProducts(data)
    }
    getProducts()
  }, [])

  const handleSubmit = async (newProduct, callback) => {
    const response = await axios.post("/api/products", {...newProduct})
    const data = response.data
    setProducts(products.concat(data))
    if (callback) {
      callback()
    }
  }

  const handleDelete = async (id) => {
    const response = await axios.delete(`/api/products/${id}`)
    if (response.status !== 200) {
      console.log("Product not found.")
    } else {
      setProducts(products.filter(product => product._id !== id))
    }
  }

  return (
    <div id="app">
      <Header />
      <main>
       <ProductList products={products} onDelete={handleDelete}/>
       <FooterForm onSubmit={handleSubmit}/>
      </main>
    </div>
  )
};

export default App;

  // Page Header
    // Cart Info
  // Product List
    // Product(s)
  // Footer Form