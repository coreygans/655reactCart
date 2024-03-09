import React from "react";
import {Link} from "react-router-dom"; 
import SearchProducts from "./SearchProducts";

function SiteHeader() {
  return (
    <header>
       <h1>The Food Store</h1>
      <div className="header-links">
        {/* <Link to="/" className="header-link">
          Home
        </Link> */}
        <SearchProducts />
        {/* <Link to="/cart" className="header-link">
          Cart
        </Link> */}
      </div></header>
  );
}

export default SiteHeader;
