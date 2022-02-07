import React from "react";
import {useState, useEffect} from "react"
import Header from "./Header"
import ProductList from "./ProductList"
import FooterForm from "./FooterForm"
import data from "../lib/data"


const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <div id="app">
      <Header />
      <main>
       <ProductList products={products}/>
       <FooterForm />
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