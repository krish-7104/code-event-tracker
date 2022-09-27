import React from "react";
import "./style/Navbar.css";
import { FaLinkedin, FaGithubSquare, FaLink, FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="mainNavbar">
      <p className="navTitle">&#60;Code Contest Tracker/&#62;</p>
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
