import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register2 from './register2'
import Chatgroup from './chatgroup';
import Setting from './setting';
import Search from './search';
import Selfaccount from './selfaccount';
import Mainpage from './mainpage';

function Grouppage() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Groups</Link>
          </li>
          <li>
            <Link to="/mainpage">See main page</Link>
          </li>
          <li>
            <Link to="/selfaccount">See your profile</Link>
          </li>
          <li>
            <Link to="/setting">Go to setting</Link>
          </li>
          <li>
            <Link to="/search">Search by id or name</Link>
          </li>
          <li>
            <Link to="/chatgroup">go to group chat</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mainpage">
            <Mainpage />
          </Route>
          <Route path="/selfaccount">
            <Selfaccount />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/chatgroup">
            <Chatgroup />
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
      <h2>Groups</h2>
    </div>
  );
}


export default Grouppage;


