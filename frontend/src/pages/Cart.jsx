import "../styles/pageStyles/Cart.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Spinner from "../components/Spinner";
import { fetchCartItems, resetStatus } from "../redux/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const { items, status, error } = useSelector((state) => state.cart);

  const total = items.reduce(
    (sum, item) => sum + item.Product.price * item.quantity,
    0
  );
  const tax = total * 0.18;
  const subtotal = total * 0.82;

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      dispatch(resetStatus());
    }
  }, [status]);

  return (
    <section id="cart">
      <div className="cart-items-wrapper">
        <h1>Your Cart</h1>
        <div className="items-wrapper">
          {status === "failed" && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
          {status === "loading" ? (
            <Spinner />
          ) : (
            items.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>
      </div>
      <div className="cart-summary-wrapper">
        <h2>Order Summary</h2>

        <div className="summary">
          <div className="summary-subtotal">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-tax">
            <span>Tax (18%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        <div className="summary-operations">
          <Link to="/">Continue Shopping</Link>
          <Link to="#">Proceed to Checkout</Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
