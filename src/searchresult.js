import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Friending from "./friending";
import Mainpage from "./mainpage";
import Blocking from "./blocking";


function Searchresult() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/blocking">Block</Link>
          </li>
          <li>
            <Link to="/friending">firend request</Link>
          </li>
          <li>
            <Link to="/mainpage">go back</Link>
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
          <Route path="/blocking">
            <Blocking />
          </Route>
          <Route path="/friending">
            <Friending />
          </Route>
          <Route path="/mainpage">
            <Mainpage />
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
      <h2>find your friends</h2>
    </div>
  );
}

export default Searchresult;



