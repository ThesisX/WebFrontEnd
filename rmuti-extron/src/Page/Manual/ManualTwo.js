import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import img1 from "../Manual/imgManualTwo/5.png";
import img2 from "../Manual/imgManualTwo/6.png";
import img3 from "../Manual/imgManualTwo/7.png";
import img4 from "../Manual/imgManualTwo/8.png";
import img5 from "../Manual/imgManualTwo/9.png";
import img6 from "../Manual/imgManualTwo/10.png";
import img7 from "../Manual/imgManualTwo/11.png";
import img8 from "../Manual/imgManualTwo/12.png";
import imgbg from "../Manual/imgManualTwo/bg.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  imgone: {
    width: `calc(100% + 0.8vmin)`,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: 30,

  },
  gridxs: {
    width: `calc(90% + 0.8vmin)`,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "baseline",
    margin: 30 ,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid > 
          {/* <Paper className={classes.paper}>item</Paper> */}
          <img className={classes.imgone} src={imgbg} />
        </Grid>
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
       */}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone} src={img1} />
          {/* <FormRow /> */}
        </Grid>
       
        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone} src={img2}/>
          {/* <FormRow /> */}
        </Grid>

        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone} src={img3}/>
          {/* <FormRow /> */}
        </Grid>

        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone} src={img4}/>
          {/* <FormRow /> */}
        </Grid>

        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone} src={img5}/>
          {/* <FormRow /> */}
        </Grid>

        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone} src={img6}/>
          {/* <FormRow /> */}
        </Grid>

        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone} src={img7}/>
          {/* <FormRow /> */}
        </Grid>

        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone} src={img8}/>
          {/* <FormRow /> */}
        </Grid>
      </Grid>
    </div>
  );
}
