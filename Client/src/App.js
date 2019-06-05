import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import io from "socket.io-client";
import {  Switch } from "react-router-dom";
// import Nav from "./component/Nav";
import Footer from "./component/Footer/Footer.js";
// import Home from "./component/Pages/Home.js";
// import Profile from "./component/Pages/Profile.js";
// import Error from "./component/Pages/404.js";
// import axios from "axios";

//sass processed into style.css file
import "./css/app.css";


class App extends Component {


  render() {
    return (
      <Router>
        <Switch>
         
          {/* {!this.state.user.firstName ? <Redirect to="/" /> : null } */}
          
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}
export default App;
