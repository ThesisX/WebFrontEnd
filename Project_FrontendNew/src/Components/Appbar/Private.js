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
import Download from '../../Private/DownLoad/Download';
import Manager from '../../Page/Manager/Manager';

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
                <Route exact path="/download">
                    <Download />
                </Route>
                <Route exact path="/manager">
                    <Manager />
                </Route>

            </Switch>
        </div>
    )
}

export default Private
