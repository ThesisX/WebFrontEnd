import React from 'react';
// import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '@fontsource/sarabun';


// import Container from '@material-ui/core/Container';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
} from "react-router-dom";
// import RoutesPublic from '../RoutesPublic';
import Singin from '../SigninPage/Signin';
import Signup from '../SignupPage/Signup';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // width: '800rem',
    display: 'felx',
    maxWidth: '800rem',
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'center',
    fontFamily: "sarabun",
  },

  tabs: {
    maxWidth: '60rem',
    // width: '50rem',
    margin: '0 auto',
    marginTop: 43,
    display: 'grid',
    justifyContent: 'center',
    // backgroundColor: '#B8C85E',
    color: '#242812',
    // color: '#4DA0B0',
    // textColor: "#242812",
    borderRadius: 45,
    alignItems: 'center',
    // backgroundColor: theme.palette.background.paper,
    // flexWrap: ''
  },
  tablabel: {
    maxWidth: '60rem',
    margin: 20,
    borderRadius: 35,
    // backgroundColor: '#B8C85E',
    backgroundColor:'#4db6ac ',
    color: '#242812',
    // indicatorColor:' #08db80',
  }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" color="default"> */}
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        color="default"
        // scrollButtons="on"
        indicatorColor="#08db80"
        // textColor="primary"
        aria-label="scrollable force tabs example"
      >

        <Tab className={classes.tablabel} label="เข้าสู่ระบบ" icon={<FavoriteIcon />} {...a11yProps(0)} />
        <Tab className={classes.tablabel} label="สมัครสมาชิก" icon={<PersonPinIcon />} {...a11yProps(1)} />

      </Tabs>
      {/* </AppBar> */}
    <Grid item xs>
      <TabPanel value={value} index={0}>
        <Singin />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup />
      </TabPanel>
    </Grid>
      {/* <TabPanel value={value} index={2}>
                      Item Three
                    </TabPanel> */}

      {/* <TabPanel value={value} index={3}>
                          Item Four
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                          Item Five
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                          Item Six
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                          Item Seven
                        </TabPanel> */}
    </div>
  );
}