import React from "react";
import './App.css';
import ProductList from "./components/ProductList";

function App() {
  const products = [
    { id: 1, name: "Cherries", price: 3.45, image: "/images/cherries.jpg" },
    { id: 2, name: "Coffee", price: 4.89, image: "/images/coffee.jpg" },
    { id: 1, name: "Corn", price: 1.25, image: "/images/corn.jpg" },
    { id: 2, name: "Olive Oil", price: 5.29, image: "/images/olive-oil.jpg" },
    { id: 1, name: "Raspberries", price: 4.25, image: "/images/raspberries.jpg" },
    { id: 2, name: "Strawberries", price: 3.79, image: "/images/strawberries.jpg" },
  ];

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
  };

  return (
    <div className="app">
      
      <h1>The Food Store</h1>
      <div className="product-list">
      <ProductList products={products} addToCart={addToCart} />
      </div>
    </div>
  );
}


export default App;
