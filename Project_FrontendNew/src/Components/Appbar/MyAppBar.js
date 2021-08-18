import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withRouter } from "react-router-dom";
import Private from './Private';


import FormHelperText from '@material-ui/core/FormHelperText';


import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded'; import MailIcon from '@material-ui/icons/Mail';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone'; import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NaturePeopleTwoToneIcon from '@material-ui/icons/NaturePeopleTwoTone';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoomTwoTone';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import TransferWithinAStationRoundedIcon from '@material-ui/icons/TransferWithinAStationRounded';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import '@fontsource/roboto';
import '@fontsource/sarabun';


import './MyAppBar';

const drawerWidth = 292;
const drawerspace = drawerWidth + 50;


const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    fontFamily: "sarabun",

  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: drawerspace,
    marginRight: 50,
  },

  paperAppBar: {
    backgroundColor: '#f0f4c3',
    padding: theme.spacing(2),
    textAlign: 'center',
    fontSize: 26,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 35,
    height: 100,
    // width: 1000,

  },

  appBar: {
    overflowX: 'hidden',
    width: `calc(100% - ${drawerspace}px)`,
    marginLeft: drawerspace,
    marginRight: 50,
    height: 140,
    borderRadius: 45,
    marginTop: 45,
    justifyContent: 'center',
    backgroundColor: '#f0f4c3',
  },
  drawer: {
    marginRight: 50,

  },
  drawerPaper: {
    width: drawerWidth,
  },

  toolbar: theme.mixins.toolbar,

  toolbar: {
    height: 140,
    alignItems: 'center',

  },

  toolbartab: {
    justifyContent: 'space-between',

  },

  ulList: {
    width: 290,
    marginTop: 25,
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  ulListTwo: {
    width: 290,
    marginTop: 25,
    marginBottom: 25,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  litsItem: {
    width: 260,
    backgroundColor: '#ffcdd2',
    '&:hover': {
      backgroundColor: '#f89eb4',
    },
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 35,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },

  litsItemTwo: {
    width: 260,
    backgroundColor: '#b2dfdb',
    '&:hover': {
    backgroundColor: '#79D2AE'
  },
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 35,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: '',

  },

  litsItemicon: {
    justifyContent: 'center',
    margin: 4,
  },

  icontoolbar: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },

  iconLogout: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 25,
    // fontSize: '86px',
    color: '#00000',
    marginBottom: 25,

  },

  text: {
    marginTop: 15,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {
    // backgroundColor: '#E5D0B3',
    backgroundColor: '#d4c4fb',
    // color: '#D2C779',
  },
  buttonLogout: {
    color: '#00000',
    backgroundColor: '#fad0c3',
    borderWidth: 3,
    borderRadius: 15,
  }
}));

const MyAppBar = props => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const itemList = [
    {
      text: "หน้าหลัก",
      icon: <DashboardRoundedIcon />,
      onClick: () => history.push("/")
    },
    {
      text: "วิธีการใช้งาน",
      icon: <ListRoundedIcon />,
      onClick: () => history.push("/manual")
    },
    {
      text: "ระบบตรวจข้อสอบ",
      icon: <ImportantDevicesIcon />,
      onClick: () => history.push("/system")
    },
    {
      text: "ดาวน์โหลด",
      icon: <GetAppRoundedIcon />,
      onClick: () => history.push("/download")
    },
  ]

  const itemListtwo = [
    {
      text: "เกี่ยวกับ",
      icon: <DnsRoundedIcon />,
      onClick: () => history.push("/info")
    },
    {
      text: "ผู้จัดทำ",
      icon: <EmojiPeopleIcon />,
      onClick: () => history.push("/manager")
    },
  ]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />


      <Grid container className={classes.container} xs={12} md={12} sm={12} >
        <Grid item xs={12}>
          <Paper className={classes.paperAppBar}>
            <b className={classes.text} > ระบบตรวจข้อสอบปรนัย</b>
          </Paper>

          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              // [classes.drawerOpen]: open,
              // [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                // [classes.drawerOpen]: open,
                // [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar} >

              <div className={classes.icontoolbar}>
                <CloudQueueIcon fontSize="large" />
                <NaturePeopleTwoToneIcon fontSize="large" />
              </div>
              {/* <IconButton 
                  className={classes.closeicon}
                  onClick={handleDrawerClose}
                  position="end">
                  <b> CLOSE</b>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton> */}
            </div>

            <List className={classes.ulList} position="end" >
              {itemList.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem className={classes.litsItem} button key={text} onClick={onClick}
                  >
                    {icon && <ListItemIcon className={classes.litsItemicon} >{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
            <Divider />

            <List className={classes.ulListTwo} position="end" >

              {itemListtwo.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem className={classes.litsItemTwo} button key={text} onClick={onClick}>
                    {icon && <ListItemIcon className={classes.litsItemicon}>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            <div className={classes.logout} >
              <div className={classes.iconLogout}  >
                <TransferWithinAStationRoundedIcon fontSize="large" />
                <MeetingRoomIcon fontSize="large" />
                <br />
              </div>
              <div className={classes.iconLogout} >
                <Button className={classes.buttonLogout} variant="outlined"  fontSize="large" href="#outlined-buttons">
                  Logout 
                </Button>
              </div>
            </div>

          </Drawer >
          <Private />


        </Grid>
      </Grid>
    </div >
  );
};



export default withRouter(MyAppBar);
