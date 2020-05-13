import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Portfolio.css";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/projects`)
      .then((res) => {
        setProjects(res.data);
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sortCodeCategory = () => {
    var project = [...projects];
    setProjects(project.sort((a, b) => a.category.localeCompare(b.category)));
  };

  const sortDesignCategory = () => {
    var project = [...projects];
    setProjects(project.sort((a, b) => b.category.localeCompare(a.category)));
  };

  const renderProjects = () => {
    return projects.map((project) => (
      <div key={project.id} className="column">
        <Projects project={project} />
      </div>
    ));
  };

  return (
    <>
      <div className="scrolling-box">
        <Header />
        <section id="portfolio">
          <div className="portfolioContainer">
            <div className="portfolioHeader">
              <div className="portfolioHeaderLeft">
                <h1>Portfolio</h1>
              </div>
              <div className="portfolioHeaderRight">
                <p style={styles.p}>SORT: &nbsp;</p>
                <p style={styles.pPointer} onClick={() => sortCodeCategory()}>
                  CODE &nbsp;
                </p>
                <p style={styles.p}> | &nbsp;</p>
                <p style={styles.pPointer} onClick={() => sortDesignCategory()}>
                  DESIGN &nbsp;
                </p>
              </div>
            </div>
            <div className="row">{renderProjects()}</div>
          </div>
        </section>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;

const styles = {
  p: {
    color: "#ADADAD",
    fontSize: "11px",
  },
  pPointer: {
    color: "#ADADAD",
    fontSize: "11px",
    cursor: "pointer",
  },
};
