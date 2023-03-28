import React from "react";
import Nav from "../components/Nav";
import logo from '../assets/img/Logo.svg';

function Header() {
  return (
    <>
      <header>
        <img src={logo} />
        <Nav />
      </header>
    </>
  );
}

export default Header;
