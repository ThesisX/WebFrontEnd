import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import axios from 'axios'
import Cookies from "js-cookie";
import { BASE_URL } from '../../service';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));



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

    const classes = useStyles();


    return (
        <div>
            <h2>สวัสดีคุณ : {data.full_name}</h2>
            {/* <button onClick={()=>setCount(count+10)}>click</button> */}

            <Button variant="contained" color="primary" href="/manual">
            วิธีการใช้งาน
            </Button>
        </div>

    );
}

export default Dashboard
