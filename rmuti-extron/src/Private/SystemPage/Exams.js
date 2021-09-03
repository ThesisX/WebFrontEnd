import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import { DropzoneArea } from 'material-ui-dropzone'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Divider, Paper } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
    PaperList: {
        padding: 20,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 250,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        listStyleType: 'none',
        backgroundColor: 'inherit',
        padding: 0,
    },
    GridDropzone:{
        margin: 'auto',
    },
}));

const Exams = ({ stepExam, toStorage, examList }) => {
    const [filelist, setFilelist] = useState([...examList]);
    const classes = useStyles();

    const HandleAdd = newFiles => {
        setFilelist(newFiles);
        toStorage(newFiles);
    };

    const HandleRemove = index => {
        if (index !== -1) {
            let c = window.confirm("คุณต้องการลบ หรือไม่");
            if (c) {
                let newArr = [...filelist];
                newArr.splice(index, 1);
                setFilelist(newArr);
                toStorage(newArr);
            }
        }
    };

    useEffect(() => {
        if (filelist.length > 0) {
            stepExam(true);
        } else {
            stepExam(false);
        }
    });

    console.log("In List: ", filelist);

    return (


        < div >
            <Grid container spacing={1} >
                <Grid container item xs={12} md={8} sm={12} className={classes.GridDropzone}>
                    <DropzoneArea
                        dropzoneText={
                            <Typography Typography variant="h6" color="textPrimary" display="block">
                                คลิก หรือวางข้อสอบที่นี่ รองรับเฉพาะ .jpeg .jpg .png เท่านั้น
                            </Typography>
                        }
                        // initialFiles={filelist}
                        fileObjects={filelist}
                        onChange={HandleAdd}
                        acceptedFiles={['.jpeg', '.jpg', '.png']}
                        maxFileSize={5000000}
                        alertSnackbarProps={{
                            autoHideDuration: 5000,
                        }}
                        showPreviewsInDropzone={false}
                        filesLimit={80}
                        showAlerts={false}
                        onDelete={HandleRemove} 
                        showPreviews={true}
                        useChipsForPreview
                        previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
                        previewChipProps={{ classes: { root: classes.previewChip } }}
                        previewText="รายการที่อัปโหลด"
                    />
                </Grid>
            </Grid >
        </div >
    )
}

export default Exams;
