import './App.css';
import RegisterForm from "./components/register/RegisterForm";
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route path="/register" exact component={RegisterForm}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
