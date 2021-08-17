import React from 'react'
import Cookies from 'js-cookie'

import {BrowserRouter,} from "react-router-dom";

import MyAppBar from "../Components/Appbar/MyAppBar";



const RoutesPrivate = () => {

    const handleSignout = () => {
        Cookies.remove("token");
        window.location = '/';
    }

    return (
        <div>
            <BrowserRouter>
                <MyAppBar />
            </BrowserRouter>
        </div>
    )
}


export default RoutesPrivate;
