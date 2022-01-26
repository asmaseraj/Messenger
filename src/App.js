import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Signup from "../src/pages/signup";
import Setting from "./pages/setting";
import Home from "./pages/Home";
import Chatprivate from "./pages/chatprivate";
import Profile from "./pages/profile";
import Creategroup from "./pages/creategroup";
import Requestlist from "./pages/requestlist";


function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function App() {
    return (
        <Router>

            <Switch>
                <Route exact path="/">
                    <Setting/>
                </Route>

                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/signup">
                    < Signup/>
                </Route>
                <Route path="/setting">
                    < Setting/>
                </Route>
                <Route path="/chat">
                    < Chatprivate/>
                </Route>
                <Route path="/profile">
                    < Profile/>
                </Route>
                <Route path="/creategroup">
                    < Creategroup/>
                </Route>
                <Route path="/requestlist">
                    < Requestlist/>
                </Route>
            </Switch>

        </Router>

    );
}


export default App;
