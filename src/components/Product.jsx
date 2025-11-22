import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectProducts, selectCart } from "../store/productSlice";

import LisSkin from "../assets/lis-skins.png";
import { NavLink } from "react-router-dom";

const Product = () => {
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (profile.isLoggedIn) {
      dispatch(addToCart(product));
    } else {
      alert("Please log in first");
    }
  };

  return (
    <div className="product-page">
      <h1 className="product-header">
        LIS-SKINS <img src={LisSkin} alt="" className="logo" />
      </h1>

      <p className="product-title-1">BUY CS2 SKINS HERE!</p>

      {!profile.isLoggedIn && (
        <div className="login-first">
          <i className="fa-solid fa-arrow-right"></i>
          Please, <NavLink to="/profile">Login</NavLink> to buy skins.
        </div>
      )}

      <div className="cart-items">
        <strong>Selected skins: ({cart.length})</strong>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>

            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <p>
              <strong>${product.price}</strong>
            </p>

            <button
              className="add-btn"
              onClick={() => handleAddToCart(product)}
              disabled={!profile.isLoggedIn}
              style={
                !profile.isLoggedIn
                  ? { opacity: 0.5, cursor: "not-allowed" }
                  : {}
              }
            >
              {!profile.isLoggedIn ? "Log in to Buy" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
