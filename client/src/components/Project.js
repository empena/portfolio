import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "../forms/ContactForm";
import Contact from "./Contact";
import Footer from "./Footer";

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
      <Contact />
      <Footer />
    </>
  );
};

export default Project;

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
};
