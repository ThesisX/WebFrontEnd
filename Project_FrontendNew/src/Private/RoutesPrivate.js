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
import Test from '../Components/Appbar/Test';



const RoutesPrivate = () => {

    const handleSignout = () => {
        Cookies.remove("token");
        window.location = '/';
    }

    return (
        <div>
            <BrowserRouter>
                {/* <div>
                    <nav>
                        <ul>
                            <li><Link to="/">หน้าแรก</Link></li>
                            <li><Link to="/system">ระบบตรวจข้อสอบ</Link></li>
                        </ul>
                    </nav>
                    <Button color="secondary" onClick={handleSignout}>ออกจากระบบ</Button>
                </div> */}
                <MyAppBar />
              {/* <Test/> */}
                <Download/>
            </BrowserRouter>
        </div>
    )
}


export default RoutesPrivate;
