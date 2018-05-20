// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppContext from 'appContext';

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

const Data = () => (
  <AppContext.Consumer>
    {context => <p>{ JSON.stringify(context[0])}</p>}
  </AppContext.Consumer>
);

const Routes = (
  <Router>
    <div>
      <nav>
        <Link to="/" href="/" >Home</Link>
        <Link to="/user" href="/user" >Parameter</Link>
        <Link to="/data" href="/data" >Context</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Param} />
      <Route path="/data" component={Data} />
    </div>
  </Router>
);

export default Routes;
