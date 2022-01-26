import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Blocking from './blocking';
  import Mainpage from './mainpage';
import Friending from './friending';




function Otheraccount() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Your account</Link>
                    </li>
                    <li>
                        <Link to="/friending">Send friend request to this account</Link>
                    </li>
                    <li>
                        <Link to="/blocking">Block this account</Link>
                    </li>
                    <li>
                        <Link to="/mainpage">Go back</Link>
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
                    <Route path="/friending">
                        <Friending />
                    </Route>
                    <Route path="/Blocking">
                        <Blocking />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


function Home() {
    return (
      <div>
        <h2>Other's Account</h2>
      </div>
    );
  }


export default Otheraccount;