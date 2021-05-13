import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chatroom from "./pages/Chatroom";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        
        <Wrapper>
          <Route exact path="/" component={Login} />
          <Route exact path="/about" component={Login} />
          <Route exact path="/about" component={Signup} />
          <Route exact path="/chatroom" component={Chatroom} />
        </Wrapper>
       
      </div>
      <Footer />
    </Router>
  );
}

export default App;
