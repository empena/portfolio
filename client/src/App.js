import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

const App = () => (
  <Fragment>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/projects" component={Home} />
        <Route exact path="/projects/:id" component={Project} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Fragment>
);

export default App;
