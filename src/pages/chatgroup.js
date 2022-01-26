import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Groupdescription from './groupdescription';
  import Type from './type';
  import Mainpage from './Home';




function Chatgroup() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Group chat</Link>
                    </li>
                    <li>
                        <Link to="/groupdescription">Go to group description</Link>
                    </li>
                    <li>
                        <Link to="/type">Type something</Link>
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
                    <Route path="/groupdescription">
                        <Groupdescription />
                    </Route>
                    <Route path="/type">
                        <Type />
                    </Route>
                    <Route path="/mainpage">
                        <Mainpage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


function Home() {
    return (
      <div>
        <h2>Group chat</h2>
      </div>
    );
  }


export default Chatgroup;
