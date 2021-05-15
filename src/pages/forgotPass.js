import React, { Component } from "react";
import "./log.css";

export default class forgotPass extends Component {
    render() {
        return (
            <form>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                <a href="/Login">Woops, I Remembered My Password</a>
                </p>
            </form>
        );
    }
}

