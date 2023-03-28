import React from "react";
import '../assets/css/header.css';


function Nav() {
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav--lists">
          <li className="header__nav--item">Home</li>
          <li className="header__nav--item">About</li>
          <li className="header__nav--item">Menu</li>
          <li className="header__nav--item">Reservations</li>
          <li className="header__nav--item">Order Online</li>
          <li className="header__nav--item loginBtn">Login</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
