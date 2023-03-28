import React from "react";
import Nav from "../components/Nav";
import logo from '../assets/img/Logo.svg';
import '../assets/css/header.css';

function Header() {
  return (
    <>
      <header>
        <div className="header__container">
          <img src={logo} />
          <Nav />
        </div>
        
      </header>
    </>
  );
}

export default Header;
