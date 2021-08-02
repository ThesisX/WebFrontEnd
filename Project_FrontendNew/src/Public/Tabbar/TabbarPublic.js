import React from 'react';
// import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
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
                      flexGrow: 1,
                      width: '100%',
                      backgroundColor: theme.palette.background.paper,
                    },
                  }));
                  
                  export default function ScrollableTabsButtonForce() {
                    const classes = useStyles();
                    const [value, setValue] = React.useState(0);
                  
                    const handleChange = (event, newValue) => {
                      setValue(newValue);
                    };
                  
                    return (
                      <div className={classes.root}>
                        <AppBar position="static" color="default">
                          <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="scrollable force tabs example"
                          >
                           
                            <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(0)} />
                            <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(1)} />
                            
                          </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                          <Singin />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                         <Signup/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          Item Three
                        </TabPanel>
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