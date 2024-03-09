import {useState} from "react";

function Product({ product, addToCart }) {
  return (
    <div className="product" key={product.id}>
      <img className="product" src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button
        className="add-to-cart-button"
        onClick={() => addToCart(product)}>
        Add to Shopping Cart
      </button>
    </div>
  );
}

export default Product;
