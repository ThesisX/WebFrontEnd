import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import Button from '@material-ui/core/Button';
import myimage from '../../Page/Manager/0.jpg';
import myimage2 from '../../Page/Manager/1.jpg';
import myimage3 from '../../Page/Manager/2.jpg';
import myimage4 from '../../Page/Manager/3.jpg';

// import { OutlinedInput } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 6,
    flexGrow: 1,
    // width: '1085px',
    display: 'flex',
    // marginLeft: '620px'
  },
  paper: {
    backgroundColor: '#ddd6f3',
    height: 300,
    width: 220,
    float: 'left',
    marginRight: 50,
    marginBottom: 20,
  },
  control: {
    padding: theme.spacing(2),
  },
  h1: {
    marginTop: 20,
    border: "5px solid #f8bbd0",
  },
  img: {
    width: 220,
    height: 300,
   
  }
  // variant: outlined,
}));


const Manager = () => {

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const theme = useTheme();


  return (
    // <div>
    //   <Card className={classes.root}>
    //     <div className={classes.details}>
    //       <CardContent className={classes.content}>
    //         <Typography component="h5" variant="h5">
    //           Live From Space
    //         </Typography>
    //         <Typography variant="subtitle1" color="textSecondary">
    //           Mac Miller
    //         </Typography>
    //       </CardContent>
    //       <div className={classes.controls}>
    //         <IconButton aria-label="previous">
    //         </IconButton>
    //       </div>
    //     </div>
    //     <CardMedia
    //       className={classes.cover}
    //       image=""
    //       title="Live from space album cover"
    //     />
    //   </Card>
    // </div>


    <Container maxWidth="sm">
      <div className={classes.h1} ><h1 >
        TEAM
      </h1></div>

      <Grid container className={classes.root} spacing={2}>
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
      </Grid>
    </Container>
  );
}


export default Manager;