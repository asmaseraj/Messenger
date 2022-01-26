import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register2 from './register2'
import { Button } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import { SplitButton, MenuItem } from 'react-bootstrap';
//import './style.css'


export default function BasicExample() {
  
  return (
    <Router>
      <div>
            
            <h1>Messenger</h1>
            <br />
          <Link to='/'>Welcome</Link>
            <br />
          <Link to="/register2">Submit</Link>

         



            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/register2">
                <Register2 />
              </Route>
            </Switch>
            </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}







