import React, { useState } from "react";
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
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // fontSize: "1rem",
    fontSize: `calc(30% + 1.3vmin)`,
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
 
  img: {
    // marginLeft: 100,
    borderRadius: 62,
    width: `calc(100% + 0.7vmin)`,

  },
  
  h1text: {
    textAlign: "center",
    // height: 250,
    // border: "50px  #eeeeff",
    padding: "5rem",
    width: `calc(60% + 0.6vmin)`,
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
    <div className={classes.root}  >

      <Grid container spacing={3} >

        <Grid item xs={12} >
          <header style= {{ 
            background: 'url('+myimage4+')',
            backgroundSize: "cover",
            height: "58vh",
            overflow: "hidden",
            backgroundRepeat: "no-repeat",
          }}
          > 
      <h1 className={classes.h1text}>เกี่ยวกับ</h1>
          {/* <img className={classes.img} src={myimage4} alt="complex"></img> */}
          </header>
          <Paper className={classes.paper}>

            {/* <box letterSpacing={6}>เกี่ยวกับ</box> */}
           
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
            CPE RMUTI ©2021 Created by CPE Group 61231
        
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Info;
