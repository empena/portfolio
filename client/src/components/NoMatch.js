import React from 'react';
import { Link, } from "react-router-dom";

const NoMatch = () => (
  <>
  <div style={styles.container}>
  <h1>Oops!</h1>
  <h3>Nothing to see here.</h3>
  <Link to="/">
    <button>Home</button>
  </Link>
  </div>
  </>
)

export default NoMatch;

const styles = {
  container: {
    backgroundColor: '#232323',
    textAlign: "center",
    padding: '4em',
    width: 'auto',
    height: '2000px',
    color: '#ADADAD',
  }
}