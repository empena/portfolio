import React from "react";
import ContactForm from "../forms/ContactForm";

const Home = () => {
  return (
    <>
      <div style={styles.header}>Coder / Designer</div>
      <div style={styles.portfolio}>Portfolio</div>
      <div style={styles.contactContainer}>
        <div style={styles.contact}>
          <h1>Contact</h1>
          <p>
            I am interested in freelance opportunities. However if you have a
            request or question don’t hesitate to contact me with the form
            below.
          </p>
          <ContactForm />
        </div>
        <div style={styles.findme}>
          <h1>Find Me</h1>
          <button>LinkedIn</button>
          <button>GitHub</button>
        </div>
      </div>
    </>
  );
};

export default Home;

const styles = {
  header: {
    backgroundColor: "#232323",
    height: "10em",
    color: "#00FFD1",
    fontSize: "30px",
    textAlign: "center",
    paddingTop: "300px",
  },
  portfolio: {
    backgroundColor: "pink",
    height: "40em",
    padding: "3em",
  },
  contactContainer: {
    display: "flex",
    backgroundColor: "#232323",
    height: 'auto',
  },
  contact: {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    width: "60%",
    padding: "3em",
  },
  findme: {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
    width: "40%",
    padding: "3em",
  },
};
