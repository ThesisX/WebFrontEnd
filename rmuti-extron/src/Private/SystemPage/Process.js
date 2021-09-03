import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center'
    },
    CenterObj:{
        marginTop:50,
        alignItems: 'center',
    }
}));


const Process = () => {
    const classes = useStyles();

    return (
         <div className={classes.root}>
            <CircularProgress className={classes.CenterObj} />
            <h5>กำลังอัปโหลดข้อมูล</h5>
        </div>
    )
}

export default Process
