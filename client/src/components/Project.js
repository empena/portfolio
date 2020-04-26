import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Project = (props) => {

  const [ project, setProject ] = useState([])
  const { id } = props.match.params

  useEffect( () => {
    axios.get(`/api/projects/${id}`)
    .then(res => {
      (setProject( res.data ))
    }).catch(err => {
      console.log(err)
    })}, [id])

  return (
    <>
      <h1>{project.name}</h1>
      <h1>{project.category}</h1>
      <h1>{project.description}</h1>
      <h1>{project.image}</h1>
      <h1>{project.link}</h1>
    </>
  )
}

export default Project