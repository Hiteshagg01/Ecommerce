import "../styles/componentStyles/ProductCard.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, resetStatus } from "../redux/cart/cartSlice.js";
import { useEffect } from "react";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.cart);

  useEffect(() => {
    if (status === "succeeded") {
      dispatch(resetStatus());
      navigate("/cart");
    }
  }, [status]);

  function addToCartHandler() {
    dispatch(addCartItem(product));
  }

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <Link to={`/products/${product.id}`}>
        <div className="product-card-info">
          <p>{product.name}</p>
          <p>
            ⭐{product.rating} <span>{product.numReviews}</span>
          </p>
          <p>
            ₹ <span>{product.price}</span>
          </p>
        </div>
      </Link>
      <div className="product-card-operations">
        <button
          type="button"
          onClick={addToCartHandler}
          disabled={status === "loading"}
        >
          Add to cart
        </button>
        <button type="button">Buy now</button>
      </div>
    </div>
  );
};

export default ProductCard;
