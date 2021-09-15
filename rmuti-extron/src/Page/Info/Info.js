import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import myimage0 from "../../Page/Manager/nn2.jpg";
import myimage1 from "../../Page/Manager/nn1.jpg";
import { TramRounded } from "@material-ui/icons";
import myimage from "../Info/dinosaur.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  img: {
    quality: 0.5,
    width: 400,
  },
  text: {
    fontSize: 80,
  },
  h1text: {
    border: "10px solid #eeeeff",
    
  },
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

  return (
    <div className={classes.root}>
      {/* <h1 className={classes.h1text}>เกี่ยวกับ</h1> */}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>เกี่ยวกับ นะน้องนะ</h1>

            <img className={classes.img} src={myimage} alt="complex" />

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
