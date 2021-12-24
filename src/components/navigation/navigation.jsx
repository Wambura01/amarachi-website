import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <p className="logo">AMARACHI</p>
      </div>
      <div className="nav-right">
        <div className="cart">
          <ShoppingCartIcon className="nav-icon" />
          <p className="cart-text">Cart</p>
        </div>
        <div className="translate">
          <p className="language">Translate</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
