import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="mainNav">
        <div className="leftNavStyles">
          <a href="/projects" className="logo">
            EP
          </a>
        </div>
        <div className="rightNavStyles">
          <a href="#portfolio" className="navbutton">
            Portfolio
          </a>
          <a href="#contact" className="navbutton">
            Contact
          </a>
          <a href="#contact" className="navbutton">
            Find Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
