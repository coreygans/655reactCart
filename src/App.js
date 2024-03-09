import React from "react";
import './App.css';
import ProductList from "./components/ProductList";

function App() {
  const products = [
    { id: 1, name: "Cherries", details: "The best cherries around. Fresh picked and ready for you to eat.", price: 3.45, image: "/images/cherries.jpg" },
    { id: 2, name: "Coffee", details: "Roasted coffee beans from Columbia.", price: 4.89, image: "/images/coffee.jpg" },
    { id: 3, name: "Corn", details: "Sweet corn fresh from the farm.", price: 1.25, image: "/images/corn.jpg" },
    { id: 4, name: "Olive Oil", details: "Olive Oil imported from Italy.", price: 5.29, image: "/images/olive-oil.jpg" },
    { id: 5, name: "Raspberries", details: "Sweet and Tart raspeberries.", price: 4.25, image: "/images/raspberries.jpg" },
    { id: 6, name: "Strawberries", details: "Juicy strawberries for a summer treat.", price: 3.79, image: "/images/strawberries.jpg" },
  ];

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
  };

  return (
    <div className="app">

      <h1>The Food Store</h1>
      <header> <div>Home </div></header>
      <div className="product-list">
      <ProductList products={products} addToCart={addToCart} />
      </div>
    </div>
  );
}


export default App;
