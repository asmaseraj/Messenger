import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Grouppage from './grouppage';
import Copyaddress from "./copyaddress";

function Groupdescription() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/grouppage">go back</Link>
          </li>
          <li>
            <Link to="/copyaddress">copy the group address</Link>
          </li>
        </ul>

        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/grouppage">
            <Grouppage />
          </Route>
          <Route path="/copyaddress">
            <Copyaddress />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  export default Groupdescription;