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
import { withRouter } from "react-router-dom";
import Private from "./Private";
import Cookies from "js-cookie";

import IconButton from "@material-ui/core/IconButton";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import NaturePeopleTwoToneIcon from "@material-ui/icons/NaturePeopleTwoTone";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoomTwoTone";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import TransferWithinAStationRoundedIcon from "@material-ui/icons/TransferWithinAStationRounded";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import "@fontsource/sarabun";
import logormuti from "../Appbar/Logo_RMUTI.png";
import logocpe from "../Appbar/logocpe.png";
// import imagelogo from "../Appbar/logormuti.jpg"
// import  from "../../Page/Manager/3.jpg";

const drawerWidth = 292;
const drawerspace = drawerWidth + 50;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // maxWidth: '80rem',
    margin: "0 auto",
    fontFamily: "sarabun",
    fontSize: `calc(60% + 0.6vmin)`,

  },
  container: {
    marginTop: 180,
    marginLeft: 50,
    marginRight: 50,
    display: "flex",
    justifyContent: "center",
  },

  containerShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerspace,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  appBar: {
    marginLeft: drawerspace,
    height: 130,
    justifyContent: "center",
    backgroundColor: "#f0f4c3",
    color: "black",
  },

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
    fontSize: `calc(60% + 0.6vmin)`,

  },

  toolbartab: {
    display: "flex",
    justifyContent: "space-between",
    left: "-100%",
    opacity: 0,
    zIndex: 1,
    fontSize: `calc(60% + 0.6vmin)`,

    // display: 'block'
  },

  ulList: {
    // width: 290,
    width: `calc(90% + 0.6vmin)`,
    margin: "0 auto",
    marginTop: 25,
    marginBottom: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: `calc(60% + 0.6vmin)`,

  },

  ulListTwo: {
    // width: 290,
    width: `calc(90% + 0.6vmin)`,
    margin: "0 auto",
    marginTop: 25,
    marginBottom: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: `calc(60% + 0.6vmin)`,

  },

  litsItem: {
    width: `calc(90% + 0.6vmin)`,
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
    fontSize: `calc(60% + 0.6vmin)`,
    color: "#111",
  },

  litsItemTwo: {
    width: `calc(90% + 0.6vmin)`,
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
    fontSize: `calc(60% + 0.6vmin)`,
    color: "#111",
  },

  litsItemicon: {
    fontSize: `calc(50% + 0.6vmin)`,
    justifyContent: "center",
    margin: 4,
    color: "#111",
  },

  icontoolbar: {
    fontSize: `calc(50% + 0.6vmin)`,
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  iconLogout: {
    fontSize: `calc(60% + 0.6vmin)`,
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
    fontSize: `calc(60% + 1.3vmin)`,
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
    fontSize: `calc(60% + 0.8vmin)`,
  },
  litsItemText: {
    fontSize: `calc(60% + 1.3vmin)`,
  },

  img: {
    
    width: `calc(15.5% + 1.3vmin)`,
    // margin: 5,
  },

  gridimg: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    // marginRight: -100,
  },

  toolbarall: {
    display: "flex",
    justifyContent: "space-between",
  },

  imglogocpe: {
    width: `calc(27% + 1.3vmin)`,
    padding: 6

    // backgroundColor: "#fff9c4",
  }
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

  const MenuLists = (
    <Grid className={classes.ulListGrid}>
      <div className={classes.toolbar}>
        <div className={classes.icontoolbar}>
          <CloudQueueIcon fontSize="large" />
          <NaturePeopleTwoToneIcon fontSize="large" />
        </div>
      </div>

      <List className={classes.ulList}>
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
        <Toolbar className={classes.toolbarall}>
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
          <Grid
            className={classes.gridimg}
            style={{
              // backgroundColor: "ActiveBorder",
              // backgroundSize: "contain",

              // height: "34vh",
              // overflow: "hidden",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              className={classes.img}
              src={logormuti}
              alt="complex"
              style={{
                // backgroundColor: "ActiveBorder",

                backgroundSize: "contain",
                // opacity: "100%",

                // height: "34vh",
                // overflow: "hidden",
                backgroundRepeat: "no-repeat",
              }}
            />
            <img
              className={classes.imglogocpe}
              src={logocpe}
              alt="complex"
              style={{
                backgroundColor: "#2f2f2f",
                backgroundSize: "contain",
                borderRadius: 5,
                // height: "34vh",
                // overflow: "hidden",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid
        container
        className={clsx(classes.container, {
          [classes.containerShift]: click,
        })}
      >
        <Grid item xs={12}>
          <Hidden xs>
            <Drawer
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
              open={click}
              anchor="left"
              variant="persistent"
              onPointerEnter
            >
              {MenuLists}
            </Drawer>
            <Private />
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(MyAppBar);
