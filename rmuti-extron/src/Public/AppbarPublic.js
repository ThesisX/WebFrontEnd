import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from "@material-ui/core";
import logormuti from "../Public/Tabbar/Logo_RMUTI.png";
import logocpe from "../Public/Tabbar/logocpe.png";



const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // margin: 0,
    fontFamily: "sarabun",

  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  text: {
    // marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // paddingLeft: 830,
    fontSize: `calc(85% + 0.3vmin)`,
  },
  gridimg: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    // marginRight: -100,
  },
  img: {
    width: `calc(15.5% + 0.3vmin)`,
    // margin: 5,
  },
  imglogocpe: {
    width: `calc(27% + 0.3vmin)`,
    padding: 6,
 // backgroundColor: "#fff9c4",
  },
  appBar: {
    height: 130,
    justifyContent: "center",
    // backgroundColor: "#f0f4c3",
    backgroundColor: "#1c1a18", //1c1a18
    color: "#ffe2c7",
    fontSize: `calc(100% + 0.8vmin)`,
    // width: `calc(100% + 0.6vmin)`,

  },
  toolbarall: {
    // width: `calc(100% + 0.6vmin)`,
    fontSize: `calc(80% + 0.1vmin)`,
    display: "flex",
    // justifyContent: "space-between",
    justifyContent: "space-evenly",
    // space-evenly
  },

}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolbarall} >
          
      <b className={classes.text} >ระบบตรวจข้อสอบปรนัย</b>

        <Grid
            className={classes.gridimg}
            style={{
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              className={classes.img}
              src={logormuti}
              alt="complex"
              style={{
                // backgroundColor: "ActiveBorder",

                // backgroundSize: "",
                // opacity: "100%",

                // height: "34vh",
                overflow: "hidden",
                // backgroundRepeat: "no-repeat",
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
    </div>
  );
}
