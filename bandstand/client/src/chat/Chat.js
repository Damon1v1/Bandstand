import React, { Component, useState} from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import ChatRoom from "./components/ChatRoom/ChatRoom";
// var connectionOptions =  {
//   "force new connection" : true,
//   "reconnectionAttempts": "Infinity", 
//   "timeout" : 10000,                  
//   "transports" : ["websocket"]
// };

function Chat() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId" component={ChatRoom} />
      </Switch>
    </Router>
  );
}

export default Chat;
