import React, { useState } from 'react';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
  // createStyles,
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';

// import FormHelperText from '@material-ui/core/FormHelperText';
import axios from 'axios'
// import qs from 'qs';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { OutlinedInput } from '@material-ui/core';
import { BASE_URL } from '../../service';

// const useStyles = makeStyles((theam) => ({
//   inputlabel: {
//     '& label.Mui-focused': {
//       color: 'green',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'green',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'red',
//       },
//       '&:hover fieldset': {
//         borderColor: 'yellow',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'green',
//       },
//     },
//   },
// }));


// user pass mail name lname
// ชื่อรร จังหวัด 

const Signup = () => {

  // const [data, setData] = useState({})

  const [User, setUser] = useState("ben_x1")
  const [Password, setPassword] = useState("999999999")
  const [ConfirmPassword, setConfirmPassword] = useState("999999999")
  const [Email, setEmail] = useState("benzaaze@gmail.com")
  const [Name, setName] = useState("benha")
  const [Lname, setLname] = useState("kitti")
  const [Schollname, setSchollname] = useState("rmuti")
  // let [Province, setProvince] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  // let input = this.state.input;
  // let errors = {};
  // let isValid = true;

  const [errpwd, setErrpwd] = useState(true)
  const [errpwd1, setErrpwd1] = useState(true)

  const [helpTextPassword, setHelpTextPassword] = useState()
  const [helpTextPassword1, setHelpTextPassword1] = useState("กรุณาเพิ่มรหัสผ่านมากกว่า 8 ตัวอักษร")

  // const [pwdnotThis, setPwdnotThis] = useState ("รหัสผ่านไม่ตรงกัน")

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const validate = (v) => {
    if (v.length > 8) {
      setErrpwd(false);
      setHelpTextPassword('ถูกต้อง');
    } else {
      setErrpwd(true);
      setHelpTextPassword('รหัสผ่านต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร');
    }



    setPassword(v);

  };

  const validates = (v) => {
    if (v.length > 8) {
      setErrpwd1(false);
      setHelpTextPassword1('ถูกต้อง');
    } else {
      setErrpwd1(true);
      setHelpTextPassword1('รหัสผ่านต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร');
    }

    setConfirmPassword(v);
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const handleSignup = async (e) => {
    e.preventDefault()

    let form_data = {
      username: User,
      email: Email,
      full_name: Name + " " + Lname,
      hashed_password: Password,

    };

    if (Password >= 8 && ConfirmPassword >= 8 && Password === ConfirmPassword) {
      setHelpTextPassword(true)
    } else {
      setHelpTextPassword(false)
      await axios.post(BASE_URL + "/sign-up", form_data)
        .then(res => {
          console.log(res.data);

          if (res.statusText === "OK") {
            window.history.go(0);
          } else {
            console.log(res);
            alert("กรุณาลองอีกครั้ง..");
          }
        }
        )
        .catch((error) => {
          console.log(error.response.data.detail);
          alert(error.response.data.detail);

        }
        );
    }



    // await axios.post(BASE_URL + "/sign-up", form_data)
    //   .then(res => {
    //     console.log(res.data);

    //     if(res.statusText === "OK"){
    //       window.history.go(0);
    //     }else{
    //      console.log(res) ;
    //       alert("กรุณาลองอีกครั้ง..");
    //     }
    //   }
    //   )
    //   .catch((error)=> {
    //     console.log(error.response.data.detail);
    //     alert(error.response.data.detail);

    //   }
    //   );
  }


  const useStyles = makeStyles((theme) => ({
    root: {

      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 1,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 1,
      },

      '& input:valid:focus + fieldset': {
        borderLeftWidth: 5,
        padding: '8px !important', // override inline-style
      },
      justifyContent: 'space-around',
      maxWidth: '30rem',
      backgroundColor: '#d3e8d6',
      padding: 40,
      borderRadius: 35,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'flex-start',
      display: 'grid',
      // flexWrap: 'wrap',
    },

    button: {
      // fontFamily: "sarabun",
      fontSize: 17,
      // margin: '30px',
      // marginLeft: 60,
      marginTop: 40,

    },

    divform: {
      // display: 'flex',
      maxWidth: '45rem',
      // width: 490,
      // backgroundColor: '#d3e8d6',
      // padding: 40,
      // margin: 50,
      // height: '400'
      // borderRadius: 35,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'flex-start',
      display: 'grid',
      // backgroundColor: '#d3e8d6',
      // marginLeft: 80,
      border: 50,
      // borderRadius: 35,
      // justifyContent: 'space-around',
      // flexDirection: 'column',
      // alignItems: 'flex-start',
      // alignItems: 'baseline',
      // justifyItems: 'stretch',
      // marginTop: 50,
      // paddingTop: 50,
    },

    selectEmpty: {
      marginTop: theme.spacing(3),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    TextFieldmargin: {
      margin: 10,
    },
    FormControlmargin: {
      margin: 10,

    }
    // inputlabel: {
    //   width: '10',

    // },

  }));

  const theme = createMuiTheme({});

  const classes = useStyles();
  // user(ชื่อผู้เข้าใช้)  pass  email  ชื่อจริง-นามสกุล

  return (
    <Container alignItems="center" className={classes.root} style={{ width: '190vh' }} >

      <div className={classes.divform} >
        <TextField
          className={classes.FormControlmargin}
          label="ชื่อผู้ใช้"
          required
          variant="outlined"
          id="validation-outlined-input"
          helperText=""
          onChange={(e) =>
            setUser(e.target.value)}
          value={User} />


        <FormControl variant="outlined" className={classes.FormControlmargin} >

          <InputLabel htmlFor="component-outlined">รหัสผ่าน</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            id="component-outlined"
            label="รหัสผ่าน"
            error={errpwd}
            variant="outlined"
            onChange={(e) => validate(e.target.value)}
            value={Password}
            labelWidth={66}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onChange={(e) =>
                    setPassword(e.target.value)}
                  value={Password}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            required
          />
          {helpTextPassword === true ? (<p>correct</p>) : (<p>error</p>)}
          <FormHelperText id="filled-weight-helper-text">{helpTextPassword}</FormHelperText>

        </FormControl>
        {/* <abel htmlFor="component-outlined-helptext">{helpTextPassword}</abel> */}


        <FormControl variant="outlined" className={classes.FormControlmargin}>
          <InputLabel htmlFor="component-outlined">ยืนยันรหัสผ่าน</InputLabel>
          <OutlinedInput
            type={showPassword1 ? 'text' : 'password'}
            id="component-outlined"
            label="ยืนยันรหัสผ่าน"
            error={errpwd1}
            variant="outlined"
            onChange={(e) => validates(e.target.value)}
            value={ConfirmPassword}
            labelWidth={66}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)}
                  value={ConfirmPassword}
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {showPassword1 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            required
          />
          <FormHelperText id="filled-weight-helper-text">{helpTextPassword1}</FormHelperText>

        </FormControl>


        <TextField
          className={classes.TextFieldmargin}
          type="email"
          label="EMAIL"
          required

          id="validation-outlined-input"
          // helperText="ERROR"
          onChange={(e) =>
            setEmail(e.target.value)}
          value={Email} />

        <ThemeProvider theme={theme}>


          <TextField
            className={classes.TextFieldmargin}
            label="NAME"
            id="mui-theme-provider-standard-input"
            onChange={(e) =>
              setName(e.target.value)}
            value={Name} />


          <TextField
            className={classes.TextFieldmargin}
            label="LAST NAME"
            id="mui-theme-provider-standard-input"
            onChange={(e) =>
              setLname(e.target.value)}
            value={Lname} />

          <TextField
            className={classes.TextFieldmargin}
            label="SCHOOL"
            id="mui-theme-provider-standard-input"
            onChange={(e) =>
              setSchollname(e.target.value)}
            value={Schollname} />
        </ThemeProvider>

        <FormControl variant="standard" className={classes.TextFieldmargin}>
          <InputLabel htmlFor="outlined-age-native-simple">จังหวัด</InputLabel>
          <Select
            native
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>นครราชสีมา</option>
            <option value={20}>กรุงเทพ</option>
            <option value={30}>ภูเก็ต</option>
          </Select>
        </FormControl>


        <Button className={classes.button}
          type="Submit"
          onClick={handleSignup}
          variant="outlined"
          color="inherit"
        >
          Submit
        </Button>

      </div>
    </Container>

  );
}


export default Signup;