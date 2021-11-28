import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import WorkIcon from '@material-ui/icons/Work';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    ListProfile: {
        width: '100%',
        paddingTop: 5,
        paddingLeft: 20,
    }
});

export default function DataLists({ props }) {

    const classes = useStyles();

    return (
        <>
            <Typography variant="h5">ข้อมูลส่วนตัว</Typography>

            <List className={classes.ListProfile}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="ชื่อ-สกุล" secondary={props.full_name} />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AssignmentIndIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="ชื่อผู้ใข้งาน" secondary={props.username} />
                        </ListItem>
                    </Grid>
                    <Grid item xs={6}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="โรงเรียน/มหาวิทยาลัย" secondary={props.school} />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LocationOnIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="จังหวัด" secondary={props.province} />
                        </ListItem>
                    </Grid>
                </Grid>
            </List>
        </>
    );
}