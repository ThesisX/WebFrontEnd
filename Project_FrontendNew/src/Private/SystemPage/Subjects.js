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
import CasinoIcon from '@material-ui/icons/Casino';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => ({

    Subjects: {
        marginRight: 10,
        marginBottom: 10,
    },
    SubjectsDialog: {
        marginRight: 5,
        width: '40%',
    },
    fRight: {
        float: 'right',
        marginRight: 10,
        marginBottom: 10,
    },
    AutoFieldButton:{
        float: 'right',
        marginRight: 10,
        marginBottom: 10,
        color: blue[500],
        // backgroundColor: blue[500],
        // '&:hover': {
        //     backgroundColor: blue[500],
        //   },
    },
    ClearButtton:{
        marginLeft:10,
    }
}));
const Subjects = ({ getActivate, sid }) => {
    const tokenCookies = Cookies.get("token");

    const [open, setOpen] = useState(true);
    const [lableDialog, setLableDialog] = useState("สร้างรายวิชา");
    const [subjectid, setSubjectid] = useState(0);
    const [subjectname, setSubjectname] = useState("");
    const [subjectgroup, setSubjectgroup] = useState("");
    const [submitStatus, setSubmitStatus] = useState(true);

    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const onReset = () => {
        setSubjectname("");
        setSubjectgroup("");
    };

    const handleAutoField = () => {
        let n = new Date();
        let t = n.getTime();
        let sname = `A-${t}`;

        setSubjectname(sname);
        setSubjectgroup("1");
        setLableDialog("แก้ไขรายวิชา");

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

    const handleSubmit = async () => {

        if (subjectid === 0) {
            const form_data = {
                sub_id: 0,
                sub_name: subjectname,
                sub_group: subjectgroup,
                sub_create: 0,
            };

            const optionsPost = {
                method: 'POST',
                url: `${BASE_URL}/subjects/create-subject/`,
                headers: { 'Authorization': `Bearer ${tokenCookies}` },
                data: form_data,
            };

            const optionsGetID = {
                method: 'GET',
                url: `${BASE_URL}/subjects/getid/${subjectname}/${subjectgroup}`,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${tokenCookies}`
                },
            };

            /* Create Subject */
            await axios(optionsPost)
                .then(res => {
                    console.log('Create Subject :' + res.data)
                });

            /* Get Subject ID.*/
            await axios(optionsGetID)
                .then(res => {
                    sid(res.data);
                    setSubjectid(res.data);
                });

        } else {

            /* Patch Subject.*/
            const optionsPatch = {
                method: 'PUT',
                url: `${BASE_URL}/subjects/update-subject/${subjectid}/${subjectname}/${subjectgroup}`,
                headers: { Authorization: `Bearer ${tokenCookies}` }
            };

            await axios(optionsPatch)
                .then(res => {
                    console.log('Patch Subject :' + res.data);
                });
        }

        setOpen(false);
    };

    useEffect(() => {
        if (subjectname !== "" && subjectgroup !== "") {
            getActivate(false);
            setSubmitStatus(false);
        } else {
            getActivate(true);
            setSubmitStatus(true);
        }
    });


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
                        min="1"
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
            <Dialog open={open} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">สร้างรายวิชา</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        คำแนะนำ: สร้างรายวิชาได้โดยการตั้งชื่อรายวิชา เช่น วิทยาศาตร์ คอมพิวเตอร์ เป็นต้น และตั้งกลุ่มเรียนเป็นตัวเลขเช่น 1 30 567 เป็นต้น ทั้งนี้คุณสามารถสร้างรายวิชาได้โดยอัตโนมัติเพียงคลิกที่ปุ่ม "สร้างอัตโนมัติ"
                    </DialogContentText>
                    <TextField
                        type="text"
                        autoFocus
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
                    <Grid container item xs={12} >
                        <Grid item xs={4}>
                            <Button className={classes.ClearButtton}
                                onClick={onReset} 
                                color="secondary" 
                                startIcon={<DeleteIcon />}
                            >
                                ล้าง
                            </Button>
                        </Grid>
                        <Grid item xs={8}>
                            <Button onClick={handleSubmit}
                                color="primary"
                                disabled={submitStatus}
                                className={classes.fRight}
                                startIcon={<SaveIcon />}
                            >
                                ยืนยัน
                            </Button>
                            <Button onClick={handleAutoField}
                                className={classes.AutoFieldButton}
                                startIcon={<CasinoIcon />}
                            >
                                สร้างอัตโนมัติ
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default Subjects;