import React, { useEffect, useState } from "react";
import ContactForm from "../forms/ContactForm";
import axios from 'axios';
import '../styles/ProjectCard.css'
import Projects from './Projects'

const Home = () => {

  const [ projects, setProjects ] = useState([])

  useEffect( () => {
    axios.get(`/api/projects`)
    .then(res => {
      return setProjects(res.data )
    }).catch(err => {
      console.log(err)
    }
    )}, [])

  const renderProjects = () => {
    return projects.map( project => (
      <div key={project.id} style={styles.card} >
        <Projects project={project} />
      </div>
    ))
  }

  return (
    <>
      <div style={styles.header}>Coder / Designer</div>
      
      <div style={styles.portfolio}>
        <h1>Portfolio</h1>
          {renderProjects()}
      </div>


      
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
          <a href="https://www.linkedin.com/in/emilypena/">LinkedIn</a>
          <a href="https://github.com/empena">Github</a>
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
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    backgroundColor: "white",
    height: "auto",
    padding: "3em",
  },
  contactContainer: {
    display: "flex",
    backgroundColor: "#232323",
    height: 'auto',
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
    display: 'flex',
    // flexGrow: '4',
    height: '16em',
    width: '16em',
    backgrounColor: 'red',
  },
}
