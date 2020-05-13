import React, { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";
import Footer from "./Footer";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../styles/Portfolio.css";


const Project = (props) => {

  const [project, setProject] = useState({});
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
      <div style={styles.headerContainer}>
        <h1>{project.name}</h1>
        <br />
        <a href={project.link} style={styles.circle}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href={project.link} style={styles.circle}>
          <FontAwesomeIcon icon={faEye} />
        </a>
      </div>

      <section id="portfolio">
        <div style={styles.imageContainer} className="column">      
      <img alt="project" src={`${project.image}`}/>
        </div>
        <div style={styles.descriptionContainer}>
          <p style={styles.p2}>{project.description}</p>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default Project;

const styles = {
  headerContainer: {
      backgroundColor: "#232323",
      width: 'auto',
      height: "auto",
      color: "#00FFD1",
      textAlign: "center",
      padding: "100px",
      marginTop: '1.5em',
  },

  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1024px",
    margin: "auto",
    backgroundColor: "white",
    textAlign: "center",
    marginBottom: "8em",
  },

  imageContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1024px",
    margin: "auto",
    backgroundColor: "white",
    marginTop: "5em",
  },

  h1: {
    color: "#00FFD1",
  },

  p2: {
    color: "#ADADAD",
    lineHeight: "23px",
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
