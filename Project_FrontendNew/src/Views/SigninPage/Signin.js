import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

// import Alert from '@material-ui/lab/Alert';

import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


import axios from 'axios'
import qs from 'qs';



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    marginTop: '10px',
  },
  button: {
    margin: '30px',

  },
}));

const Singin = () => {

  let [Username, setUsername] = useState("sathaphornma")
  let [Password, setPassword] = useState("string")

  let BASE_URL = "http://127.0.0.1:8000"

  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false);
  

  const handleChange = (event) => {
    setPassword(event.target.value)
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleSignin = async (e) => {
    e.preventDefault()

    let form_data = {
      username: Username,
      password: Password,
    };

    let options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(form_data),
      url: BASE_URL + '/token',
    };


    await axios(options)
      .then(res => {
        console.log(res)
        // console.log(res.data)
      });

    // await axios.get(BASE_URL + '/users/info')
    //   .then(res => {
    //     console.log("user : " + res)
    //     // console.log(res.data)
    // });

  }

  console.log(showPassword)
  return (

    <form onSubmit={handleSignin}>
      {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
      <div className={classes.margin}>

        {/* Username Input */}
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item><AccountCircle /></Grid>
          <Grid item >
            <TextField
              id="input-with-icon-grid"
              label="USER"
              onChange={(e) =>
                setUsername(e.target.value)}
              value={Username}
            />
          </Grid>
        </Grid>

        {/* Password Input */}
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item><AccountCircle /></Grid>
          <Grid item >
          <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={Password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
            

          </Grid>
        </Grid>

        <Button className={classes.button} type="Submit" variant="outlined" color="secondary">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Singin;