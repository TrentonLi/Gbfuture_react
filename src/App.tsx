import React from 'react';
import Login from "./views/Login";
import Index from "./views/home/index";
import User from "./views/User/index";
import './App.css';
import {Route} from "react-router";
function App() {
  return (
    <div className="App">
       <Route exact path="/" component={Login} />
       <Route exact path="/index" component={Index} />
       <Route exact path="/user" component={User} />
    </div>
  );
}
export default App;
