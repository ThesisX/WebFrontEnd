import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import myimage0 from "../../Page/Manager/nn2.jpg";
import myimage1 from "../../Page/Manager/nn1.jpg";
import { TramRounded } from "@material-ui/icons";
import myimage from "../Info/dinosaur.png";
import myimage2 from "../Info/info.png";
import myimage3 from "../Info/facebook-logo.png";
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  box: {
    margin: 50,
  },
  gridimg: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowwrap",
    alignItems: "center",
    marginLeft: 120,
    marginBottom: 55,
    // marginTop: 20,
  },
  img: {
    // quality: 0.5,
    width: "18rem",
  },
  img2: {
    marginLeft: 100,
    borderRadius: 62,
    width: "55rem",
  },
  boxtext: {
    backgroundColor: '#9bd093',
    width: 190,
    height: 50,
    borderRadius: 62,

  }
  // h1text: {
  //   border: "10px solid #eeeeff",
  // },
}));

const Info = () => {
  const [count, setCount] = useState(0);
  const [clickimg, setClickimg] = useState(false);

  const adding = () => {
    setClickimg(true);
    setCount(count + 1);
    if (clickimg === true) {
      setClickimg(false);
    }
    return clickimg;
  };

  const reset = () => {
    setCount(0);
  };

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
      {/* <h1 className={classes.h1text}>เกี่ยวกับ</h1> */}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {/* <box letterSpacing={6}>เกี่ยวกับ</box> */}
            <Box
              className={classes.box}
              letterSpacing={8}
              fontSize="h4.fontSize"
              fontWeight="fontWeightBold"
              m={1}
            >
              <center>
              <p className={classes.boxtext}>เกี่ยวกับ</p>
              </center>
            </Box>
            <Grid className={classes.gridimg}>
              <Grid>
                <img className={classes.img} src={myimage} alt="complex"></img>
                <h2>เว็บมีปัญหาติดต่อ</h2>
                <a href="https://www.facebook.com/sathaphorn.ma" >
                  <img src={myimage3}  /> 
                  <p>สถาพร</p>
                </a>
                <a href="https://www.facebook.com/bentohanashi" >
                  <img src={myimage3}  /> 
                  <p>เบญจพร</p>
                </a>
              </Grid>
              <img className={classes.img2} src={myimage2} alt="complex" />
              <br />
            </Grid>
            <br />
            CPE RMUTI ©2021 Created by CPE Group 61231
            {/* <h1 className={classes.text}>{count}</h1>
          {clickimg === true ? (
            <img className={classes.img} src={myimage0} />
            ) : (
            <img className={classes.img} src={myimage1} />
          )}
          {console.log(`clickimg`, clickimg)}
          <button onKeyDown={adding} onChange={adding}>
            click
          </button>
          <button onClick={reset}>Reset</button> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Info;
