import React from "react";
import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";    
import Customer from "./Customer";
import Login from "./Login";
import Package from "./Package";
import NBO from "./NBO";
import SearchPage from "./SearchPage";

function  App() {
    return (
      <Router>
        <div className="app">
          <Header/>
          <Switch>
            
            <Route path = "/search">
              <SearchPage/>
            </Route>
          
            <Route path = "/customer/">
            <Customer/>
            </Route>
  
            <Route path = "/package">
              <Package/>
            </Route>

            <Route path = "/nbo">
              <NBO/>
            </Route>

            {/* default path */}
           <Route path = "/">
              <Login/>
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
  

export default App;
