import React from 'react'
import {
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Dashboard from '../../Private/Dashboard/Dashboard';
import System from '../../Private/SystemPage/System';
import Info from '../../Page/Info/Info';
import Manual from '../../Page/Manual/Manual';

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
                <Route exact path="/info">
                    <Info />
                </Route>
                <Route exact path="/manual">
                    <Manual />
                </Route>
            </Switch>
        </div>
    )
}

export default Private
