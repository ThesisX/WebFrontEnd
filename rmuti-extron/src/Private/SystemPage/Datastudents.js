import React, { useState, useEffect } from 'react'

import { DropzoneArea } from 'material-ui-dropzone'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Divider, Paper } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
    filelist: {
        padding: 20,
        width: '100%',
    },
    PaperDropZone: {
        width: '100%',
        padding: 5,
        backgroundImage: 'linear-gradient( 136deg, rgb(144, 202, 249) 0%, rgb(47, 154, 247) 50%, rgb(103, 58, 183) 100%)',

    },
}));

const Datastudents = ({ stepData, toStorage, dataList }) => {

    const classes = useStyles();

    const onDelete = () => {
        let c = window.confirm("ต้องการลบ หรือไม่");
        if (c) {
            toStorage([]);
            stepData(false);
        }
    };

    const onAdd = (f) => {
        if (f.length > 0) {
            // console.log(f);
            toStorage(f);
            stepData(true);
        }
    };

    useEffect(() => {
        if (dataList.length > 0) {
            // console.log("data zone is:", true);
            stepData(true);
        } else {
            // console.log("data zone is:", false);
            stepData(false);
        }

    }, []);

    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item xs={7} md={7} sm={7} className={classes.dropzone} >
                    <Paper className={classes.PaperDropZone}>
                        <DropzoneArea
                            className={classes.dropzoneBorder}
                            dropzoneText={
                                <div>
                                    <Typography Typography variant="h4" color="primary" display="block">
                                        คลิก หรือวางข้อมูลผู้เข้าสอบที่นี่
                                    </Typography>
                                    <Typography Typography variant="subtitle1" color="error" display="block">
                                        ** รองรับเฉพาะ .csv เท่านั้น **
                                    </Typography>
                                </div>
                            }
                            onChange={(f) => onAdd(f)}
                            acceptedFiles={['.csv']}
                            maxFileSize={5000000}
                            alertSnackbarProps={{
                                autoHideDuration: 5000,
                            }}

                            showPreviewsInDropzone={false}
                            filesLimit={1}
                            showAlerts={false}
                        />
                    </Paper>
                </Grid>
                <Grid container item xs={5} md sm={5} >
                    <Paper className={classes.filelist}>
                        <Typography variant="h6" color="textPrimary" display="block">
                            รายการที่อัปโหลด
                        </Typography>
                        <Divider />
                        <List dense={false}>
                            {dataList.map((f) => (
                                <ListItem key={f.name}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <DescriptionIcon />
                                        </Avatar>
                                    </ListItemAvatar>

                                    <ListItemText primary={f.name} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon onClick={onDelete} />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Datastudents;
