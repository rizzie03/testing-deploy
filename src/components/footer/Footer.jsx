import React from "react";
import LogoFooter from "../../assets/img/logofooter.svg";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import footerstyle from "./footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={footerstyle.footer}>
      <div className={footerstyle.footerCol1}>
        <Link to="/">
          <img src={LogoFooter} alt="logo" className={footerstyle.footerLogo} />
        </Link>
        <p className={footerstyle.textInfo}>
          SeeEvent is a platform where you can create or find an amazing events
          around the world.
        </p>
        <p className={footerstyle.head} id={footerstyle.follow}>
          Follow Us on
        </p>
        <div className={footerstyle.iconsContainer}>
          <div className={footerstyle.iconContainer}>
            <ImFacebook className={footerstyle.icon} />
          </div>
          <div className={footerstyle.iconContainer}>
            <BsInstagram className={footerstyle.icon} />
          </div>
          <div className={footerstyle.iconContainer}>
            <ImTwitter className={footerstyle.icon} />
          </div>
          <div className={footerstyle.iconContainer}>
            <ImYoutube className={footerstyle.icon} />
          </div>
        </div>
        <p className={footerstyle.copyright}>
          &copy; 2021 SeeEvent All rights reserved.
        </p>
      </div>
      <div className={footerstyle.footerCol2}>
        <p className={footerstyle.head}>Links</p>
        <ul className={footerstyle.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Explore</Link>
          </li>
          <li>
            <Link to="*">My Events</Link>
          </li>
          <li>
            <Link to="*">Bookmarks</Link>
          </li>
        </ul>
      </div>
      <div className={footerstyle.footerCol3}>
        <p className={footerstyle.head}>Top Categories</p>
        <ul className={footerstyle.menu}>
          <li>
            <Link to="">Design</Link>
          </li>
          <li>
            <Link to="">Photography</Link>
          </li>
          <li>
            <Link to="">Development</Link>
          </li>
          <li>
            <Link to="">Marketing</Link>
          </li>
        </ul>
      </div>
      <div className={footerstyle.footerCol4}>
        <div>
          <p className={footerstyle.head}>Contact Us</p>
          <p className={footerstyle.menu}>
            Indonesia <br />
            Jl. Planet Namek No. 123, Surabaya <br />
            Telp : 083849420146 <br />
            Email : Johndoe@seeevent.com
          </p>
        </div>
        <ul className={footerstyle.menu}>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Helps</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
