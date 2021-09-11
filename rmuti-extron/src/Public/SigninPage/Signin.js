import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";
import Container from "@material-ui/core/Container";
// import '@fontsource/sarabun';

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FaceIcon from "@material-ui/icons/Face";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
// import { Link } from "react-router-dom";

// import Alert from '@material-ui/lab/Alert';

// import clsx from 'clsx';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { BASE_URL } from "../../service";
// import FormControl from '@material-ui/core/FormControl';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const useStyles = makeStyles((theme) => ({
  // margin: {
  //   display: 'flex',
  //   maxWidth: '20rem',
  //   width: 800,
  //   margin: '0, auto',
  //   borderRadius: 35,
  //   alignItems: 'center',
  //   backgroundColor: ' #f9fbe7',
  //   contrastText: '#f0f4c3',
  //   flexDirection: 'column',
  //   // marginLeft: '50',
  //   boxShadow: '6px 0px 14px 2px rgba(36, 45, 5, 0.6)',
  // },
  button: {
    // padding: 10,
    // fontFamily: "sarabun",
    fontSize: 17,
    margin: "30px",
    marginLeft: 60,
    marginTop: 50,
    // backgroundColor: '#79955a',
    // transparency: '50%',
  },
  griduserpass: {
    marginTop: "30px",
  },

  form: {
    display: "flex",
    maxWidth: "25rem",
    backgroundColor: "#d3e8d6",
    padding: 40,
    paddingLeft: 83,
    // margin: 50,
    // height: '400',
    // margin: 20,
    borderRadius: 35,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    // marginLeft: '380px',
    // padding: '80px',
    // borderRadius: 15,
  },
  label: {
    fontSize: 16.5,
    // fontFamily: "sarabun",
  },
}));

const Singin = ({ setToken }) => {
  const classes = useStyles();
  let [Username, setUsername] = useState("ben_x1");
  let [Password, setPassword] = useState("88888");
  const [showPassword, setShowPassword] = useState(false);
  const [checkSnackbar, setcheckSnackbar] = useState(false);
  const [textSnackbar, setTextSnackbar] = useState("พบข้อผิดพลาด");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    // setOpen(true);
    let values = true;

    if (Username === "") {
      setTextSnackbar("กรุณากรอก ชื่อผู้เข้าใช้งาน");
      setcheckSnackbar(true);

      // alert("กรุณากรอก ชื่อผู้เข้าใช้งาน");
      // values = false;
      // return false;
    } else if (Password === "") {
      setTextSnackbar("กรุณากรอก รหัสผ่าน");
      setcheckSnackbar(true);

      // alert("กรุณากรอก รหัสผ่าน");
      // values = false;
    } else {
      let form_data = {
        username: Username,
        password: Password,
      };

      // if (Username === "") {
      // alert("กรุณากรอก ชื่อผู้เข้าใช้งาน");
      // values = false;
      // return false;
      // }
      // else if (Password === "king") {
      //   setcheckSnackbar(false)

      //   // alert("กรุณากรอก รหัสผ่าน");
      //   // values = false;

      // }
      // document.getElementById("username").disabled = true;
      // document.getElementById("password").disabled = true;
      // document.getElementById("submit").disabled = true;
      // return false;

      // if (values) {

      let options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify(form_data),
        url: BASE_URL + "/token",
      };

      console.log("log");

      await axios(options)
        .then((res) => {
          // console.log(res)
          // console.log(res.data.access_token)
          Cookies.set("token", res.data.access_token);
          // setToken(res.data.access_token)
          window.location.reload();
        })
        .catch((error) => {
          setTextSnackbar(error.response.data.detail);
          setcheckSnackbar(true);
          // setState({ open: true, ...newState });
          console.log(error.response.data.detail);
          // alert(error.response.data.detail);
        });
      console.log(textSnackbar);
    }
  };
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // setOpen(false);
  };

  return (
    <Container alignItems="center" className={classes.form}>
      {/* <div className={classes.margin} > */}
      {/* Username Input */}
      <Grid className={classes.griduserpass} alignItems="flex-end">
        <FaceIcon />
        <Grid>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={checkSnackbar}
            onClose={handleClose}
            message={textSnackbar}
            key={vertical + horizontal}
          />

          {/* {checkSnackbar == true ? (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              {textSnackbar}

              <Alert onClose={handleClose} severity="error"></Alert>
            </Snackbar>
          ) : (
            <> </>
          )} */}
          <InputLabel
            className={classes.label}
            htmlFor="standard-adornment-password"
          >
            {" "}
            ชื่อผู้ใช้งาน{" "}
          </InputLabel>
          <TextField
            id="input-with-icon-grid"
            type="user"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={Username}
          />
        </Grid>
      </Grid>

      {/* Password Input */}
      <Grid className={classes.griduserpass} alignItems="flex-end">
        <VpnKeyRoundedIcon />
        <Grid>
          <InputLabel
            className={classes.label}
            htmlFor="standard-adornment-password"
          >
            รหัสผ่าน
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            value={Password}
            onChange={handleChange}
            required
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
      <Button
        className={classes.button}
        type="button"
        onClick={handleSignin}
        variant="outlined"
        color="inherit"
      >
        เข้าสู่ระบบ
      </Button>

      <div></div>

      {/* </div> */}
    </Container>
  );
};

export default Singin;
