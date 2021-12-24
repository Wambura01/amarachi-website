import React from "react";

import "./right-nav.scss";

const RightNav = () => {
  return (
    <div className="right-nav">
      <ul className="links-container">
        <li className="link">Home</li>
        <li className="link">Story</li>
        <li className="link">Products</li>
        <li className="link">Cart</li>
        <li className="link">Contacts</li>
      </ul>
    </div>
  );
};

export default RightNav;
