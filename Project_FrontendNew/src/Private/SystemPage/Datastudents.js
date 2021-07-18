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
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    filelist: {
        padding: 20,
        width: '100%',
    },
}));

const Datastudents = ({ stepData }) => {

    const classes = useStyles();
    const [files, setFiles] = useState([])

    console.log(files)

    if (files.length > 0) {
        stepData(true);
        console.log("files data:", true);
    } else {
        stepData(false)
        console.log("files data:", false);
    }

    // useEffect(async()=>{
    //     await axios.post()

    // },[])



    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item xs={12} md={8} sm={12} className={classes.dropzone} >
                    <DropzoneArea
                        dropzoneText={
                            <Typography Typography variant="h6" color="textPrimary" display="block">
                                คลิก หรือวางข้อมูลผู้เข้าสอบที่นี่ รองรับเฉพาะ .csv
                            </Typography>
                        }
                        onChange={(file) => setFiles(file)}
                        acceptedFiles={['.csv']}
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
                                            <DescriptionIcon />
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

export default Datastudents
