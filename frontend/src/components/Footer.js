import React from "react";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css"; // Ensure correct import of CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>2025 All Rights Reserved</p>
      <div className="footer-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube">
          <FaYoutube />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
