import React from "react";
import "./style/Navbar.css";
import { FaLinkedin, FaGithubSquare, FaLink, FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="mainNavbar">
      <a className="navTitle" href="/">
        &#60;Code Event Tracker/&#62;
      </a>
      <div className="navSocialLogos">
        <a
          href="https://krishjotaniya.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <span className="logo">
            <FaLinkedin />
          </span>
        </a>
        <a
          href="https://krishjotaniya.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <span className="logo">
            <FaGithubSquare />
          </span>
        </a>
        <a
          href="https://krishjotaniya.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <span className="logo">
            <FaLink />
          </span>
        </a>
        <a
          href="https://krishjotaniya.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <span className="logo">
            <FaTwitter />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
