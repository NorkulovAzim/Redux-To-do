import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCartCount } from "../store/productSlice";
import { logout } from "../store/profileSlice";

const Header = () => {
  const cartCount = useSelector(selectCartCount);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    alert("Logged out successfully!");
  };

  return (
    <header className="app-header">
      <nav className="header-nav container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          Todo App
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          Cart
          {cartCount > 0 && (
            <span className="cart-count-badge">{cartCount}</span>
          )}
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
        >
          {profile.isLoggedIn ? `Hi, ${profile.username}` : "Login"}
        </NavLink>
        {profile.isLoggedIn && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
