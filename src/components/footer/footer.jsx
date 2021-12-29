import React from "react";

import leftBottom from "../../assets/leaf_amarachi6.png";
import rightBottom from "../../assets/leaf_amarachi5.png";

import "./footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="stocklist-container">
          <h3 className="stocklist-title">Stocklist</h3>
          <div className="stock-container">
            <div className="stock">
              <p className="title">Chives</p>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="stock">
              <p className="title">Tarragon</p>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="stock">
              <p className="title">Oregamo</p>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="stock">
              <p className="title">Rosemary</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="footer-links__container">
          <div className="footer-links">
            <p className="link">Privacy Policy</p>
            <p className="link">Terms and Conditions</p>
            <p className="link">
              Email: <span>amarachi@email.com</span>
            </p>
            <p className="link">
              Phone Number: <span>+254712345678</span>
            </p>
          </div>
        </div>
        <div className="footer-bg__left">
          <img src={leftBottom} alt="background" />
        </div>
        <div className="footer-bg__right">
          <img src={rightBottom} alt="background" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
