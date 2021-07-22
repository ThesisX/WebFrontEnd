import React, { useState } from 'react';
import clsx from 'clsx';

import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';


// import FormHelperText from '@material-ui/core/FormHelperText';
import { green } from '@material-ui/core/colors';
import axios from 'axios'
// import qs from 'qs';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { OutlinedInput } from '@material-ui/core';


// const margin = withStyles({
//   textField: {
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
// })(TextField);


// user pass mail name lname
// ชื่อรร จังหวัด 

const Signup = () => {

  // const [data, setData] = useState({})

  let [User, setUser] = useState("")
  let [Password, setPassword] = useState("")
  let [ConfirmPassword, setConfirmPassword] = useState("")
  let [Email, setEmail] = useState("")
  let [Name, setName] = useState("")
  let [Lname, setLname] = useState("")
  let [Schollname, setSchollname] = useState("")
  // let [Province, setProvince] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
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
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 2,
        padding: '2px !important', // override inline-style
      },

      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(3),
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
    formControl: {
      margin: theme.spacing(3),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '30ch',
      
    },

  }));

  
  const OutlinedInput = withStyles({
    margin: {
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      
      },
    
  })();

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });


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

         {/* <CssTextField
        className={classes.margin}
        variant="outlined"
        id="custom-css-outlined-input"
          type={showPassword ? 'text' : 'password'}
          label="PASSWORD"
          required
          helperText="ERROR"
          onChange={(e) =>
            setPassword(e.target.value)}
          value={Password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                // aria-label="สลับการมองเห็นรหัสผ่าน"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          
        /> */}

<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          className={classes.outlined}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            required
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
            labelWidth={70}
          />
        </FormControl>



        
        <TextField
          className={classes.margin}
          type="password"
          label="ConfirmPASSWORD"
          required
          variant="outlined"
          id="validation-outlined-input"
          helperText="ERROR"
          onChange={(e) =>
            setConfirmPassword(e.target.value)}
          value={ConfirmPassword} />


        <TextField
          className={classes.margin}
          type="email"
          label="EMAIL"
          required
          variant="outlined"
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
          <InputLabel htmlFor="outlined-age-native-simple">province</InputLabel>
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