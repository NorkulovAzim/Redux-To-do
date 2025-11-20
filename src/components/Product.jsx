import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectProducts, selectCart } from "../store/productSlice";

import LisSkin from "../assets/lis-skins.png";

const Product = () => {
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-page">
      <h1 className="product-header">
        LIS-SKINS <img src={LisSkin} alt="" className="logo" />
      </h1>

      <p className="product-title-1">BUY CS2 SKINS HERE!</p>

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
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
