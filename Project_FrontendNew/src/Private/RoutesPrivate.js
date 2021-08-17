import React from 'react'
import Cookies from 'js-cookie'
import Button from '@material-ui/core/Button';

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import Dashboard from './Dashboard/Dashboard';
import System from './SystemPage/System';
import MyAppBar from "../Components/Appbar/MyAppBar";
import Download from './DownLoad/Download';


const RoutesPrivate = () => {

    const handleSignout = () => {
        Cookies.remove("token");
        window.location = '/';
    }

    return (
        <div>
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">หน้าแรก</Link></li>
                            <li><Link to="/system">ระบบตรวจข้อสอบ</Link></li>
                        </ul>
                    </nav>
                    <Button color="secondary" onClick={handleSignout}>ออกจากระบบ</Button>
                    <Privates />
                </div>
                {/* <MyAppBar />
                <Download/> */}
            </BrowserRouter>
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
                <Route path="/system">
                    <System />
                </Route>
            </Switch>
        </div>
    );
}

export default RoutesPrivate;
