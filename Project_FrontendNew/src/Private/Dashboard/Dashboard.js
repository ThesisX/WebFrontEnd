import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from "js-cookie";

const Dashboard = () => {
    const [data, setData] = useState([])

    const BASE_URL = 'http://127.0.0.1:8000';
    let tokenCookies = Cookies.get("token");

    const headers = {
        Authorization: `Bearer ${tokenCookies}`,
    };
    const getMe = async () => {
        await axios
            .get(BASE_URL + '/users/info', { headers })
            .then(res => {
                let info = res.data;
                console.log(info)
                setData(info)
                Cookies.set("uid", info.id)
            });

    }

    useEffect(() => {
        getMe();

    }, []);

    return (
        <div>
            <h2>สวัสดีคุณ : {data.full_name}</h2>
        </div>
    );
}

export default Dashboard
