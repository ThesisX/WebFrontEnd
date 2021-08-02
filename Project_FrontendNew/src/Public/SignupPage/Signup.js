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

  const [User, setUser] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Lname, setLname] = useState("")
  const [Schollname, setSchollname] = useState("")
  // let [Province, setProvince] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [errpwd, setErrpwd] = useState(true)
  const [errpwd1, setErrpwd1] = useState(true)

  const [helpTextPassword, setHelpTextPassword] = useState("กรุณาเพิ่มรหัสผ่านมากกว่า 8 ตัวอักษร")
  const [helpTextPassword1, setHelpTextPassword1] = useState("กรุณาเพิ่มรหัสผ่านมากกว่า 8 ตัวอักษร")


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


    let BASE_URL = "http://172.18.41.124:8000"

    let form_data = {
      username: User,
      email: Email,
      full_name: Name + " " + Lname,
      hashed_password: Password,

    };

    await axios.post(BASE_URL + "/sign-up", form_data)
      .then(res => {
        console.log(res)
        // console.log(res.data)
      });
  }



  // const BootstrapInput = withStyles((theme) => ({
  //   root: {
  //     'label + &': {
  //       marginTop: theme.spacing(5),
  //       display: 'auto',
  //       borderRadius: 15,
  //       paddingTop: '270px',
  //     },
  //   },
  //   input: {
  //     borderRadius: 4,
  //     position: 'relative',
  //     backgroundColor: theme.palette.common.white,
  //     border: '1px solid #ced4da',
  //     fontSize: 16,
  //     width: 'auto',
  //     padding: '10px 12px',
  //     transition: theme.transitions.create(['border-color', 'box-shadow']),
  //     // Use the system font instead of the default Roboto font.
  //     fontFamily: [
  //       '-apple-system',
  //       'BlinkMacSystemFont',
  //       '"Segoe UI"',
  //       'Roboto',
  //       '"Helvetica Neue"',
  //       'Arial',
  //       'sans-serif',
  //       '"Apple Color Emoji"',
  //       '"Segoe UI Emoji"',
  //       '"Segoe UI Symbol"',
  //     ].join(','),
  //     '&:focus': {
  //       boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
  //       borderColor: theme.palette.primary.main,
  //     },

  //   },
  // }))(InputBase);

  // const useStylesReddit = makeStyles((theme) => ({
  //   root: {
  //     border: '1px solid #e2e2e1',
  //     overflow: 'hidden',
  //     borderRadius: 4,
  //     backgroundColor: '#fcfcfb',
  //     transition: theme.transitions.create(['border-color', 'box-shadow']),
  //     '&:hover': {
  //       backgroundColor: '#fff',
  //     },
  //     '&$focused': {
  //       backgroundColor: '#fff',
  //       boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
  //       borderColor: theme.palette.primary.main,
  //     },
  //   },
  //   focused: {},
  // }));

  // function RedditTextField(props) {
  //   const classes = useStylesReddit();

  // return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  // }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 5,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 3,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 2,
        padding: '5px !important', // override inline-style
      },

      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(5),
    },
    formControl: {
      margin: theme.spacing(3),

    },
    button: {
      height: 50,
      margin: theme.spacing(5),
    },
    divform: {
      backgroundColor: '#fce4ec',
      padding: '60px',
    },
    // formControl: {
    //   margin: theme.spacing(3),
    //   minWidth: 200,
    // },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    inputlabel: {
      width: '30ch',

    },

  }));

  // const OutlinedInput = withStyles({
  //   /* Add a green text color and a checkmark when the requirements are right */
  //   .TextField {
  //   color: green;
  // }

  //   .valid: before {
  //     position: relative;
  //     left: -35px;
  //     content: "✔";
  //   }

  //   /* Add a red text color and an "x" when the requirements are wrong */
  //   .invalid {
  //     color: red;
  //   }

  //   .invalid: before {
  //   position: relative;
  //   left: -35px;
  //   content: "✖";
  // }
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
  //     },
  //   },
  // }
  // })(TextField);

  // const theme = createMuiTheme({
  //   palette: {
  //     primary: green,
  //   },
  // });

  const theme = createMuiTheme({});

  const classes = useStyles();
  // user(ชื่อผู้เข้าใช้)  pass  email  ชื่อจริง-นามสกุล

  return (



    <Container alignItems="center" className={classes.root} style={{ height: 'auto', width: '150vh' }}>
      <div className={classes.divform} >

        <TextField
          className={classes.margin}
          label="USER"
          required
          variant="outlined"
          id="validation-outlined-input"
          helperText="ERROR"
          onChange={(e) =>
            setUser(e.target.value)}
          value={User} />


        <FormControl variant="outlined" >
          <InputLabel htmlFor="component-outlined">Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            id="component-outlined"
            label="Password"
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
           <FormHelperText id="filled-weight-helper-text">{helpTextPassword}</FormHelperText>

        </FormControl>
        {/* <abel htmlFor="component-outlined-helptext">{helpTextPassword}</abel> */}

       
        <FormControl variant="outlined" >
          <InputLabel htmlFor="component-outlined">ConfirmPassword</InputLabel>
          <OutlinedInput
            type={showPassword1 ? 'text' : 'password'}
            id="component-outlined"
            label="ConfirmPASSWORD"
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
          className={classes.margin}
          type="email"
          label="EMAIL"
          required

          id="validation-outlined-input"
          helperText="ERROR"
          onChange={(e) =>
            setEmail(e.target.value)}
          value={Email} />

        <ThemeProvider theme={theme}>


          <TextField
            className={classes.margin}
            label="NAME"
            id="mui-theme-provider-standard-input"
            onChange={(e) =>
              setName(e.target.value)}
            value={Name} />


          <TextField
            className={classes.margin}
            label="LAST NAME"
            id="mui-theme-provider-standard-input"
            onChange={(e) =>
              setLname(e.target.value)}
            value={Lname} />

          <TextField
            className={classes.margin}
            label="SCHOOL"
            id="mui-theme-provider-standard-input"
            onChange={(e) =>
              setSchollname(e.target.value)}
            value={Schollname} />
        </ThemeProvider>

        <FormControl variant="standard" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">PROVINCE</InputLabel>
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


        <Button className={classes.button} type="Submit" onClick={handleSignup} variant="outlined" color="secondary">
          Submit
        </Button>

      </div>
    </Container>

  );
}


export default Signup;