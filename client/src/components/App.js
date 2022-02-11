import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import FooterForm from "./FooterForm";

const App = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <ProductList />
        <FooterForm />
      </main>
    </div>
  );
};

export default App;
