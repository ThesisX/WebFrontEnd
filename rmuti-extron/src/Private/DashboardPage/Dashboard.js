import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, Grid, Paper, Typography } from '@material-ui/core';

import { get } from 'axios';
import Cookies from "js-cookie";
import { BASE_URL } from '../../service';

import DataList from './DataLists';
import { Divider } from '@material-ui/core';


let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        padding: 50,
    },
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
                console.log(info)
                setData(info)
            });

    }

    useEffect(() => {
        getMe();
        console.log(data);

    }, []);

    const classes = useStyles();

    return (
        <div>
            {data ? (
                <>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h4">สวัสดีคุณ : {data.full_name}</Typography>
                                    <br />
                                    <Divider />
                                    <br />
                                    <DataList props={data}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </>
            ) : (
                <>
                    <CircularProgress />
                </>
            )}
        </div>

    );
}

export default Dashboard
