import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Friendslist from './friendslist';
import Chatgroup from './chatgroup';
import Creategroup from './creategroup';
import Blocklist from './blocklist';
import Selfaccount from './selfaccount';
import Mainpage from './mainpage';
import Grouppage from "./grouppage";
import Requestlist from "./requestlist";
function Setting() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Setting</Link>
          </li>
          <li>
            <Link to="/mainpage">See main page</Link>
          </li>
          <li>
            <Link to="/selfaccount">See your profile</Link>
          </li>
          <li>
            <Link to="/grouppage">See groups</Link>
          </li>
          <li>
            <Link to="/creategroup">create new group</Link>
          </li>
          <li>
            <Link to="/requestlist">see requests</Link>
          </li>
          <li>
            <Link to="/friendslist">see friends</Link>
          </li>
          <li>
            <Link to="/blocklist">see blocklist</Link>
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
          <Route path="/grouppage">
            <Grouppage />
          </Route>
          <Route path="/creategroup">
            <Creategroup />
          </Route>
          <Route path="/chatgroup">
            <Chatgroup />
          </Route>
          <Route path="/requestlist">
            <Requestlist />
          </Route>
          <Route path="/friendslist">
            <Friendslist />
          </Route>
          <Route path="/blocklist">
            <Blocklist />
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


export default Setting;


