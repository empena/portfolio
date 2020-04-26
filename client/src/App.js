import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';

const App = () => (
  <Fragment>
    <Navbar/>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/projects/:id" component={Project} /> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Fragment>
);

export default App;
