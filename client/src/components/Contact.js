import React, { useEffect, useState } from "react";
import ContactForm from "../forms/ContactForm";
import "../styles/ProjectCard.css";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact">
      <div style={styles.contactContainerOne}>
        <div style={styles.contactContainerTwo}>
          <div style={styles.contact}>
            <h1 style={styles.h1}>Contact</h1>
            <p style={styles.p2}>
              I am interested in freelance opportunities. However if you have a
              request or question don’t hesitate to contact me with the form
              below.
            </p>
            <ContactForm />
          </div>
          <div style={styles.findme}>
            <h1 style={styles.h1}>Find Me</h1>
            <div style={styles.iconContainer}>
              <a href="https://github.com/empena" style={styles.circle}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/emilypena/"
                style={styles.circle}
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const styles = {
  contactContainerOne: {
    backgroundColor: "#232323",
    height: "auto",
  },
  contactContainerTwo: {
    display: "flex",
    maxWidth: "1024px",
    margin: "auto",
    paddingTop: "2em",
    paddingBottom: "4em",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    paddingRight: "4em",
  },
  findme: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
  },
  circle: {
    marginRight: "1em",
    border: "1px solid #00FFD1",
    borderRadius: "50%",
    width: "20px",
    padding: ".75em",
    textAlign: "center",
    color: "#00FFD1",
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
