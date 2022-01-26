import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Otheraccount from './otheraccount';
  import Type from './type';
  import Mainpage from './mainpage';




function Chatprivate() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Private chat</Link>
                    </li>
                    <li>
                        <Link to="/otheraccount">See the account of your friend</Link>
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
                    <Route path="/otheraccount">
                        <Otheraccount />
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
        <h2>Private chat </h2>
      </div>
    );
  }


export default Chatprivate;