import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from '../forms/ContactForm'

const Project = (props) => {
  const [project, setProject] = useState([]);
  const { id } = props.match.params;

  useEffect(() => {
    axios
      .get(`/api/projects/${id}`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div style={styles.container}>
        <h1>{project.name}</h1>
        <a href={project.link} style={styles.circle}>
          Github
        </a>
        <p style={styles.p2}>{project.description}</p>
      </div>
      <img
        alt="project"
        src={`${project.image}`}
        style={styles.containerImage}
      />
      <img
        alt="project"
        src={`${project.image}`}
        style={styles.containerImage}
      />
      <img
        alt="project"
        src={`${project.image}`}
        style={styles.containerImage}
      />
      <div style={styles.contactContainer}>
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
          <a
            href="https://www.linkedin.com/in/emilypena/"
            style={styles.circle}
          >
            LinkedIn
          </a>
          <a href="https://github.com/empena" style={styles.circle}>
            Github
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;

const styles = {
  container: {
    backgroundColor: "#232323",
    height: "5em",
    color: "#00FFD1",
    textAlign: "center",
    padding: "120px",
  },
  containerImage: {
    display: "flex",
    flexFlow: "column wrap",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    flexBasis: "auto",
  },
  circle: {
    marginBottom: "1em",
    border: "1px solid #00FFD1",
    height: "50px",
    borderRadius: "50%",
    width: "50px",
  },
  p2: {
    color: "#ADADAD",
    lineHeight: "23px",
  },
  contactContainer: {
    display: "flex",
    backgroundColor: "#232323",
    height: "auto",
    paddingBottom: "5em",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    padding: "3em",
  },
  findme: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    padding: "3em",
  },
  h1: {
    color: "#00FFD1",
  },
};
