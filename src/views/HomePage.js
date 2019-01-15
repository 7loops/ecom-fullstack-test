import React from "react";
import "../stylesheets/base.scss";
import ProductList from "./components/ProductList";

const HomePage = () => {
  return (
    <main className="products">
      <ProductList />
    </main>
  );
};

export default HomePage;
