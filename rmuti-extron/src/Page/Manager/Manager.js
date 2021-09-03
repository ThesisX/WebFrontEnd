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

// import "@fontsource/sarabun";


// import { OutlinedInput } from '@material-ui/core';
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,

  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    // maxWidth: "50rem",
    marginLeft: 260,
    // alignItems: 'st'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 10,
    // marginLeft: 100,
    maxWidth: "35rem",
    padding: 25,
    backgroundColor: '#f4ecfd',
    borderRadius: 15,
  },
  gridimage: {
    display: 'flex',
    alignItems: 'center',

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
    borderRadius: 12,
  },
  text: {
    fontSize:  `calc(90% + 0.7vmin)`,
    // fontFamily: "sarabun",
    fontWeight: 600,
   
  },
  text2: {
    fontSize:  `calc(90% + 0.5vmin)`,
    // fontFamily: "sarabun",
    margin: 13,
    marginLeft: 30, 
    
  },
  gridItem: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-evenly',
    margin: 16,
  },
  h1: {
    fontSize:  `calc(90% + 1vmin)`,
    // marginTop: 30,
    marginLeft: -200,
    marginRight: 130,
    // borderColor: '#eeeeff',
  
  },
  h1text: {
    border: "10px solid #eeeeff",
  }
  
}));

const Manager = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container className={classes.container} maxWidth="lg">
      <div className={classes.h1}>
        <h1 className={classes.h1text}>TEAM</h1>
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
                <Grid item xs className={classes.gridItem} >
                  <Typography className={classes.text} gutterBottom variant="subtitle1">
                    อาจารย์ที่ปรึกษา
                  </Typography>
                  <Typography className={classes.text2} variant="body2" gutterBottom>
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
                <Grid item xs className={classes.gridItem}>
                  <Typography className={classes.text} gutterBottom variant="subtitle1">
                    อาจารย์ที่ปรึกษา
                  </Typography>
                  <Typography className={classes.text2} variant="body2" gutterBottom>
                    • อาจารย์เกตุกาญจน์ ไชยขันธุ์
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item className={classes.gridimage}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} src={myimage3} alt="complex" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs className={classes.gridItem}>
                  <Typography className={classes.text} gutterBottom variant="subtitle1">
                    ผู้จัดทำ
                  </Typography>
                  <Typography variant="body2" className={classes.text2} gutterBottom>
                   <b>Backend-Deverloper</b> 
                  </Typography>
                  <Typography variant="body2" className={classes.text2} gutterBottom>
                    • นายสถาพร มณีบุญ
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item className={classes.gridItem}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} src={myimage4} alt="complex" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs className={classes.gridItem}>
                  <Typography className={classes.text} gutterBottom variant="subtitle1">
                    ผู้จัดทำ
                  </Typography>
                  <Typography className={classes.text2} variant="body2" gutterBottom>
                   <b> Frontend-Deverloper </b>
                  </Typography>
                  <Typography className={classes.text2} variant="body2" gutterBottom>
                    • นางสาวเบญจพร กิตติวิเชียรชัย
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

     
    </Container>
  );
};

export default Manager;
