
function Product({ product, addToCart }) {
  // Individual product entry that shows the name, description, price, and an Add to Cart option
  return (
    <div className="product" key={product.id}>
      <img className="productImg" src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p><b>Description:</b> {product.details}
        <br/> <b>Price:</b> ${product.price}</p>
      <button
        className="add-to-cart-button"
        onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
