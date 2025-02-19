import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.css';
import Home from './views/home';
import Events from './views/events';
import EventDetail from './views/EventDetail';
import NotFound1 from './views/not-found';
import AboutUs from './views/AboutUs';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Events} exact path="/events" />
        <Route component={EventDetail} exact path="/events/:id" />
        <Route component={AboutUs} exact path="/about-us" /> 
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={NotFound1} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));