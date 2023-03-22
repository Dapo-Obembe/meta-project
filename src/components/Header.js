import React from "react";
import Nav from "./components/Nav";

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
