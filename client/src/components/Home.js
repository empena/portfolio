import React, { useEffect, useState } from "react";
import ContactForm from "../forms/ContactForm";
import axios from "axios";
import "../styles/ProjectCard.css";
import Projects from "./Projects";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/projects`)
      .then((res) => {
        return setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sortCodeCategory = () => {
    var project = [...projects];
    setProjects(project.filter((project) => project.category === "Design"));
  };

  const sortDesignCategory = () => {
    var project = [...projects];
    setProjects(project.filter((project) => project.category === "Code"));
  };

  const sortAllCategory = () => {};

  const renderProjects = () => {
    return projects.map((project) => (
      <div key={project.id} style={styles.card}>
        <Projects project={project} />
      </div>
    ));
  };

  return (
    <>
      <div style={styles.header}>Coder / Designer</div>

      <div style={styles.portfolioHeader}>
        <div style={styles.portfolioHeaderLeft}>
          <h1>Portfolio</h1>
        </div>
        <div style={styles.portfolioHeaderRight}>
          <p style={styles.p}>SORT:</p>
          <button style={styles.btn} onClick={() => sortCodeCategory()}>
            CODE
          </button>
          <p style={styles.p}>|</p>
          <button style={styles.btn} onClick={() => sortDesignCategory()}>
            DESIGN
          </button>
          <p style={styles.p}>|</p>
          <button style={styles.btn} onClick={() => sortAllCategory()}>
            BOTH
          </button>
        </div>
      </div>
      <div style={styles.portfolio}>{renderProjects()}</div>

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
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    backgroundColor: "white",
    height: "auto",
    paddingLeft: "3em",
    paddingRight: "3em",
    paddingBottom: "6em",
    paddingTop: "1.5em",
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
  card: {
    display: "flex",
    height: "16em",
    width: "16em",
    backgrounColor: "red",
  },
  portfolioHeader: {
    display: "flex",
    alignItems: "flex-end",
    height: "6em",
    backgroundColor: "white",
    padding: ".5em",
    paddingTop: "2em",
  },
  portfolioHeaderLeft: {
    width: "50%",
    paddingLeft: "3em",
  },
  portfolioHeaderRight: {
    display: "flex",
    justifyContent: "flex-end",
    width: "50%",
    paddingRight: "3em",
  },
  btn: {
    border: "none",
    outline: "none",
    color: "#ADADAD",
    marginRight: "1em",
    marginLeft: "1em",
    marginBottom: ".1em",
    cursor: "pointer",
    fontSize: "11px",
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
  circle: {
    marginBottom: "1em",
    border: "1px solid #00FFD1",
    height: "50px",
    borderRadius: "50%",
    width: "50px",
  },
};
