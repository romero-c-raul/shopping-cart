import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import FooterForm from "./FooterForm";

const App = () => {

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
  );
};

export default App;
