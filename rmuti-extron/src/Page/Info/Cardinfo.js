import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";

import "@fontsource/sarabun";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    fontFamily: "sarabun",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 20,
    fontSize: `calc(60% + 0.8vmin)`,
  },
  bullet: {
    // display: 'inline-block',
    margin: "0 2px",
    // transform: 'scale(0.8)',
    // color: "",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontSize: "1.2rem",
  },
  content: {
    // backgroundColor: "#B09F80",
    // backgroundColor: "#d7c3a5",
    // backgroundColor: "#ddd0cb",
    borderRadius: 10,
    // fontSize: "1.2rem",
    width: `calc(50% + 0.6vmin)`,
    // fontSize: `calc(60% + 0.8vmin)`,
    // width: 760,
  },

  content2: {
    // backgroundColor: "#B09F80",
    // backgroundColor: "#d7c3a5",
    // backgroundColor: "#ddd0cb",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
    // fontSize: "1.2rem",
    width: `calc(100% + 0.6vmin)`,
    // fontSize: `calc(60% + 0.8vmin)`,
    // width: 760,
  },

  image: {
    // marginTop: 20,
    width: "6rem",
    // backgroundColor: "#B09F80",
    backgroundColor: "#f6d268",
    height: "13.2rem",
  },

  image2: {
    // marginTop: 20,
    width: "6rem",
    backgroundColor: "#B09F80",
    // backgroundColor: "#f6d268",
    height: "13.4rem",
  },

  paper: {
    // padding: 12,
    fontFamily: "sarabun",
    marginRight: 490,
    // marginTop: 10,
    // width: "24.688rem",
    width: `calc(28% + 0.8vmin)`,
    // backgroundColor: "#f4ebe7",
  },
  paper2: {
    // padding: 12,
    fontFamily: "sarabun",
    marginLeft: 390,
    marginTop: 50,
    // width: "24.688rem",
    width: `calc(43% + 0.8vmin)`,
    // backgroundColor: "#f4ebe7",
  },

  gridItem: {
    marginTop: 8,
  },
  gridItem2: {
    marginTop: 8,
  },

  box: {
    backgroundColor: "#060606",
    width: `calc(80% + 0.8vmin)`,
    height: "3rem",
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Button className={classes.box}></Button>
        <p>
          {bull} <b>ระบบตรวจข้อสอบปรนัย ด้วยโครงข่ายประสาทเทียมแบบคอนโวลูชัน</b>{" "}
          {bull}
        </p>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        {/* <Typography className={classes.pos} color="textSecondary">
        เป็นเว็บแอพพลิเคชั่น
        </Typography> */}
        <p>
          เป็นส่วนหนึ่งของ <b>ปริญญานิพนธ์</b> ของสาขาวิศวกรรมคอมพิวเตอร์
          <br />
          {/* {'"a benevolent smile"'} */}
        </p>
      </CardContent>

      <CardContent className={classes.content2} >
      <Paper className={classes.paper}  >
        <Grid container spacing={2}>
          <Grid item className={classes.gridimage}>
            <ButtonBase className={classes.image}>
              {/* <img className={classes.img} src={myimage4} alt="complex" /> */}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs className={classes.gridItem}>
                <Typography
                  component="div"
                  className={classes.text}
                  gutterBottom
                  variant="subtitle1"
                  spacing={2}
                >
                  <Box letterSpacing={5} m={1} fontFamily="Sarabun">
                    ใช้งานได้ง่าย <br /> เพียงแค่ <b>อัพโหลด</b>
                  </Box>
                </Typography>
                <p></p>
                <p className={classes.text2} variant="body2" gutterBottom>
                  <b letterSpacing={6}> "กระดาษคำตอบ" </b>
                  <br />
                  <b> "เฉลยคำตอบ" </b>
                  <br />
                  และ
                  <br />
                  <b> "ข้อมูลผู้เข้าสอบ" </b>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper2} >
        <Grid container spacing={2}>
          <Grid item className={classes.gridimage}></Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs className={classes.gridItem2}>
                <Typography
                  component="div"
                  className={classes.text}
                  gutterBottom
                  variant="subtitle1"
                  spacing={2}
                >
                  <Box letterSpacing={5} m={1} fontFamily="Sarabun">
                    ซึ่งเว็บแอพพลิเคชันนี้ <br />
                    <b>ใช้ในการตรวจข้อสอบปรนัย</b>
                    <br />
                    โดยโครงข่ายประสาทเทียมแบบคอนโวลูชัน
                  </Box>
                </Typography>
                <p></p>
                <p className={classes.text2} variant="body2" gutterBottom>
                  <b letterSpacing={6}> บนเว็บเบราว์เซอร์ </b> และรองรับทุกแพลตฟอร์ม
                  <br />
                   ไม่ว่าจะเป็น 
                  {/* <br /> */}
                  <br />
                  <b> {bull} สมาร์ทโฟน , {bull} แท็บเล็ต</b>  หรือ <b> {bull} คอมพิวเตอร์ส่วนบุคคล </b>
                </p>
              </Grid>
            </Grid>
            <ButtonBase className={classes.image2}>
              {/* <img className={classes.img} src={myimage4} alt="complex" /> */}
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
      </CardContent>
      {/* 
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
