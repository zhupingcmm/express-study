import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import LoginPage from '../login';
import HomePage from '../home';

function AppContainer(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppContainer;
