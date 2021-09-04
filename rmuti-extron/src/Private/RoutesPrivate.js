import React from 'react'
import {BrowserRouter} from "react-router-dom";
import MyAppBar from "../Components/Appbar/MyAppBar";

const RoutesPrivate = () => {
    return (
        <div>
            <BrowserRouter>
                <MyAppBar />
            </BrowserRouter>
        </div>
    )
}


export default RoutesPrivate;
