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
import ImageIcon from '@material-ui/icons/Image';

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

const Answer = ({ stepAns, toStorage, ansList }) => {

    const classes = useStyles();

    const getAvatarType = (n) => {
        if (n.slice(-4) == '.csv') {
            return <DescriptionIcon />
        } else {
            return <ImageIcon />
        }
    };

    const onDelete = () => {
        let c = window.confirm("ต้องการลบ หรือไม่");
        if (c) {
            toStorage([]);
            stepAns(false);
        }
    };

    const onAdd = (f) => {
        if (f.length > 0) {
            toStorage(f);
            stepAns(true);
        }
    };

    useEffect(() => {
        if (ansList.length > 0) {
            console.log("data zone is:", true);
            stepAns(true);
        } else {
            console.log("data zone is:", false);
            stepAns(false);
        }

    }, []);

    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item xs={7} md={7} sm={7} className={classes.dropzone} >
                    <Paper className={classes.PaperDropZone}>
                        <DropzoneArea
                            dropzoneText={
                                <div>
                                    <Typography Typography variant="h4" color="primary" display="block">
                                        คลิก หรือวางเฉลยข้อสอบที่นี่
                                    </Typography>
                                    <Typography Typography variant="subtitle1" color="error" display="block">
                                        ** รองรับเฉพาะ .csv .jpeg .jpg .png เท่านั้น **
                                    </Typography>
                                </div>
                            }
                            onChange={(f) => onAdd(f)}
                            acceptedFiles={['.csv', '.jpeg', '.jpg', '.png']}
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
                            {ansList.map((f) => (
                                <ListItem key={f.name}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            {getAvatarType(f.name)}
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

export default Answer;
