// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import AppContext from 'appContext';

type MatchT = {
  params: {
    id: string,
  },
};

type LocationT = {
  pathname: string,
};

const Home = ({ location }: { location: LocationT }) => (
  <DocumentTitle title={`App ${location.pathname}`}>
    <h1>Hello, new world!</h1>
  </DocumentTitle>
);

const Param = ({ match, location }: { match: MatchT, location: LocationT }) => (
  <DocumentTitle title={`App ${location.pathname}`}>
    <h1>Hello, {match.params.id}!</h1>
  </DocumentTitle>
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
