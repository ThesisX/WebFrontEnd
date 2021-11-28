import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import imgone from "../Manual/Datastudent.png";
import imgtwo from "../Manual/answer.png";
import imgthree from "../Manual/answerSheet.png";



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
    width: `calc(90% + 0.8vmin)`,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: 30,

  },
  imgone1: {
    width: `calc(55% + 0.8vmin)`,
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
          {/* <img className={classes.imgone} src={imgbg} /> */}
        </Grid>
      
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone1} src={imgone} />
          {/* <FormRow /> */}
        </Grid>
       
        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone} src={imgtwo}/>
          {/* <FormRow /> */}
        </Grid>

        <Grid container item xs={12} spacing={3}  className={classes.gridxs}>
          <img className={classes.imgone} src={imgthree}/>
          {/* <FormRow /> */}
        </Grid>    
      </Grid>
    </div>
  );
}
