import React, { useState, useEffect } from 'react';
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
import FormHelperText from '@material-ui/core/FormHelperText';
import { green } from '@material-ui/core/colors';
import axios from 'axios'
import qs from 'qs';
import Button from '@material-ui/core/Button';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);


// user pass mail name lname

const Signup = () => {

  const [data, setData] = useState({})

  let [User, setUser] = useState("")
  let [Password, setPassword] = useState("")
  let [Email, setEmail] = useState("")
  let [Name, setName] = useState("")
  let [Lname, setLname] = useState("")


  let BASE_URL = "http://127.0.0.1:8000"

  let form_data = {
    user: User,
    password: Password,
    email: Email,
    name: Name,
    lname: Lname,
  };

  const handleSignup = async (e) => {
    e.preventDefault()
    
  }



  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

  const useStylesReddit = makeStyles((theme) => ({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
    focused: {},
  }));

  function RedditTextField(props) {
    const classes = useStylesReddit();

    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const ValidationTextField = withStyles({
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
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    },
  })(TextField);

  // const FormHelperText = withStyles({
  //   root: {
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

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const classes = useStyles();

  // user(ชื่อผู้เข้าใช้)  pass  email  ชื่อจริง-นามสกุล
 
    


     
  return (

    <form className={classes.root} noValidate onSubmit={handleSignup}>

      <ValidationTextField
        className={classes.margin}
        label="USER"
        required
        variant="outlined"
        id="validation-outlined-input"
        helperText="ERROR"
        onChange={(e) =>
          setUser(e.target.value)}
        value={User} />

      <ValidationTextField
        className={classes.margin}
        label="PASSWORD"
        required
        variant="outlined"
        id="validation-outlined-input"
        helperText="ERROR"
        onChange={(e) =>
          setPassword(e.target.value)}
        value={Password} />

      <ValidationTextField
        className={classes.margin}
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
          id="validation-outlined-input"
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
  
        <Button className={classes.button} type="Submit" variant="outlined" color="secondary">
          Submit
        </Button>

      </ThemeProvider>


    </form>
  );
}


export default Signup;