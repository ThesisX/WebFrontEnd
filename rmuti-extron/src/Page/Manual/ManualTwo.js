import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "@fontsource/sarabun";


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

  return (
    <Paper className={classes.paper2}>
    <Grid container spacing={2}>
      <Grid item className={classes.gridimage}></Grid>
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
                ซึ่งเว็บแอพพลิเคชันนี้ <br />
                <b>ใช้ในการตรวจข้อสอบปรนัย</b>
                <br />
                โดยโครงข่ายประสาทเทียมแบบคอนโวลูชัน
              </Box>
            </Typography>
            <p></p>
            <p className={classes.text2} variant="body2" gutterBottom>
              <b letterSpacing={6}> บนเว็บเบราว์เซอร์ </b>{" "}
              และรองรับทุกแพลตฟอร์ม
              <br />
              ไม่ว่าจะเป็น
              {/* <br /> */}
              <br />
              <b>
                {" "}
                {bull} สมาร์ทโฟน , {bull} แท็บเล็ต
              </b>{" "}
              หรือ <b> {bull} คอมพิวเตอร์ส่วนบุคคล </b>
            </p>
          </Grid>
        </Grid>
        <ButtonBase className={classes.image2}>
          {/* <img className={classes.img} src={myimage4} alt="complex" /> */}
        </ButtonBase>
      </Grid>
    </Grid>
  </Paper>
  );
}
