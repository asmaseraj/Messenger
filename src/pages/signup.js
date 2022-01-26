import React from "react";
import '../style.css';


export default function signup() {
    return (
        <div>
            <div class="signup-form">
                <form>
                    <h2>Welcome!</h2>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control" name="username" placeholder="Username"
                                   required="required"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-paper-plane"></i></span>
                            <input type="email" class="form-control" name="email" placeholder="Email Address"
                                   required="required"></input>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block btn-lg" href="./register2.js">Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );


}

