import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "@fontsource/sarabun";
import { colors, Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import imgone from "../Manual/Datastudent.png";
import imgtwo from "../Manual/answer.png";
import imgthree from "../Manual/answerSheet.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    fontFamily: "sarabun",
  },
  media: {
    height: 140,
  },
  imgone: {
    // marginTop: 20,
    width: `calc(45% + 0.8vmin)`,
    // backgroundColor: "#B09F80",
    backgroundColor: "#f6d268",
    // height: "13.2rem",
  },
  imgtwo_three: {
    // marginTop: 20,
    width: `calc(80% + 0.8vmin)`,
    // backgroundColor: "#B09F80",
    backgroundColor: "#f6d268",
    // height: "13.2rem",
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const bull = (
    <span style={{ color: "red" }} className={classes.bullet}>
      *
    </span>
  );

  return (
    <grid className={classes.root}>
      <p>
        <a href="https://app.gitbook.com/s/70adspWkrWyydwKt66mW/c/ZUkUY6XVjrmlH3FKB1PT/.csv">
          GitBook
        </a>
      </p>
      <h1>สิ่งที่ต้องเตรียม</h1>
      <h2>
        <b>
          {bull} ไฟล์ข้อมูลผู้เข้าสอบ
          {/* <link> (วิธีการทำไฟล์ข้อมูลผู้เข้าสอบ) </link>  */}
          <br />
          {bull} ไฟล์เฉลยข้อสอบ <br />
          {bull} ไฟล์ข้อสอบ <br />
        </b>
      </h2>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h8" component="h2">
              ไฟล์ข้อมูลผู้เข้าสอบ
              {/* https://app.gitbook.com/s/70adspWkrWyydwKt66mW/c/ZUkUY6XVjrmlH3FKB1PT/.csv */}
            </Typography>
          </CardContent>
          <img className={classes.imgone} src={imgone} alt="complex" />
        <CardActions>
          <Button size="small" color="primary">
            วิธีการทำไฟล์ข้อมูลผู้เข้าสอบ
          </Button>
        </CardActions>
        </CardActionArea>

        <hr/>

        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ไฟล์ข้อสอบ
            </Typography>
            <img className={classes.imgtwo_three} src={imgtwo} alt="complex" />
          </CardContent>
        </CardActionArea>

        <hr/>


        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ไฟล์ข้อมูลผู้เข้าสอบ
            </Typography>
            <img
              className={classes.imgtwo_three}
              src={imgthree}
              alt="complex"
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </grid>
  );
}
