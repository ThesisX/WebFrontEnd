import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
  },
  content: {
   
    // backgroundColor: "#B09F80",
    // backgroundColor: "#d7c3a5",
    backgroundColor: "#ddd0cb",
    borderRadius: 10,

    width: 760,
    fontSize: 20,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
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
          ของเรานั้น เป็นส่วนหนึ่งของ <b>ปริญญานิพนธ์</b>
          <br />
          {/* {'"a benevolent smile"'} */}
        </p>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
