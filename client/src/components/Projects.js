import React from "react";
import { Link } from "react-router-dom";
import "../styles/Portfolio.css";

const Projects = (props) => {
  return (
    <Link to={{ pathname: `/projects/${props.project.id}` }}>
      <img alt="project" src={`${props.project.image}`} />
    </Link>
  );
};

export default Projects;
