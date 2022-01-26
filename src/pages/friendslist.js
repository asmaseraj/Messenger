import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Setting from './setting';

function Friendslist() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Friends list</Link>
          </li>
          <li>
            <Link to="/setting">go abck</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/setting">
            <Setting />
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
      <h2>Friendslist</h2>
    </div>
  );
}


export default Friendslist;


