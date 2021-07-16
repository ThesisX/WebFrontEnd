import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import RoutesPublic from '../RoutesPublic';
import Singin from '../SigninPage/Signin';
import Signup from '../SignupPage/Signup';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    marginTop: '1%'
  },
  container: {
    width: '100%',

  },
  toolbar: {
    marginTop: '3%',
    left: '-2%',
  }
});



export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
{/* <BrowserRouter>     */}
      <div>
        <Container className={classes.container} >
          {/* <AppBar position="fixed"> */}
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              MANU
            </Typography>
          </Toolbar>
          {/* </AppBar> */}
          <div> <center>
            <Paper square className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
              >
              {/* <Button variant="outlined" color="secondary">
                 Secondary
              </Button> */}

                <Tab icon={<FavoriteIcon />} label="LOGIN" >
                <Link to="/sign-up"></Link>
                </Tab>

                <Tab icon={<PersonPinIcon />} label="SINGIN" >
                  <Link to="/">HI</Link>
                </Tab>

              </Tabs>
             </Paper>
          </center>
          </div>
          {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '70vh' }} /> */}
        </Container>
      </div >
    {/* </BrowserRouter> */}
   </Router>
  );
}
