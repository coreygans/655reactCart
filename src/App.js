import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import About from "./pages/About";
import { CartProvider } from './context/CartContext';
import ThankYou from "./pages/ThankYou";

function App() {
  return (

    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
