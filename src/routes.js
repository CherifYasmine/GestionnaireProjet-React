import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login'

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={Login}/>
        </Switch>
        </BrowserRouter>
        
    )
}

export default Routes;