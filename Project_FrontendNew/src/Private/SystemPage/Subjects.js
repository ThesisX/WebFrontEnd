import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

import Cookies from 'js-cookie';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    subjectgroup: {
        width: '100%',
        margin: '10px',

    },
    subjectLabel: {
        marginRight:10,
    },
    
    subjectInputNameDisabled: {
        width:'20%',
    },
    subjectInputGroupDisabled: {
        width:'10%',
    },
    subjectInputName: {
        marginRight:20,
        width: '50%',
    },
    subjectInputGroup: {
        width: '40%',
    },
    subjectSubmit: {
        marginLeft: '5px',
        height: '100%',
    },
    divider: {
        marginBottom:20,
    }
}));

const Subjects = ({getActivate}) => {
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

        if(subjectname === ""){
            setSubjectname(sname);
            setSubjectgroup(uid);
            setLableDialog("แก้ไขรายวิชา");
        }

        setOpen(false);
    };

    const handleChangeSubjectname = (e) => {
        let sname = e.target.value;
        setSubjectname(sname);

        if (sname !== ""){
            setLableDialog("แก้ไขรายวิชา");
        }
        else{
            setLableDialog("สร้างรายวิชา");
        }
    };

    const handleChangeSubjectgroup = (e) => {
        let gname = e.target.value;
        setSubjectgroup(gname);
    }

    if(subjectname && subjectgroup){
        getActivate(true);
    }

    return (
        <div>
            <div className={classes.subjectgroup}>
                <Typography className={classes.subjectLabel} variant="subtitle1" component="subtitle1">
                    <b>ชื่อรายวิชา</b>
                </Typography>
                <InputBase
                    className={classes.subjectInputNameDisabled}
                    placeholder="วิชาคอมพิวเตอร์"
                    inputProps={{ 'aria-label': 'วิชาคอมพิวเตอร์' }}
                    value={subjectname}
                    disabled

                />
                <Typography className={classes.subjectLabel} variant="subtitle1" component="subtitle1">
                    <b>กลุ่มที่</b>
                </Typography>
                <InputBase
                    className={classes.subjectInputGroupDisabled}
                    placeholder="9"
                    inputProps={{ 'aria-label': '9' }}
                    value={subjectgroup}
                    disabled

                />
                <Button className={classes.subjectSubmit} variant="outlined" size="medium" color="primary" onClick={handleClickOpen}>
                    {lableDialog}
                </Button>
            </div>
            <Divider light className={classes.divider} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">สร้างรายวิชา</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        คุณสามารถสร้างรายวิชาได้โดยการตั้งชื่อรายวิชา เช่น วิทยาศาตร์ คอมพิวเตอร์ เป็นต้น หากคุณไม่ได้ตั้งชื่อรายวิชาระบบจะทำการตั้งชื่อให้อัตโนมัติ
                    </DialogContentText>
                    <TextField
                        name="subjectname"
                        className={classes.subjectInputName}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="ชื่อรายวิชา"
                        placeholder="วิชาคอมพิวเตอร์"
                        type="text"
                        value={subjectname}
                        onChange={handleChangeSubjectname}
                        
                        required
                    />
                    <TextField
                        name="subjectname"
                        className={classes.subjectInputGroup}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="ชื่อกลุ่มวิชา"
                        placeholder="9"
                        value={subjectgroup}
                        onChange={handleChangeSubjectgroup}
                        type="text"
                        
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        ยกเลิก
                    </Button>
                    <Button type="submit" color="primary">
                        ยืนยัน
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Subjects;