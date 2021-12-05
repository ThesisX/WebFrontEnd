import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs({ isProgress, text }) {
    const [open, setOpen] = React.useState(isProgress);

    const handleClose = () => {
        setOpen(false);
        window.location.reload();
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="max-width-dialog-title" open={open} fullWidth={true} maxWidth={'sm'}>
                <DialogTitle id="max-width-dialog-title" onClose={handleClose}>
                    ดีใจด้วยการตรวจข้อสอบ สำเร็จแล้ว!!
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <ul>
                            <li> ใช้เวลา: {text.time} นาที </li>
                            <li> ข้อสอบทั้งหมด {text.total} ชุด </li>
                            <li> ตรวจสำเร็จ: {text.success} ชุด </li>
                            <li> ไม่สำเร็จ: {text.fails} ชุด </li>
                        </ul>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        ปิด
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
