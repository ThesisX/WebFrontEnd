import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "@fontsource/sarabun";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0 , 2),
      fontFamily: "sarabun",
    },
  },

  text: {
    fontSize: `calc(53% + 0.8vmin)`,
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button  color="primary" href="..\Manual\Manual.js" target="blank"> 
     <u className={classes.text}>วิธีการใช้งาน </u> 
      </Button>
    </div>
  );
  
}
