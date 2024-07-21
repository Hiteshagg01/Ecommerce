import "../styles/pageStyles/Home.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import { fetchProducts } from "../redux/product/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { products, status, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="carousel breakout">
        <img src="https://picsum.photos/1600/400" alt="" />
      </div>
      <section id="home-screen">
        {status === "loading" && (
          <div style={{ marginBlock: "2rem" }}>
            <Spinner />
          </div>
        )}
        {status === "succeeded" && (
          <div className="products-list">
            {products.map((product, idx) => {
              return <ProductCard key={idx} product={product} />;
            })}
          </div>
        )}
        {status === "failed" && <p style={{marginBlock: "2rem", textAlign: 'center', color: 'red'}}>{error}</p>}
      </section>
    </>
  );
};

export default Home;
