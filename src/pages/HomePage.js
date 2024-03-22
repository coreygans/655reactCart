import { React, useState } from "react";

import ProductList from "../components/ProductList";
import SiteHeader from "../components/Header";
import Cart from "../components/Cart";
import SearchProducts from "../components/SearchProducts";
import { useCart } from '../context/CartContext';


export default function HomePage() {
  // Products to load
  const { cartItems, addToCart, removeFromCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Cherries",
      details:
        "The best cherries around. Fresh picked and ready for you to eat.",
      price: 3.45,
      image: "/images/cherries.jpg",
    },
    {
      id: 2,
      name: "Coffee",
      details: "Roasted coffee beans from Columbia.",
      price: 4.89,
      image: "/images/coffee.jpg",
    },
    {
      id: 3,
      name: "Corn",
      details: "Sweet corn fresh from the farm.",
      price: 1.25,
      image: "/images/corn.jpg",
    },
    {
      id: 4,
      name: "Olive Oil",
      details: "Olive Oil imported from Italy.",
      price: 5.29,
      image: "/images/olive-oil.jpg",
    },
    {
      id: 5,
      name: "Raspberries",
      details: "Sweet and Tart raspeberries.",
      price: 4.25,
      image: "/images/raspberries.jpg",
    },
    {
      id: 6,
      name: "Strawberries",
      details: "Juicy strawberries for a summer treat.",
      price: 3.79,
      image: "/images/strawberries.jpg",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    //Set the search term for filtering the products
    setSearchTerm(value);
  };
  const filteredProducts = products.filter((product) =>
    //Make lower case for search string to make sure it filters properly
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="app">
      <SiteHeader />

      <SearchProducts onSearch={handleSearch} />

      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}
