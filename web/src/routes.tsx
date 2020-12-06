import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Pages/Search';

function Routes() {
    return(
        <BrowserRouter> 
            <Switch>
                <Route path='/search' component={Search} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;