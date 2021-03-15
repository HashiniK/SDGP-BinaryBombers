import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";  
import Home from "./Home";  
import Customer from "./Customer";
import Login from "./Login";
import Package from "./Package";
import NBO from "./NBO";
import SearchPage from "./SearchPage";
import { Component } from "react";

function  App() {
    return (
      <Router>
        <div className="app">
          <Switch>
            
            <Route path = "/login">
              <Login/>
            </Route>
          
            <Route path = "/customer">
              <Customer/>
            </Route>
  
            <Route path = "/package">
              <Package/>
            </Route>
  
            <Route path = "/nbo">
              <NBO/>
            </Route>
  
            <Route path = "/search">
              <SearchPage/>
            </Route>
  
            <Route path = "/">
              <SearchPage/>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  

export default App;
