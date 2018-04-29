// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

type RouteT = {
  match: {
    params: {
      id: string,
    },
  },
};

const Home = () => (
  <h1>Hello, new world!</h1>
);

const Param = ({ match }: RouteT) => (
  <h1>Hello, {match.params.id}!</h1>
);

const Routes = (
  <Router>
    <div>
      <nav>
        <Link to="/" href="/" >Home</Link>
        <Link to="/user" href="/user" >Parameter</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Param} />
    </div>
  </Router>
);

export default Routes;
