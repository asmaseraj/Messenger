import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Setting from './setting';

function Blocklist() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Blocklist </Link>
          </li>
          <li>
            <Link to="/setting">go abck</Link>
          </li>
        </ul>

        <hr />

        
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
      <h2>Blocklist</h2>
    </div>
  );
}


export default Blocklist;


