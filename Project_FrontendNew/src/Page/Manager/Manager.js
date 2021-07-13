import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import myimage from '../../imagetest/180.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: '1085px',
    display: 'flex',
    // marginLeft: '620px'
  },
  paper: {
    backgroundColor: '#ddd6f3',
    height: 300,
    width: 200,
    float:'left',
    marginRight:50
  },
  control: {
    padding: theme.spacing(2),
  },
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
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            <Grid  item>
              <Paper className={classes.paper}>
                <img src={myimage}/>
              </Paper>
              <Paper className={classes.paper} />
            </Grid>
          </Grid>
        </Grid>

        
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            <Grid  item>
              <Paper className={classes.paper}/>
              <Paper className={classes.paper} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}


export default Manager;