import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
    UserRegistration,
    UsernameValidation,
  } from '../utils/RegistrationService';
  import Message from '../components/elements/Message';
  import Error from '../components/elements/Error';
  import {
    REGISTRATION_FIELDS,
    REGISTRATION_MESSAGE,
    COMMON_FIELDS,
    ERROR_IN_REGISTRATION,
  } from '../MessageBundle';
import "./log.css";

export default class SignUp extends Component {
    constructor (props) {
        super (props);
        this.state = {
          first_name: '',
          last_name: '',
          user_name: '',
          password: '',
          register: false,
          error: false,
        };
    };

    handleOnChangeFirstName = e => {
        this.setState ({
          first_name: e.target.value,
        });
      };
    
      handleOnChangeLastName = e => {
        this.setState ({
          last_name: e.target.value,
        });
      };
    
      handleOnChangeUserName = e => {
        this.setState ({
          user_name: e.target.value,
        });
      };
    
      handleOnChangePassword = e => {
        this.setState ({
          password: e.target.value,
        });
      };
    
      handleOnBlur = async e => {
        this.setState ({
          user_name: e.target.value,
        });
        const data = {
          user_name: this.state.user_name,
        };
        const isUsernameTaken = await UsernameValidation (data);
    
        isUsernameTaken === 204
          ? this.setState ({user_name_taken: true})
          : this.setState ({user_name_taken: false});
      };
    
      onSubmit = async e => {
        e.preventDefault ();
        const data = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          user_name: this.state.user_name,
          password: this.state.password,
        };
    
        const registerStatus = await UserRegistration (data);
        if (registerStatus === 200) {
          this.setState ({
            first_name: '',
            last_name: '',
            user_name: '',
            password: '',
            register: true,
            error: false,
          });
        } else
          this.setState ({
            error: true,
            register: false,
          });
      };

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    <a href="/Login">Already Registered</a>
                </p>
            </form>
        );
    }
}