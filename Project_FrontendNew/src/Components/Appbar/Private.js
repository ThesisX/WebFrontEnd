import React from 'react'
import {
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Dashboard from '../../Private/Dashboard/Dashboard';
import System from '../../Private/SystemPage/System';

const Private = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/system">
                    <System />
                </Route>
            </Switch>
        </div>
    )
}

export default Private
