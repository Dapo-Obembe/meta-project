import React, { useState } from "react";
import "../assets/css/header.css";
import MenuIcon from "../assets/img/icon_hamburger.svg";
import CloseIcon from "../assets/img/closeIcon.svg";

function Nav() {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    {
      id: "0",
      name: "Home",
      url: "/",
    },
    {
      id: "1",
      name: "About",
      url: "/about",
    },
    {
      id: "2",
      name: "Menu",
      url: "/menu",
    },
    {
      id: "3",
      name: "Reservation",
      url: "/bookingpage",
    },
    {
      id: "4",
      name: "Order Online",
      url: "/order-online",
    },
    {
      id: "5",
      name: "Login",
      url: "/login",
    },
  ];

  const listItems = navItems.map((item) => (
    <li key={item} className="header__nav--item">
      <a href={item.url}>{item.name}</a>
    </li>
  ));
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav--lists">{listItems}</ul>
        <div>
          <img
            src={toggle ? CloseIcon : MenuIcon}
            alt="menu icon"
            className="header__menu--icon"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? "mobileNav" : "hidden"}`}>
            <ul className="header__nav--lists">{listItems}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
