import { Grid } from "@material-ui/core";
import React from "react";
import ManualOne from "./ManualOne";
import ManualTwo from "./ManualTwo";
import { makeStyles } from "@material-ui/core/styles";
import { Class } from "@material-ui/icons";
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
    backgroundColor: "#CDB7F8",
    // width: `calc(20% + 0.8vmin)`,
    borderRadius: 30,
    padding: 20,
  },

  gridText: {
    marginLeft: "46%",
  },
});

const Manual = () => {
  const classes = useStyles();
  const bull = (
    <span style={{ color: "red" }} className={classes.bullet}>
      *
    </span>
  );

  return (
    <div className={classes.root}>
      <Box className={classes.boxtext}>
        <h1 className={classes.boxh1}>วิธีการใช้งาน</h1>
      </Box>

      <Grid className={classes.gridText}>
        <h2>สิ่งที่ต้องเตรียม</h2>
        <h2>
          {bull} ไฟล์ข้อมูลผู้เข้าสอบ
          {/* <link> (วิธีการทำไฟล์ข้อมูลผู้เข้าสอบ) </link>  */}
          <br />
          {bull} ไฟล์เฉลยข้อสอบ <br />
          {bull} ไฟล์ข้อสอบ <br />
        </h2>
      </Grid>

      <Grid>
        <ManualOne />
      </Grid>

      <Grid>
        <ManualTwo />
      </Grid>
    </div>
  );
};

export default Manual;
