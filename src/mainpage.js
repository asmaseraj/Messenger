import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register2 from './register2'
import Chatprivate from './chatprivate';
import Setting from './setting';
import Search from './search';
import Selfaccount from './selfaccount';
import Grouppage from './grouppage';



function Mainpage() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Main page</Link>
          </li>
          <li>
            <Link to="/grouppage">See groups</Link>
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
            <Link to="/chatprivate">go to pv chat</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/grouppage">
            <Grouppage />
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
          <Route path="/chatprivate">
            <Chatprivate />
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
      <h2>Main page</h2>
    </div>
  );
}


export default Mainpage;


