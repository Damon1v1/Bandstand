import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from "../utils/LoginService"
import Message from "../components/elements/Message"
import Error from "../components/elements/Error"
import "./log.css"
import {
    COMMON_FIELDS,
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
          username: e.target.value,
        });
    };

    handleOnChangePassword = (e) => {
        this.setState({
          password: e.target.value,
        });
    };

    onSubmit = async (e) => {
        const data = {
          username: this.state.username,
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
        const { loginSuccess, error } = this.state;

        return (
          <div className="Login">
            <form onSubmit={this.onSubmit}>
                <h3>{LOGIN_FIELDS.LOGIN_HEADING}</h3>

                <div className="form-group">
                    <label> {COMMON_FIELDS.USER_NAME} </label>
                    <input 
                    type="TEXT" 
                    name="Username" 
                    onChange={this.handleOnChangeUserName}
                    autoComplete= "Username"
                    required
                    placeholder="Enter username" 
                    />
                </div>{' '}
                {' '}
                <div className="form-group">
                    <label>{COMMON_FIELDS.PASSWORD}</label>
                    <input 
                    type="password" 
                    name="password" 
                    onChange={this.handleOnChangePassword}
                    autoComplete="Password"
                    required
                    placeholder="Enter password" 
                    />{' '}
                        {' '}
                </div>{' '}
                {' '}
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <div className="buttons">
                    {' '}
                <Link to="/chatroom">
                <button 
                type="button"
                onClick={this.onSubmit} 
                className="btn btn-primary btn-block">
                  Submit
                  </button></Link>{' '}
                </div>{' '}

                <p className="forgot-password text-right">
                    <a href="/SignUp">Register An Account</a><br></br>
                    <a href="/forgotPass">Forgot My Password</a>
                </p>{' '}
            </form>{' '}
        {loginSuccess && <Message message={LOGIN_MESSAGE} />}    {' '}
        {error && <Error message={ERROR_IN_LOGIN} />}    {' '}
        </div>
        );
    }
}







