import SiteHeader from "../components/Header";
import Checkout from "../components/Checkout";
import Cart from "../components/Cart";
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';


export default function CheckoutPage(){
    const { cartItems } = useCart();

    return (
        <div className="checkoutPage">
            <SiteHeader />
            <div className="checkout-container">
            <Checkout />

           <Cart cartItems={cartItems} />
           </div>
        </div>
    )


}