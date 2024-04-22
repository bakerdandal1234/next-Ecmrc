'use client'
import "./Header.css";

import { useTheme } from "next-themes";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faMoon,
  faRightToBracket,
  faSun,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Header = () => {
  const { setTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can implement further logic here to switch the theme
  };
  const setThemeAndToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme); // Assuming setTheme is a function to set the theme
    toggleDarkMode();
};
  return (
    <header id="headerElement" className="flex">
      <div className="logo">
        <FontAwesomeIcon
          className="fa-solid fa-bag-shopping"
          style={{ width: "16px", marginRight: "6px" }}
          icon={faBagShopping}
        />

        <span style={{ fontWeight: "bold" }}>AWU</span>
        <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
      </div>
     
    

      <nav className="links">
        <Link
          style={{ position: "relative" }}
          className="cart"
          href="/card"
        >
          <FontAwesomeIcon
            className="fa-solid fa-cart-shopping"
            style={{ width: "13px" }}
            icon={faCartShopping}
          />
          $0.00
          <span className="products-number">2</span>
        </Link>
        <Link className="sign-in" href="/signin">
          <FontAwesomeIcon
            className="fa-solid fa-right-to-bracket"
            style={{ width: "10px" }}
            icon={faRightToBracket}
          />
          Sign in
        </Link>
        <Link className="register" href="/register">
          <FontAwesomeIcon
            className="fa-solid fa-user-plus"
            style={{ width: "13px" }}
            icon={faUserPlus}
          />
          Register
        </Link>

           

      </nav>
    </header>
  );
};

export default Header;
