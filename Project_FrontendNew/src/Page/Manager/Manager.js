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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '1085px',
    display: 'flex',
    margin: '80px',
    marginLeft: '620px' 
  },
  paper: {
    backgroundColor: '#ddd6f3',
    height: 300,
    width: 200,
    margin: 50,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Manager = () => {
    {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const theme = useTheme();


  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (

    <Card className={classes.root}>
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          Live From Space
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Mac Miller
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <IconButton aria-label="previous">
        </IconButton>
      </div>
    </div>
    <CardMedia
      className={classes.cover}
      image= "./Page/Manager/1.jpg"
      title="Live from space album cover"
    />
  </Card>


    
    // <Grid container className={classes.root} spacing={2} >
      
    //   <Grid item xs ={7}>
    //     <Grid container justifyContent="center" spacing={spacing}>
    //       {[0, 1 ].map((value) => (
    //         <Grid key={value} item>
    //           <Paper className={classes.paper}
    //           />
             
    //         </Grid>
    //       ))}
    //     </Grid>
    //     <Typography variant="body2" color="textSecondary" component="p">
    //         {
    //           "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
    //         }
    //       </Typography>
    //   </Grid> <br/>


    //   <Grid item xs ={7}>
    //     <Grid container justifyContent="center" spacing={spacing}>
    //       {[0, 1 ].map((value) => (
    //         <Grid key={value} item>
    //           <Paper className={classes.paper} />
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Grid>

    //  {/* spacing
    //   <Grid item xs={12}>
    //     <Paper className={classes.control}>
    //       <Grid container>
    //         <Grid item>
    //           <FormLabel>spacing</FormLabel>
    //           <RadioGroup
    //             name="spacing"
    //             aria-label="spacing"
    //             value={spacing.toString()}
    //             onChange={handleChange}
    //             row
    //           >
    //             {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
    //               <FormControlLabel
    //                 key={value}
    //                 value={value.toString()}
    //                 control={<Radio />}
    //                 label={value.toString()}
    //               />
    //             ))}
    //           </RadioGroup>
    //         </Grid>
    //       </Grid>
    //     </Paper>
    //   </Grid> */}
    // </Grid>
  );
}
}

export default Manager ;