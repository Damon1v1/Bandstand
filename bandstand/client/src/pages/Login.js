import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from "../utils/LoginService"
import Message from "../components/elements/Message"
import Error from "../components/elements/Error"
import "./log.css"
import {
    COMMON_FIELDS,
    REGISTRATION_FIELDS,
    LOGIN_FIELDS,
    LOGIN_MESSAGE,
    ERROR_IN_LOGIN,
  } from '../MessageBundle';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: false,
            loginSuccess: false,
        };
    }

    handleOnChangeUserName = (e) => {
        this.setState({
          user_name: e.target.value,
        });
    };

    handleOnChangePassword = (e) => {
        this.setState({
          password: e.target.value,
        });
    };

    onSubmit = async (e) => {
        const data = {
          user_name: this.state.user_name,
          password: this.state.password,
        };
        const loginResult = await LoginService(data);
        if (loginResult !== 200) {
          this.setState({
            error: true,
            loginSuccess: false,
          });
        } else
          this.setState({
            loginSuccess: true,
            error: false,
          });
    };
    
    render() {
        return (
          <div className="log">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Link to="/chatroom"><button type="submit" className="btn btn-primary btn-block">
                  Submit
                  </button></Link>


                <p className="forgot-password text-right">
                    <a href="/SignUp">Register An Account</a><br></br>
                    <a href="/forgotPass">Forgot My Password</a>
                </p>
            </form>
          </div>
        );
    }
}







