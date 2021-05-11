import React from 'react';
import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";
const SERVER = "http://localhost:8080";


function App() {

  const socket = io(SERVER, {
    withCredentials: true,
    extraHeaders: {"my-custom-header":
                  "heady"}
  });
        socket.on('connection', () => {
          console.log("connected")
        })
  return (
    <div className="App">
      <header className="App-header"></header>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
