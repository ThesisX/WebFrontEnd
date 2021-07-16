import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const Subjects = ({ handlegetSubjectname }) => {
    
    const [open, setOpen] = useState(false);
    const [subname, setSubname] = useState(handlegetSubjectname)

    const handleChangeSubjectName = () => {
        setSubname(subname)
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    // handlegetSubjectname(subname);
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                แก้ไข
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">แก้ไขชื่อรายวิชา</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        คุณสามารถเปลี่ยนชื่อรายวิชาได้ที่นี่โดยขึ้นต้นด้วยคำว่า "วิชา" หรือไม่ก็ได้ เช่น วิชาวิทยาศาตร์ หรือ วิทยาศาตร์ เป็นต้น
                    </DialogContentText>
                    <TextField
                        autoFocus
                        type="text"
                        margin="dense"
                        id="subject_name"
                        label="ชื่อรายวิชา"
                        value={subname}
                        onChange={handleChangeSubjectName}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        ยกเลิก
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        ยินยัน
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Subjects;