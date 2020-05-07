import React from "react";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <p>&copy; EMILY PENA 2020</p>
    </div>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: "#232323",
    height: "10em",
    color: "#ADADAD",
    fontSize: "10px",
    textAlign: "center",
    paddingTop: "10px",
  },
  p: {
    color: "#ADADAD",
    fontSize: "11px",
  },
  h1: {
    color: "#00FFD1",
  },
  p2: {
    color: "#ADADAD",
    lineHeight: "23px",
  },
};
