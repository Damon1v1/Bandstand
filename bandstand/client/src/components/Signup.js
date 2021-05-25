import React, { useState, useContext, useEffect } from "react";
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';
const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: ''
  });

  const { first_name, last_name, username, password } = user;

  const onChange = e => setUser({ ...user, [e.target.username]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (first_name === '' || last_name === '' || username=== '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      register({
        first_name,
        last_name,
        username,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='first_name'>First Name</label>
          <input
            id='first_name'
            type='text'
            name='first_name'
            value={first_name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Last Name</label>
          <input
            id='last_name'
            type='last_name'
            name='last_name'
            value={last_name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Username</label>
          <input
            id='username'
            type='username'
            name='username'
            value={username}
            onChange={onChange}
            required
            minLength='5'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='passwor'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
