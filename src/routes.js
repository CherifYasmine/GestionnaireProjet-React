import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import RegisterForm from "./components/register/RegisterForm";

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={RegisterForm}/>
        </Switch>
        </BrowserRouter>
        
    )
};

export default Routes;