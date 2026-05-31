import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg border">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./images/logo.svg" style={{ width: "40%" }} alt="logo"></img>
          </Link>
          <button
            type="button"
            className="navbar-toggler hamBurgerMenu"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <i className="fa fa-bars fs-5" aria-hidden="true"></i>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/login">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/product">
                  Products
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li> 
              <li className="nav-item ">
               <Link className="nav-link" aria-current="page" to="/support">
                  Support
                </Link>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
