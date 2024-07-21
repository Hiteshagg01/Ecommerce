import "../styles/pageStyles/Product.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Spinner from "../components/Spinner";
import { addCartItem, resetStatus } from "../redux/cart/cartSlice";
import { fetchProductById } from "../redux/product/productSlice";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { error, status, currentProduct } = useSelector(
    (state) => state.product
  );
  const { status: cartState } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (cartState === "succeeded" || cartState === "failed") {
      const timer = setTimeout(() => {
        dispatch(resetStatus());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [cartState]);

  function addToCartHandler() {
    dispatch(addCartItem(currentProduct));
  }

  return (
    <section id="product" className="full content-grid">
      <div className="breakout">
        {status === "failed" && <p>{error}</p>}
        {status === "succeeded" && (
          <>
            <p>
              ‹ <Link to="/">Back</Link>
            </p>
            <br />

            <div className="product-content">
              <div className="product-image">
                <img src={currentProduct.imageUrl} alt={currentProduct.name} />
              </div>
              <div className="product-detail">
                <p className="detail-name">{currentProduct.name}</p>
                <p className="detail-rating">
                  {currentProduct.rating} ⭐{" "}
                  <span>({currentProduct.numReviews} ratings)</span>
                </p>
                <hr />
                <p className="detail-price">
                  ₹<span>{currentProduct.price}</span>
                </p>
                <hr />
                <p className="detail-desc">
                  <strong>About this item :</strong> <br />
                  {currentProduct.description}
                </p>
              </div>
              <div className="product-operations">
                {currentProduct.countInStock === 0 ? (
                  <p style={{ color: "red" }}>Out of Stock</p>
                ) : (
                  <>
                    <p style={{ color: "green" }}>In Stock</p>

                    <button
                      type="button"
                      className="add-to-cart-btn"
                      disabled={cartState === "loading"}
                      onClick={addToCartHandler}
                    >
                      {cartState === "loading" && <Spinner />}
                      {cartState === "succeeded" && "✔ Added"}
                      {cartState === "idle" && "Add to cart"}
                      {cartState === "failed" && "❌ Try Again"}
                    </button>
                    <button type="button" className="buy-now-btn">
                      Buy now
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Product;
