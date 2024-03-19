// import { useState } from "react";
import Product from "./Product";

function ProductList({ products, addToCart }) {

  //Check if there are products and if yes, then pass the props to the Product component
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  );
}

export default ProductList;
