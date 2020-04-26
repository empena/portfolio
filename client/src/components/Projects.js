import React from 'react'
import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <div className="card" >
    <Link to={{ pathname: `/projects/${props.project.id}` }}>
      <img
        alt="project"
        src={`${props.project.image}`}
        style={styles.cardImage}
        />
    </Link>
    </div>
  )
}

export default Projects

const styles = {
  cardImage: {
    width: '100%',
    height: '100%',
    flexBasis: 'auto',
}
}