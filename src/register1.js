import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register2 from './register2'
import { Button } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import { SplitButton, MenuItem } from 'react-bootstrap';
import './style.css'


export default function BasicExample() {
  return (
    <div>
      <div class="signup-form">
        <form>
          <h2>Welcome!</h2>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-user"></i></span>
              <input type="text" class="form-control" name="username" placeholder="Username" required="required"></input>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-paper-plane"></i></span>
              <input type="email" class="form-control" name="email" placeholder="Email Address" required="required"></input>
            </div>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block btn-lg" href="./register2.js">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );


}

