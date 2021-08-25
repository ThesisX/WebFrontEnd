import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import myimage0 from "../../Page/Manager/nn2.jpg";
import myimage1 from "../../Page/Manager/nn1.jpg";
import { TramRounded } from "@material-ui/icons";

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
  }
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
    return (clickimg)
  };

  const reset = () => {
    setCount(0);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>เกี่ยวกับ นะน้องนะ</h1>
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
