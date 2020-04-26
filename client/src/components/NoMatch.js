import React from 'react';
import { Link, } from "react-router-dom";

const NoMatch = () => (
  <>
  <h1>Oops!</h1>
  <h1>Nothing to see here.</h1>
  <Link to="/">
    <button>Home</button>
  </Link>
  </>
)

export default NoMatch;