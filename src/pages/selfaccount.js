import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Otheraccount from './otheraccount';
  import Setting from './setting';
  import Mainpage from './Home';
import Grouppage from './grouppage';




function Selfaccount() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Your account</Link>
                    </li>
                    <li>
                        <Link to="/mainpage">Go to main page</Link>
                    </li>
                    <li>
                        <Link to="/grouppage">go to groups</Link>
                    </li>
                    <li>
                        <Link to="/setting">setting</Link>
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
                    <Route path="/Grouppage">
                        <Grouppage />
                    </Route>
                    <Route path="/setting">
                        <Setting />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


function Home() {
    return (
      <div>
        <h2>Your Account</h2>
      </div>
    );
  }


export default Selfaccount;
