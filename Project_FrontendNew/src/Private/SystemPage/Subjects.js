import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../service';

import Cookies from 'js-cookie';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    Subjects: {
        marginRight: 10,
        marginBottom: 10,
    },
    SubjectsDialog: {
        marginRight: 5,
        width: '40%',
    },
}));

const Subjects = ({ getActivate }) => {
    const tokenCookies = Cookies.get("token");

    const [open, setOpen] = useState(true);
    const [lableDialog, setLableDialog] = useState("สร้างรายวิชา")
    const [subjectname, setSubjectname] = useState("")
    const [subjectgroup, setSubjectgroup] = useState("")

    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        let uid = Cookies.get('uid');
        let n = new Date();
        let t = n.getTime();
        let sname = `A-${uid}-${t}`;

        if (subjectname === "") {
            setSubjectname(sname);
            setSubjectgroup(uid);
            setLableDialog("แก้ไขรายวิชา");
        }

        setOpen(false);
        onSubmit();
    };

    const handleChangeSubjectname = (e) => {
        let sname = e.target.value;
        setSubjectname(sname);

        if (sname !== "") {
            setLableDialog("แก้ไขรายวิชา");
        }
        else {
            setLableDialog("สร้างรายวิชา");
        }
    };

    const handleChangeSubjectgroup = (e) => {
        let gname = e.target.value;
        setSubjectgroup(gname);
    }

    if (subjectname && subjectgroup) {
        getActivate(true);
    }

    const form_data = {
        sub_name: subjectname,
        sub_group: subjectgroup,
    };

    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/json', 
            'Authorization' : `Bearer ${tokenCookies}`,
        },
        data: form_data,
        url: BASE_URL + '/subjects/create-subject/',
    };

    const onSubmit = async () => {
        await axios(options)
            .then(res => {
                console.log(res)
            });
    }
    return (
        <Grid container>
            <Grid container item xs={12} spacing={3}>
                <Grid container item xs={12}>
                    <TextField
                        type="text"
                        className={classes.Subjects}
                        placeholder="วิชาคอมพิวเตอร์"
                        label="ชื่อรายวิชา"
                        value={subjectname}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                        size="small"

                    />
                    <TextField
                        type="number"
                        className={classes.Subjects}
                        placeholder="9"
                        label="กลุ่มที่"
                        value={subjectgroup}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                        size="small"
                    />
                    <Button
                        className={classes.Subjects}
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen}
                        size="small"
                    >
                        {lableDialog}
                    </Button>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">สร้างรายวิชา</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        คุณสามารถสร้างรายวิชาได้โดยการตั้งชื่อรายวิชา เช่น วิทยาศาตร์ คอมพิวเตอร์ เป็นต้น หากคุณไม่ได้ตั้งชื่อรายวิชาระบบจะทำการตั้งชื่อให้อัตโนมัติ
                    </DialogContentText>
                    <TextField
                        type="text"
                        autoFocus
                        type="text"
                        className={classes.SubjectsDialog}
                        label="ชื่อรายวิชา"
                        placeholder="วิชาคอมพิวเตอร์"
                        value={subjectname}
                        required
                        onChange={handleChangeSubjectname}

                    />
                    <TextField
                        type="number"
                        className={classes.SubjectsDialog}
                        label="กลุ่ม"
                        placeholder="9"
                        value={subjectgroup}
                        required
                        onChange={handleChangeSubjectgroup}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        ยกเลิก
                    </Button>
                    <Button type="submit" color="primary" >
                        ยืนยัน
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default Subjects;