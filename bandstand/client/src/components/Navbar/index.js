import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import AuthContext from '../../context/auth/authContext'
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();

  };


  return (
    <nav className="navbar navbar-expand-lg fluid">
      <h1 className="navbar-brand" ><strong>Bandstand</strong></h1>
      <navbar className="justify-content-end">
        <ul className="navbar-nav ">
           <li className="nav-item justify-right">
            <Link
              to="/chatroom"
              className={
                window.location.pathname === "/" || window.location.pathname === "/log-in"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li> 
          <li className="nav-item">
            <Link
              to="/chatroom"
              className={window.location.pathname === "/chatroom" ? "nav-link active" : "nav-link"}
            >
              ChatRoom
            </Link>
          </li>
          <li className="nav-item">
          <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
          </li>
        </ul>
      </navbar>
    </nav>
  );
}

export default Navbar;

