import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/thank-you");
  };

  return (
    <div className="shippingForm">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input type="text" id="postalCode" name="postalCode" />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" />
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}
