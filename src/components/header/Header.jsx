import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import headerstyle from "./header.module.scss";
import { useLocation } from "react-router";

import UserPP from "../../assets/img/navbarAvatar.png";

function Header() {
  const location = useLocation();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [offsetY]);
  const token = localStorage.getItem("token");
  return (
    <>
      <nav
        className={headerstyle.navbar}
        style={
          location.pathname === "/" && offsetY < 200
            ? { backgroundColor: "transparent" }
            : { backgroundColor: "#214457" }
        }
      >
        <Link to="/">
          <img src={Logo} alt="Logo" className={headerstyle.logo} />
        </Link>
        <div
          className={`${headerstyle.navSearchContainer} ${`
            ${
              location.pathname === "/" ||
              location.pathname === "/auth/register" ||
              location.pathname === "/auth/login"
                ? headerstyle.navSearchContainernotShow
                : headerstyle.navSearchContainershow
            }`}`}
        >
          <div className={headerstyle.navSearch}>
            <BsSearch className={headerstyle.navSearchIcon} />
            <input
              type="text"
              placeholder="Search events"
              className={headerstyle.navSearchInput}
            />
          </div>
        </div>
        {!token ? (
          <ul className={headerstyle.navContainer}>
            <li>
              <Link to="/auth/register" className={headerstyle.link}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/auth/login" className={headerstyle.link}>
                Sign In
              </Link>
            </li>
          </ul>
        ) : (
          <div className={headerstyle.user}>
            <div className={headerstyle.userPP}>
              <img src={UserPP} alt="Your Profile Pic" />
            </div>
            <Link to="/account">My Account</Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
