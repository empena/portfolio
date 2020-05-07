import React from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="mainNav">
        <div className="leftNavStyles">
          <a href="/" className="logo">
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
