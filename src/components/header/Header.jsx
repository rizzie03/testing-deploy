import React from "react";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

import headerstyle from "./header.module.scss";

function Header() {
  return (
    <>
      <nav className={headerstyle.navbar}>
        <img src={Logo} alt="Logo" className={headerstyle.logo} />
        <ul className={headerstyle.navContainer}>
          <li>
            <Link to="/signup" className={headerstyle.link}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/signin" className={headerstyle.link}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
