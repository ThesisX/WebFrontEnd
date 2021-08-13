import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
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
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';

const drawerWidth = 290;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    backgroundColor: '#FFB6C1',

    // textColor: '#000000'

  },
  hide: {
    display: 'none',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    transparent: "50%",

  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#EEDD82',

  },
  drawerClose: {
    // width: 28,
    // transition: theme.transitions.create('width', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    overflowX: 'hidden',
    width: theme.spacing(6) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(10.9) + 1,
      backgroundColor: '#EEDD82',
      display: 'flex',

    },
  },
  toolbar: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    marginBottom: 28,
    // content: {
    // flexGrow: -1,
    //   padding: theme.spacing(3),
    // },

  },
  toolbartab: {
    flexGrow: 40,
    padding: theme.spacing(4, 4),
    backgroundColor: '#EEDD82',
    justifyContent: 'space-between',

  },
  content: {
    flexGrow: 0,
    padding: theme.spacing(10, 20),


    // marginTop:60,
  },
  ulList: {
    margin: 18,
    borderRadius: 15,
    justifyContent: 'space-between',
    backgroundColor: '#FFFACD	',
  },
  listitem: {
    padding: 13,
    // justifyContent: 'space-',

  },
  closeicon: {
    //  margin: 18,
    backgroundColor: '#FFB6C1',
    borderRadius: 25,
    marginTop: '30px',
    // marginBottom: '10px',

  },
  iconLogout: {
    // marginInline: 550,
    borderRadius: 15,
    backgroundColor: '#FFB6C1',

    // justifycontent: 'space-between',
    // justifyContent: ,

  },
  h6text: {
    // marginTop: -40,
    // marginLeft: 100,

    // border: 50,

  }

}));



// export default function MiniDrawer() {
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
      text: "ระบบตรวจข้อสอบ",
      icon: <ImportantDevicesIcon />,
      onClick: () => history.push("/system")
    },
    // {
    //   text: "วิธีการใช้งาน",
    //   icon: <BallotTwoToneIcon />,
    //   onClick: () => history.push("/contact")
    // },
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
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >

        <Toolbar className={classes.toolbartab}>

          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.h6text}
            variant="h6"
            noWrap
            color="textSecondary"
            edge="start"
          >
            ระบบตรวจข้อสอบปรนัย
          </Typography>

          <IconButton

            fontSize="large"
            className={classes.iconLogout}
            color="black"
          >
            <FormHelperText id="filled-weight-helper-text">LogOut</FormHelperText>
            <MeetingRoomTwoToneIcon />
          </IconButton>

        </Toolbar>

      </AppBar>
     
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            className={classes.closeicon}
            onClick={handleDrawerClose}
            position="end">
            <b> CLOSE</b>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        <List className={classes.ulList} position="end">
          {itemList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}

          {/* {[['หน้าหลัก', <DashboardRoundedIcon />],
          ['ระบบตรวจข้อสอบ', <ImportantDevicesIcon />],
          ['วิธีการใช้งาน', <BallotTwoToneIcon />],

          ].map((text, index) => (
            <ListItem className={classes.listitem} button key={index}>
              <ListItemIcon>
                {text[1]}
              </ListItemIcon>
              <ListItemText primary={text[0]} />
            </ListItem>

          ))} */}
        </List>
        <Divider />
        <List className={classes.ulList}>
          {/* {['เกี่ยวกับ', 'ผู้จัดทำ'].map((text, index) => (
            <ListItem button key={text} className={classes.listitem}>
              <ListItemIcon>{index % 2 === 0 ? <DnsRoundedIcon /> : <NaturePeopleTwoToneIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

        </List>
      </Drawer>
      <Grid xs={12} md={8} sm={12} className={classes.content}>
        <div className={classes.toolbar} />
          <Private/>
      </Grid>
    </div>
  );
};



export default withRouter(MyAppBar);
