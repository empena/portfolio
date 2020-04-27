import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div style={styles.mainNav}>
        <div style={styles.leftNavStyles}>
          <Link to="/">
            <h1 style={styles.logo}>EP</h1>
          </Link>
        </div>
        <div style={styles.rightNavStyles}>
          <div className="main" id="portfolio">
            <a href="#portfolio" style={styles.button}>
              Portfolio
            </a>
          </div>
          <div className="main" id="contact">
            <a href="#contact" style={styles.button}>
              Contact
            </a>
          </div>
          <div className="main" id="findme">
            <a href="#findme" style={styles.button}>
              Find Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const styles = {
  mainNav: {
    display: "flex",
    height: "3em",
    width: "100%",
    top: "0",
    backgroundColor: "#232323",
    position: "fixed",
    boxShadow: "0 2px 2px 0 rgba(0,0,0,0.24)",
  },
  rightNavStyles: {
    display: "flex",
    justifyContent: "flex-end",
    width: "70%",
    padding: ".8em .5em",
  },
  leftNavStyles: {
    display: "flex",
    justifyContent: "space-between",
    width: "30%",
    padding: ".5em .5em",
  },
  logo: {
    color: "#00FFD1",
    margin: ".1em .5em",
    fontSize: "23px",
    textDecoration: 'none',
  },
  button: {
    padding: "1em 2em 1em",
    fontSize: "12px",
    color: "#ADADAD",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
};
