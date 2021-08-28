import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Container from "@material-ui/core/Container";
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import Button from '@material-ui/core/Button';
import myimage from "../../Page/Manager/0.jpg";
import myimage2 from "../../Page/Manager/1.jpg";
import myimage3 from "../../Page/Manager/2.jpg";
import myimage4 from "../../Page/Manager/3.jpg";

// import { OutlinedInput } from '@material-ui/core';
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   marginTop: 6,
  //   flexGrow: 1,
  //   // width: '1085px',
  //   display: 'flex',
  //   // marginLeft: '620px'
  // },
  // paper: {
  //   backgroundColor: '#ddd6f3',
  //   height: 300,
  //   width: 220,
  //   float: 'left',
  //   marginRight: 50,
  //   marginBottom: 20,
  // },
  // control: {
  //   padding: theme.spacing(2),
  // },
  
  // img: {
  //   width: 220,
  //   height: 300,

  // }
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    margin: 10,
    maxWidth: 430,
    padding: 25,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  // h1: {
  //   marginTop: 5,
  //   border: "5px  #f8bbd0",
  // },
  // variant: outlined,
}));

const Manager = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container maxWidth="sm">
      <div className={classes.h1}>
        <h1>TEAM</h1>
      </div>

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} src={myimage} alt="complex" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    อาจารย์ที่ปรึกษา
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • อาจารย์วิทยา ศรีกุล
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} src={myimage2} alt="complex" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    อาจารย์ที่ปรึกษา
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • อาจารย์เกตุกาญจน์ ไชยขันธุ์
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} src={myimage3} alt="complex" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    ผู้จัดทำ
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  Backend-Deverloper
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • นายสถาพร มณีบุญ
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} src={myimage4} alt="complex" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                  ผู้จัดทำ
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  Frontend-Deverloper
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    • นางสาวเบญจพร กิตติวิเชียรชัย
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

      {/* <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            <Grid item>
              <Paper className={classes.paper}>
                <img className={classes.img} src={myimage} />
              </Paper>
              <Paper className={classes.paper} >
                <img className={classes.img} src={myimage2} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            <Grid item>
              <Paper className={classes.paper}  >
                <img className={classes.img} src={myimage3} />
              </Paper>
              <Paper className={classes.paper} >
                <img className={classes.img} src={myimage4} />
              </Paper> 
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </Container>
  );
};

export default Manager;
