import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.css';
import Home from './views/home';
import Events from './views/events';
import EventDetail from './views/EventDetail';
import RegistrationPage from './views/RegistrationPage';
import ContactUs from './views/ContactUs';
import NotFound1 from './views/not-found';
import AboutUs from './views/AboutUs';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import PostEvent from './views/PostEvent';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Events} exact path="/events" />
        <Route component={EventDetail} exact path="/events/:title" />
        <Route exact path="/events/:title/register" component={RegistrationPage} />
        <Route  component={ContactUs} exact path="/contact" />
        <Route component={Login}  exact path="/login" />
        <Route component={Signup} exact path="/signup" /> 
        <Route component={Dashboard} exact path="/dashboard" />      
        <Route component={AboutUs} exact path="/about-us" /> 
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={PostEvent} exact path="/postevents" />
        <Route component={NotFound1} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));