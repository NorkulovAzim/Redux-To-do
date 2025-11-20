import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/productSlice";

const Header = () => {
  const cartCount = useSelector(selectCartCount);

  const navLinkStyle = {
    padding: "10px 15px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    position: "relative",
  };

  const activeLinkStyle = {
    backgroundColor: "#1A3D64",
    color: "white",
    borderRadius: "20px",
  };

  return (
    <header
      style={{
        backgroundColor: "#f8f9fa",
        padding: "1rem 0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <nav
        className="container"
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...navLinkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Todo App
        </NavLink>
        <NavLink
          to="/product"
          style={({ isActive }) => ({
            ...navLinkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            ...navLinkStyle,
            ...(isActive ? activeLinkStyle : {}),
          })}
        >
          Cart
          {cartCount > 0 && (
            <span
              style={{
                backgroundColor: "#f44336",
                color: "white",
                borderRadius: "50%",
                padding: "2px 8px",
                fontSize: "12px",
                position: "absolute",
                top: "-5px",
                right: "-5px",
              }}
            >
              {cartCount}
            </span>
          )}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
