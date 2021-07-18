import React, { useState } from 'react';
import axios from 'axios'
import qs from 'qs';
import Cookies from 'js-cookie';
import Container from '@material-ui/core/Container';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
// import { Link } from "react-router-dom";


// import Alert from '@material-ui/lab/Alert';

import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  margin: {

    display: 'auto',
    // width: '380px',
    // height: '200',
    // margin: theme.spacing(1),
    // marginTop: '180px',
    // marginLeft: '230px',
    margin: '70px',
    backgroundColor: '#fce4ec',
    contrastText: '#000',
    borderRadius: 15,
    padding: '70px',
    // paddingLeft: '150px',
    // paddingTop: '60px',
    boxShadow: '10px 7px 14px 8px rgba(255, 175, 145, .6)',
  },
  button: {
    margin: '50px',

  },
  password: {
    marginTop: '50px',
  },
  user: {
    marginTop: '15px',
  },
  form: {
    //  display: 'flexGrow',
    // float: 'display',
    // backgroundColor: '#fffcdc',
    // transparency: '20%',
    //  height: '700px',
    width: '650px',
    // margin: '80px',
    // marginLeft: '380px',
    // padding: '80px',
    // borderRadius: 15,

  }

}));

const Singin = ({ setToken }) => {
  const classes = useStyles();
  let BASE_URL = "http://127.0.0.1:8000"
  let [Username, setUsername] = useState("sathaphornma")
  let [Password, setPassword] = useState("string")
  const [showPassword, setShowPassword] = useState(false);

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

    console.log("log");

    await axios(options)
      .then(res => {
        // console.log(res)
        // console.log(res.data.access_token)
        Cookies.set("token", res.data.access_token);
        // setToken(res.data.access_token)
        window.location.reload();
      });
  }
  return (

    <Container alignItems="center" className={classes.form} >
      <div className={classes.margin} >
          {/* Username Input */}
          <Grid className={classes.user} spacing={3} alignItems="flex-end" >
            <Grid className={classes.icon} ><AccountCircle /></Grid>
            <Grid >
              <TextField
                id="input-with-icon-grid"
                label="ชื่อผู้เข้าใช้งาน"
                onChange={(e) =>
                  setUsername(e.target.value)}
                value={Username}
              />
            </Grid>
          </Grid>

          {/* Password Input */}
          <Grid className={classes.password} spacing={3} alignItems="flex-end">
            <Grid className={classes.icon} ><AccountCircle /></Grid>
            <Grid  >
              <InputLabel htmlFor="standard-adornment-password">รหัสผ่าน</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={Password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="สลับการมองเห็นรหัสผ่าน"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
          <Button className={classes.button} type="button" onClick={handleSignin} variant="outlined" color="secondary">
            เข้าสู่ระบบ
          </Button>
      </div>
    </Container>
  );
}

export default Singin;