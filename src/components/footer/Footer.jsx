import React from "react";
import LogoFooter from "../../assets/img/logofooter.svg";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import footerstyle from "./footer.module.scss";

function Footer() {
  return (
    <footer className={footerstyle.footer}>
      <div className="footerCol1">
        <img src={LogoFooter} alt="logo" />
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
      <div className="footerCol2">
        <p className={footerstyle.head}>Links</p>
        <ul className={footerstyle.menu}>
          <li>Home</li>
          <li>Explore</li>
          <li>My Events</li>
          <li>Bookmarks</li>
        </ul>
      </div>
      <div className="footerCol3">
        <p className={footerstyle.head}>Top Categories</p>
        <ul className={footerstyle.menu}>
          <li>Design</li>
          <li>Photography</li>
          <li>Development</li>
          <li>Marketing</li>
        </ul>
      </div>
      <div className="footerCol4">
        <p className={footerstyle.head}>Contact Us</p>
        <p className={footerstyle.textInfo}>
          Indonesia Jl. Planet Namek No. 123, Surabaya Telp : 083849420146 Email
          : Johndoe@seeevent.com
        </p>
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
