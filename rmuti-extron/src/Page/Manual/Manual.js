import { Grid } from "@material-ui/core";
import React from "react";
import ManualOne from "./ManualOne";
import ManualTwo from "./ManualTwo";
import { makeStyles } from "@material-ui/core/styles";
import { Class } from "@material-ui/icons";
import CardContent from "@material-ui/core/CardContent";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  boxtext: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // backgroundColor: "#CDB7F8",
    // width: `calc(30% + 0.8vmin)`,
    // borderLeft: "550",
  },
  boxh1: {
    // backgroundColor: "#3c312b",
    backgroundColor: "#1c1a18",
    // width: `calc(20% + 0.8vmin)`,
    borderRadius: 30,
    padding: 20,
    color: "#f3f3f3"
  },

 
  content: {
    marginLeft: "37.5%",

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // backgroundColor: "#B09F80",
    // backgroundColor: "#d7c3a5",
    // backgroundColor: "#2A2A2C ",
    color: "#111",
    borderRadius: 10,
    // fontSize: "1.2rem",
    width: `calc(25% + 0.6vmin)`,
    height: 220,
    fontSize: `calc(60% + 0.8vmin)`,
    // width: 760,
  },
  textone: {
    fontSize: `calc(88% + 0.8vmin)`,
    margin: 20,
  },
  textwo: {
    fontSize: `calc(70% + 0.8vmin)`,
    margin: -5,
  }
});

const Manual = () => {
  const classes = useStyles();
  const star = (
    <span style={{ color: "red" }} className={classes.bullet}>
      *
    </span>
  );
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <Box  letterSpacing={5} m={1} className={classes.boxtext}>
        <h1 className={classes.boxh1}>วิธีการใช้งาน</h1>
      </Box>

      <CardContent className={classes.content}>
        <Box  letterSpacing={3} m={3}>
          {bull} <b className={classes.textone}>สิ่งที่ต้องเตรียม</b> {bull}
        </Box>
        <Box className={classes.textwo} letterSpacing={2} m={1}   spacing={2}>
          <b>{star} ไฟล์ข้อมูลผู้เข้าสอบ </b>
          <br />
          <b>
            {star} ไฟล์เฉลยข้อสอบ <br />
          </b>
          <b>
            {star} ไฟล์กระดาษคำตอบของผู้เข้าสอบ <br />
          </b>
          <br />
        </Box>
      </CardContent>

      <Grid>
        <ManualOne />
      </Grid>

      <Grid>
        <ManualTwo />
      </Grid>
    
      {/* const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#656565",
    },
  })); */}

    </div>
  );
};

export default Manual;
