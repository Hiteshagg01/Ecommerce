import { removeCartItem, updateCartItem } from "../redux/cart/cartSlice.js";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    return (
    <div className="item">
      <Link to={`/products/${item.ProductId}`}>
        <img
          className="item-image"
          src={item.Product.imageUrl}
          alt={item.Product.name}
        />
      </Link>

      <div className="item-about">
        <Link to={`/products/${item.ProductId}`}>
          <h3>{item.Product.name}</h3>
          <div>
            <span>Quantity:</span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => {
                dispatch(updateCartItem({
                    ProductId: item.ProductId,
                    quantity: e.target.value,
                  }));
              }}
            />
          </div>
        </Link>
      </div>
      <div className="item-price">
        <p>₹{(item.Product.price * item.quantity).toFixed(2)}</p>
        <button
          className="item-remove-btn"
          type="button"
          onClick={() => dispatch(removeCartItem({ ProductId: item.ProductId }))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
