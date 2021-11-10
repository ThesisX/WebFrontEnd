import React, { useState } from "react";

import Cardinfo from "./Cardinfo";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import myimage0 from "../../Page/Manager/nn2.jpg";
import myimage1 from "../../Page/Manager/nn1.jpg";
import { CallReceived, TramRounded } from "@material-ui/icons";
import myimage from "../Info/dinosaur.png";
import myimage2 from "../Info/info.png";
import myimage3 from "../Info/facebook-logo.png";
import myimage4 from "../Info/title.jpg";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    // fontSize: "1rem",
    fontSize: `calc(60% + 0.8vmin)`,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // fontSize: `calc(30% + 1.5vmin)`,
    fontSize: "1rem",
  },
  box: {
    margin: 0,
    fontSize: `calc(60% + 0.8vmin)`,
  },

  grid: {
    // padding: "92.688rem",
    width: `calc(90% + 0.8vmin)`,
    fontSize: `calc(110% + 0.6vmin)`,
    textAlign: "center",
    fontFamily: "sarabun",
    // width: "90.688rem",
  },

  img: {
    // marginLeft: 100,
    width: "21.688rem",

    // width: `calc(60% + 0.6vmin)`,
  },

  h1text: {
    textAlign: "center",
    // height: 250,
    border: "#eeeeff",
    // padding: "506",
    paddingTop: "9rem",
    paddingRight: "50rem",
    // backgroundColor: "#00000",
    // width: "80.688rem",

    // fontSize: `calc(110% + 0.8vmin)`,
  },
}));

const Info = () => {
  const classes = useStyles();

  const themeInstance = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  };

  const defaultProps = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    style: { width: "5rem", height: "5rem" },
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.grid}>
          <header
            style={{
              background: "url(" + myimage4 + ")",
              backgroundSize: "contain",
              height: "34vh",
              // overflow: "hidden",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className={classes.h1text}>
              <b>เกี่ยวกับ</b>{" "}
            </p>
            {/* <h1 className={classes.h1text}>เกี่ยวกับ</h1> */}
            {/* <img className={classes.img} src={myimage4} alt="complex"></img> */}
          </header>
          <Paper className={classes.paper}>
            
            <Cardinfo></Cardinfo>
            {/* <Grid>
                <img className={classes.img} src={myimage} alt="complex"></img>
                <h2>เว็บมีปัญหาติดต่อ</h2> */}
            {/* <link href="https://www.facebook.com/sathaphorn.ma" >
                  <img src={myimage3}  /> 
                  <p>สถาพร</p>
                </link>
                <link href="https://www.facebook.com/bentohanashi" >
                  <img src={myimage3}  /> 
                  <p>เบญจพร</p>
                </link> */}
            {/* </Grid> */}
            {/* <img className={classes.img2} src={myimage2} alt="complex" /> */}
            <br />
            {/* </Grid> */}
            <br />
          </Paper>
        </Grid>
            CPE RMUTI ©2021 Created by CPE Group 61231
      </Grid>
    </div>
  );
};

export default Info;
