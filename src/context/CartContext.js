import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    // Check if the item already exists in the cart and increment qty
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      //If the product doesn't exist then add it to the cart
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
    console.log("Adding to cart:", product);
  };
  const removeFromCart = (itemId) => {
    //Remove the product from the cart
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};



export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
