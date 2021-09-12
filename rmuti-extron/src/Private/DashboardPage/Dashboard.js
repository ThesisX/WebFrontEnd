import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from "js-cookie";
import { BASE_URL } from '../../service';

const Dashboard = () => {
    const [data, setData] = useState([])

    let tokenCookies = Cookies.get("token");

    const headers = {
        Authorization: `Bearer ${tokenCookies}`,
    };
    const getMe = async () => {
        await axios
            .get(BASE_URL + '/users/info', { headers })
            .then(res => {
                let info = res.data;
                // console.log(info)
                setData(info)
            });

    }

    useEffect(() => {
        getMe();

    }, []);

    return (
        <div>
            <h2>สวัสดีคุณ : {data.full_name}</h2>
            {/* <button onClick={()=>setCount(count+10)}>click</button> */}
        </div>
    );
}

export default Dashboard
