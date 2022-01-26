import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mainpage from './mainpage'



function Register2() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Register 2</Link>
                    </li>
                    <li>
                        <Link to="/mainpage">Submit</Link>
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
        <h2>Register 2</h2>
      </div>
    );
  }

export default Register2;