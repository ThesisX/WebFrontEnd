import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { get } from 'axios';
import Cookies from "js-cookie";
import { BASE_URL } from '../../service';

import myimage from "../DashboardPage/check-list.png";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    img: {
        paddingLeft:' 50',
    }
}));



const Dashboard = () => {
    const [data, setData] = useState([])

    let tokenCookies = Cookies.get("token");

    const headers = {
        Authorization: `Bearer ${tokenCookies}`,
    };
    const getMe = async () => {
        await get(BASE_URL + '/users/info', { headers })
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
            <h1>สวัสดีคุณ : {data.full_name}</h1>
            {/* <button onClick={()=>setCount(count+10)}>click</button> */}

            {/* <Button variant="contained" color="primary" href="/manual">
            วิธีการใช้งาน
            </Button> */}
            {/* <img className={classes.img} src={myimage} alt="complex" /> */}
        </div>

    );
}

export default Dashboard
