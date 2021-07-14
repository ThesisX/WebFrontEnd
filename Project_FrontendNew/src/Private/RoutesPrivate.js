import React from 'react'
import Cookies from 'js-cookie'

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import Dashboard from './Dashboard/Dashboard';

const RoutesPrivate = () => {

    const handleSignout = () => {
        Cookies.remove("token");
        window.location.reload();
    }

    return (
        <div>
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">หน้าแรก</Link></li>
                            <li><Link to="/systems">ระบบตรวจข้อสอบ</Link></li>
                        </ul>
                    </nav>
                    <Privates />
                </div>
            </BrowserRouter>
            <button onClick={handleSignout}>ออกจากระบบ</button>
        </div>
    )
}

const Privates = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/systems">
                    <Systems />
                </Route>
            </Switch>
        </div>
    );
}

const Systems = () => <div><h2>System page</h2></div>

export default RoutesPrivate;
