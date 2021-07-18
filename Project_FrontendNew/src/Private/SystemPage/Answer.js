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
}));

const Answer = ({ stepAns }) => {

    const classes = useStyles();
    const [files, setFiles] = useState([])

    console.log(files)

    const getAvatarType = (file) => {
        if (file.name.slice(-4) == '.csv') {
            return <DescriptionIcon />
        } else {
            return <ImageIcon />
        }
    }

    if (files.length > 0) {
        stepAns(true);
        console.log("files ans:", true);
    } else {
        stepAns(false)
        console.log("files ans:", false);
    }

    console.log(files);
    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item xs={12} md={8} sm={12} className={classes.dropzone} >
                    <DropzoneArea
                        dropzoneText={
                            <Typography Typography variant="h6" color="textPrimary" display="block">
                                คลิก หรือวางเฉลยข้อสอบที่นี่ รองรับเฉพาะ .csv .jpg .png
                            </Typography>
                        }
                        onChange={(file) => setFiles(file)}
                        acceptedFiles={['image/jpeg', 'image/png', '.csv']}
                        maxFileSize={5000000}
                        alertSnackbarProps={{
                            autoHideDuration: 5000,
                        }}
                        showPreviewsInDropzone={false}
                        filesLimit={1}
                        showAlerts={false}
                    />
                </Grid>
                <Grid container item xs={12} md sm={12} >
                    <Paper className={classes.filelist}>
                        <Typography variant="h6" color="textPrimary" display="block">
                            รายการที่อัปโหลด
                        </Typography>
                        <Divider />
                        <List dense={false}>
                            {files.map((file) => (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            {getAvatarType(file)}
                                        </Avatar>
                                    </ListItemAvatar>

                                    <ListItemText primary={file.name} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon onClick={() => setFiles([])} />
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

export default Answer
