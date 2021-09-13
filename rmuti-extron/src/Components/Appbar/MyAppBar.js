import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { withRouter } from "react-router-dom";
import Private from "./Private";
import Cookies from "js-cookie";

import FormHelperText from "@material-ui/core/FormHelperText";

import IconButton from "@material-ui/core/IconButton";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import MailIcon from "@material-ui/icons/Mail";
import BallotTwoToneIcon from "@material-ui/icons/BallotTwoTone";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import AssignmentIcon from "@material-ui/icons/Assignment";
import NaturePeopleTwoToneIcon from "@material-ui/icons/NaturePeopleTwoTone";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoomTwoTone";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import TransferWithinAStationRoundedIcon from "@material-ui/icons/TransferWithinAStationRounded";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";

import Typography from "@material-ui/core/Typography";
// import "@fontsource/roboto";
import "@fontsource/sarabun";

const drawerWidth = 292;
const drawerspace = drawerWidth + 50;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // maxWidth: '80rem',
    margin: "0 auto",
    fontFamily: "sarabun",
  },
  container: {
    marginTop: 175,
    display: "flex",
    justifyContent: "center",
    marginLeft: drawerspace,
    marginRight: 70,
  },

  paperAppBar: {
    backgroundColor: "#f0f4c3",
    padding: theme.spacing(2),
    display: "flex",
    textAlign: "center",
    justifyContent: "space-around",
    alignItems: "baseline",
    fontSize: 26,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 35,
    height: "6.25rem",
    // width: 1000,

    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBar: {
    // overflowX: 'hidden',
    // width: `calc(110% - ${drawerspace}px)`,
    marginLeft: drawerspace,
    // marginRight: 150,
    height: 130,
    // borderRadius: 45,
    // marginTop: 45,
    justifyContent: 'center',
    backgroundColor: "#f0f4c3",
    color: "black",
    // fontSize:  `calc(60% + 1.3vmin)`,
  
  },
  // appBar: {
  //   overflowX: 'hidden',
  //   width: `calc(100% - ${drawerspace}px)`,
  //   marginLeft: drawerspace,
  //   marginRight: 50,
  //   height: 140,
  //   borderRadius: 45,
  //   marginTop: 45,
  //   justifyContent: 'center',
  //   backgroundColor: '#f0f4c3',
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    marginRight: 50,
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  // toolbar: theme.mixins.toolbar,

  toolbar: {
    height: 70,
    alignItems: "center",
    maxWidth: 290,
    margin: "0 auto",
  },

  toolbartab: {
    justifyContent: "space-between",
    left: "-100%",
    opacity: 0,
    zIndex: 1,
    // display: 'block'
  },

  ulList: {
    // width: 290,
    maxWidth: "18.125rem",
    margin: "0 auto",
    marginTop: 25,
    marginBottom: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  ulListTwo: {
    // width: 290,
    maxWidth: "18.125rem",
    margin: "0 auto",
    marginTop: 25,
    marginBottom: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  litsItem: {
    maxWidth: "16.25rem",
    backgroundColor: "#ffcdd2",
    "&:hover": {
      backgroundColor: "#f89eb4",
    },
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 35,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    fontSize:  `calc(60% + 1.3vmin)`,
    color: '#111',
  },

  litsItemTwo: {
    maxWidth: "16.25rem",
    backgroundColor: "#b2dfdb",
    "&:hover": {
      backgroundColor: "#79D2AE",
    },
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 35,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    justifyContent: "",
    fontSize:  `calc(60% + 1.3vmin)`,
    color: '#111',

  },

  litsItemicon: {
    justifyContent: "center",
    margin: 4,
    color: '#111',

  },

  icontoolbar: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  iconLogout: {
    display: "flex",
    justifyContent: "center",
    marginTop: 25,
    // fontSize: '86px',
    color: "#00000",
    marginBottom: 25,
  },

  text: {
    // marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 35, 
    fontSize:  `calc(60% + 1.3vmin)`,
  },
  logout: {
    // backgroundColor: '#E5D0B3',
    // backgroundColor: "#ffe0b2",
    // backgroundColor: "#edff9f",
    // backgroundColor: "#ffe497",
    padding: 8,
    // color: '#D2C779',
  },
  buttonLogout: {
    color: "#fff9c4",
    backgroundColor: "#111",
    "&:hover": {
      backgroundColor: "#40bfb3",
    },
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#ff9800  #111",
    // fontSize: 16,
    fontSize:  `calc(60% + 0.8vmin)`,

  },
  litsItemText: {
    fontSize:  `calc(60% + 1.3vmin)`,

  },
  // ulListGrid: {
  //   fontSize:  `calc(60% + 1.3vmin)`,
  //   maxWidth: `calc(40% + 1.3vmin)`,
  //   margin: "0 auto",
  // }
  
}));

const MyAppBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [click, setClick] = React.useState(true);

  const handleSignout = () => {
    Cookies.remove("token");
    window.location = "/";
  };

  const itemList = [
    {
      text: "หน้าหลัก",
      icon: <DashboardRoundedIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "วิธีการใช้งาน",
      icon: <ListRoundedIcon />,
      onClick: () => history.push("/manual"),
    },
    {
      text: "ระบบตรวจข้อสอบ",
      icon: <ImportantDevicesIcon />,
      onClick: () => history.push("/system"),
    },
    {
      text: "ดาวน์โหลด",
      icon: <GetAppRoundedIcon />,
      onClick: () => history.push("/download"),
    },
  ];

  const itemListtwo = [
    {
      text: "เกี่ยวกับ",
      icon: <DnsRoundedIcon />,
      onClick: () => history.push("/info"),
    },
    {
      text: "ผู้จัดทำ",
      icon: <EmojiPeopleIcon />,
      onClick: () => history.push("/manager"),
    },
  ];

  const handleDrawerOpen = () => {
    setClick(!click);
    console.log(click);
  };

  const handleDrawerClose = () => {
    setClick(false);
  };

  const content = (
      
    <Grid className={classes.ulListGrid}>
      <div className={classes.toolbar}>
        <div className={classes.icontoolbar}>
          <CloudQueueIcon fontSize="large" />
          <NaturePeopleTwoToneIcon fontSize="large" />
        </div>
      </div>


      <List className={classes.ulList} >
        {itemList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem
              className={classes.litsItem}
              button
              key={text}
              onClick={onClick}
            >
              {icon && (
                <ListItemIcon className={classes.litsItemicon}>
                  {icon}
                </ListItemIcon>
              )}
              <ListItemText className={classes.litsItemText} primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />

      <List className={classes.ulListTwo} position="end">
        {itemListtwo.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem
              className={classes.litsItemTwo}
              button
              key={text}
              onClick={onClick}
            >
              {icon && (
                <ListItemIcon className={classes.litsItemicon}>
                  {icon}
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />

      <div className={classes.logout}>
        <div className={classes.iconLogout}>
          <TransferWithinAStationRoundedIcon fontSize="large" />
          <MeetingRoomIcon fontSize="large" />
          <br />
        </div>
        <div className={classes.iconLogout}>
          <Button
            className={classes.buttonLogout}
            variant="outlined"
            fontSize="large"
            onClick={handleSignout}
          >
            ออกจากระบบ
          </Button>
        </div>
      </div>
    </Grid>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: click,
        })}
      >
        <Toolbar>
          {!click ? (
            <IconButton
              color="inherit"
              // aria-label="open drawer"
              onClick={handleDrawerOpen}
              // edge="start"
              className={clsx(classes.menuButton, click && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              // edge="end"
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}
          <b className={classes.text}>ระบบตรวจข้อสอบปรนัย</b>
        </Toolbar>
      </AppBar>

      <Grid container className={classes.container}>
        <Grid item xs={12}
        //  className={classes.activeLi}
        >
          <Hidden
          mdUp
          //  only="lg" 
           >
            <Drawer
              anchor="left"
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={() => setClick(false)}
              open={click}
              variant="temporary"
              // PaperProps={{
              //   sx: {
              //     width: 200,
              //   },
              // }}
            >
              {content}
            </Drawer>
            {/* <Private /> */}
          </Hidden>

          <Hidden xs >
            <Drawer
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
              open={click}
              anchor="left"
              variant="persistent"
              onPointerEnter
              // PaperProps={{
              //   sx: {
              //     width: 300,
              //     top: 64,
              //     height: "calc(100% - 100px)",
              //   },
              // }}
            >
              {content}
            </Drawer>
            <Private />
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(MyAppBar);
