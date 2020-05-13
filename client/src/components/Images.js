import React from "react";
import "../styles/Portfolio.css";

const Images = (props) => {
  
  // filter through array return images with a value
  
  return (
    <div>
      <img alt="project" src={`${props.project.imagea}`} />
      <img alt="project" src={`${props.project.imageb}`} />
      <img alt="project" src={`${props.project.imagec}`} />
      <img alt="project" src={`${props.project.imaged}`} />
      <img alt="project" src={`${props.project.imagee}`} />
      <img alt="project" src={`${props.project.imagef}`} />
    </div>
  );
};

export default Images;

  // const images = () => {
  //   if ( project.imagea !== null ) {
  //     return  (
  //       <>
  //       <img alt="project" src={`${project.imagea}`} />
  //       <img alt="project" src={`${project.imageb}`} />
  //       </>
  //     )
  //   } if ( project.imageb !== null ) {
  //     return (
  //       <>
  //       <img alt="project" src={`${project.imagea}`} />
  //       <img alt="project" src={`${project.imageb}`} />
  //       </>
  //     )
  //   } if ( project.imagec !== null ) {
  //     return (
  //       <>
  //       <img alt="project" src={`${project.imagea}`} />
  //       <img alt="project" src={`${project.imageb}`} />
  //       <img alt="project" src={`${project.imagec}`} />
  //       </>
  //     )
  //   } else if ( project.imaged !== null ) {
  //     return (
  //       <>
  //       <img alt="project" src={`${project.imagea}`} />
  //       <img alt="project" src={`${project.imageb}`} />
  //       <img alt="project" src={`${project.imagec}`} />
  //       <img alt="project" src={`${project.imaged}`} />
  //       </>
  //     )
  //   } else if ( project.imagee !== null ) {
  //     return (
  //       <>
  //       <img alt="project" src={`${project.imagea}`} />
  //       <img alt="project" src={`${project.imageb}`} />
  //       <img alt="project" src={`${project.imagec}`} />
  //       <img alt="project" src={`${project.imaged}`} />
  //       <img alt="project" src={`${project.imagee}`} />
  //       </>
  //     )
  //   } else {
  //     return (
  //       <>
  //       <img alt="project" src={`${project.imagea}`} />
  //       <img alt="project" src={`${project.imageb}`} />
  //       <img alt="project" src={`${project.imagec}`} />
  //       <img alt="project" src={`${project.imaged}`} />
  //       <img alt="project" src={`${project.imagee}`} />
  //       <img alt="project" src={`${project.imagef}`} />
  //       </>
  //     )
  //   } 
  // }