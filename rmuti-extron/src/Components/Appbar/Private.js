import React from 'react'
import {
    Switch,
    Route,
    // Link,
} from "react-router-dom";
import Dashboard from '../../Private/DashboardPage/Dashboard';
import System from '../../Private/SystemPage/System';
import Info from '../../Page/Info/Info';
import Manual from '../../Page/Manual/Manual';
import Download from '../../Private/DownLoadPage/Download';
import Manager from '../../Page/Manager/Manager';

const Private = () => {
    return (
        <div>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`}>
                    <Dashboard />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/system`}>
                    <System />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/info`}>
                    <Info />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/manual`}>
                    <Manual />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/download`}>
                    <Download />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/manager`}>
                    <Manager />
                </Route>
                <Route path="*">
                    <Dashboard />
                </Route>

            </Switch>
        </div>
    )
}

export default Private
