// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
  <h1>Hello, new world!</h1>
)

const Param = ({ match }) => (
  <h1>Hello, {match.params.id}!</h1>
)

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Param} />
    </div>
  </Router>
);

export default Routes;
