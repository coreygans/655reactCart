import React from "react";
import { Link } from "react-router-dom";

function SiteHeader() {
  return (
    <header>
      <h1>The Food Store</h1>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/" className="header-link">
              Home
            </Link>
          </li>
  
          <li>
            <Link to="/about" className="header-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="header-link">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default SiteHeader;
