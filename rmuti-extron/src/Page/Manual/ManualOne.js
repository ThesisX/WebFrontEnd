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


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    fontFamily: "sarabun",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const bull = <span style={{color:"red"}} className={classes.bullet}>*</span>;

  return (
    <grid className={classes.root}>
      <h2>สิ่งที่ต้องเตรียม</h2>
      <b>
          1. {bull} ไฟล์ข้อมูลผู้เข้าสอบ 
          {/* <link> (วิธีการทำไฟล์ข้อมูลผู้เข้าสอบ) </link>  */}
          <br/>
          2. {bull} ไฟล์เฉลยข้อสอบ  <br/>
          3. {bull} ไฟล์ข้อสอบ  <br/>
      </b>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            ไฟล์ข้อมูลผู้เข้าสอบ
            </Typography>
            <Typography variant="body2" color="initial" component="p">
            เตรียมไฟล์ข้อมูลผู้เข้าสอบจำนวน 1 ไฟล์เป็นไฟล์เอกสาร (.csv) ที่จัดเก็บรหัสผู้เข้าสอบ 
หรือเลขที่นั่งของผู้เข้าสอบ หลังจากตรวจข้อสอบสำเร็จระบบจะเพิ่มคะแนนให้กับนักศึกษาในไฟล์น
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
           วิธีการทำไฟล์ข้อมูลผู้เข้าสอบ
          </Button>
        </CardActions>
      </Card>
    </grid>
  );
}
