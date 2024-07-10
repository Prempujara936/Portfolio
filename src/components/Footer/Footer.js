import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCMcxIYvKTav1IUEP9VKh6mLk_GCzLME6KIQ&s"
          alt="logo"
        />
      </div>
      {/* Copyright */}
      <div className="footer-copyright">
        <p>© 2024 Hariprabodham Academy. All Rights Reserved</p>
      </div>
      {/* Social media links */}
      <ul className="footer-social-media">
        <li>
          <a href="https://www.youtube.com/@iHariPrabodham">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@iHariPrabodham">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@iHariPrabodham">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@iHariPrabodham">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@iHariPrabodham">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
