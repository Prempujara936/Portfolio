import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src="https://danamojo.org/dm/backend/web/uploads/ckeditor/images/hpf.jpg" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
