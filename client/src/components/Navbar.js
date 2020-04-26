import React from 'react';
import '../styles/navbar.css'

const Navbar = () => { 
  return (
    <>
      <div style={styles.mainNav}>
        <div style={styles.leftNavStyles}>
            <h1 style={styles.logo}>EP</h1>
          </div>
        <div style={styles.rightNavStyles}>
          <div className='main' id="portfolio" >
            <a href="#portfolio" style={styles.button}>Portfolio</a>
          </div>
          <div className='main' id="contact" >
            <a href="#contact" style={styles.button}>Contact</a>
          </div>
          <div className='main' id="findme" >
            <a href="#findme" style={styles.button}>Find Me</a>
          </div>
        </div>
      </div>
    </>    
  )
}

export default Navbar

const styles = {
  mainNav: {
    display: 'flex',
    height: '3em',
    width: '100%',
    top: '0',
    backgroundColor: 'black',
    position: 'fixed',
  },
  rightNavStyles: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '70%',
    padding: '.8em .5em',
    // border: '1px solid red',
  },
  leftNavStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%',
    padding: '.5em .5em',
    // border: '1px solid blue',
  },
  logo: {
    color: '#00FFD1',
    margin: '0em .5em',
    fontSize: '23px',
  },
  button :{
    padding: '1em 2em 1em',
    fontSize: '12px',
    color: '#ADADAD',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    // border: '1px solid yellow',
  }
}
