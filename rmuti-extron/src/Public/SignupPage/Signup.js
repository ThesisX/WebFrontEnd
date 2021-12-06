import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
  // createStyles,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormHelperText from "@material-ui/core/FormHelperText";
import { post, get } from "axios";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { ListSubheader, MenuItem, OutlinedInput } from "@material-ui/core";
import { BASE_URL } from "../../service";
import { keys } from "@material-ui/core/styles/createBreakpoints";
import { StoreMallDirectoryRounded } from "@material-ui/icons";

const Signup = () => {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Lname, setLname] = useState("");
  const [school, setSchool] = useState("");
  const [province, setProvince] = useState("");
  const [locations, setLocations] = useState([]);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [check, setCheck] = useState(false);

  const [errpwd, setErrpwd] = useState(true);
  const [errpwd1, setErrpwd1] = useState(true);

  const [helpTextPassword, setHelpTextPassword] = useState(false);
  const [helpTextPassword1, setHelpTextPassword1] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const validate = (v) => {
    if (v.length >= 8) {
      setErrpwd(false);
      setHelpTextPassword(true);
      if (v === ConfirmPassword) {
        setCheck(true);
      }
      // setErrpwd1(false);
      // setHelpTextPassword1(true);
    } else {
      setErrpwd(true);
      setHelpTextPassword(false);
      if (v !== ConfirmPassword) {
        setCheck(false);
      }
      // setErrpwd1(true);
      // setHelpTextPassword1(false);
    }

    setPassword(v);
  };

  const validates = (v) => {
    if (v.length >= 8) {
      setErrpwd1(false);
      setHelpTextPassword1(true);
      if (v === Password) {
        setCheck(true);
      }
    } else {
      setErrpwd1(true);
      setHelpTextPassword1(false);
      if (v !== Password) {
        setCheck(false);
      }
    }

    // "รหัสผ่านต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร ถูกต้อง
    setConfirmPassword(v);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const useStyles = makeStyles((theme) => ({
    root: {

      "& input:valid + fieldset": {
        borderColor: "green",
        borderWidth: 1,
        
      },
      "& input:invalid + fieldset": {
        borderColor: "red",
        borderWidth: 1,
      },

      "& input:valid:focus + fieldset": {
        borderLeftWidth: 5,
        padding: "8px !important", // override inline-style
      },
      justifyContent: "space-around",
      maxWidth: "30rem",
      backgroundColor: "#fff5e6",
      padding: 40,
      borderRadius: 35,
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "flex-start",
      display: "grid",
      fontSize: `calc(68% + 0.1vmin)`,
      // width: `calc(100% + 1vmin)`,

      // flexWrap: 'wrap',
    },

    button: {
      // fontFamily: "sarabun",
      fontSize: 17,
      // margin: '30px',
      // marginLeft: 60,
      marginTop: 40,
      fontSize: `calc(50% + 0.8vmin)`,
      // width: `calc(100% + 1vmin)`,

    },

    divform: {
      // display: 'flex',
      width: `calc(100% + 0.6vmin)`,
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "flex-start",
      display: "grid",
      border: 50,
      fontSize: `calc(68% + 1vmin)`,
    },

    selectEmpty: {
      marginTop: theme.spacing(3),
      // fontSize: `calc(68% + 0.8vmin)`,

    },
    withoutLabel: {
      marginTop: theme.spacing(3),
      // fontSize: `calc(68% + 0.8vmin)`,

    },
    TextFieldmargin: {
      margin: 10,
      // fontSize: `calc(68% + 0.8vmin)`,

    },
    FormControlmargin: {
      "&:invalid": {
        borderColor: "red",
        // fontSize: `calc(68% + 0.8vmin)`,

      },
      margin: 10,
      // fontSize: `calc(68% + 0.8vmin)`,

    },
    passwordcheckTrue: {
      color: "#005700",
      // fontSize: `calc(68% + 0.8vmin)`,

    },
    passwordcheckFalse: {
      color: "#d10000",
      // fontSize: `calc(68% + 0.8vmin)`,

    },
    // inputlabel: {
    //   width: '10',

    // },
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form_data = {
      username: User,
      email: Email,
      full_name: Name + " " + Lname,
      school: school,
      province: province,
      hashed_password: Password,
    };

    if (
      (Password >= 8 && ConfirmPassword >= 8) ||
      Password === ConfirmPassword
    ) {
      setCheck(true); // True for pass
      await post(BASE_URL + "/sign-up", form_data)
        .then((res) => {
          console.log(res.data);

          if (res.statusText === "OK") {
            window.history.go(0);
          } else {
            console.log(res);
            alert("กรุณาลองอีกครั้ง..");
          }
        })
        .catch((error) => {
          console.log(error.response.data.detail);
          alert(error.response.data.detail);
        });
    } else {
      setCheck(false);
    }
  };

  const theme = createMuiTheme({});

  const classes = useStyles();
  const getAllLocations = async () => {
    await get(BASE_URL + '/locations')
      .then(res => {
        // console.log("locations : ", res.data);
        setLocations(res.data);

      })
      .catch(res => {
        console.log("ไม่พบข้อมูลจังหวัด");

      })
  };

  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Container
        alignItems="center"
        className={classes.root}
      //  style={{ width: "190vh" }} //
        required
      >
        <div className={classes.divform}>
          <FormControl className={classes.FormControlmargin}>
            <TextField
              label="ชื่อผู้ใช้"
              required
              variant="outlined"
              id="validation-outlined-input"
              helperText=""
              onChange={(e) => setUser(e.target.value)}
              value={User}
              inputProps={{
                pattern: "[a-z0-9]{1,15}"
              }}
            />

            {User !== "" ? (<></>) : (
              <FormHelperText id="filled-weight-helper-text">
                <p style={{ color: "#d10000", textAlign: 'center' }}>รองรับเฉพาะภาษาอังกฤษ และตัวเลขเท่านั้น</p>
              </FormHelperText>
            )}
          </FormControl>
          <FormControl variant="outlined"  className={classes.FormControlmargin}>
            <InputLabel htmlFor="component-outlined">รหัสผ่าน</InputLabel>
            <OutlinedInput
              name="password"
              type={showPassword ? "text" : "password"}
              id="component-outlined"
              label="รหัสผ่าน"
              required
              error={errpwd}
              variant="outlined"
              onChange={(e) => validate(e.target.value)}
              value={Password}
              labelWidth={66}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="filled-weight-helper-text">
              {helpTextPassword !== false ? (
                <></>
              ) : (
                // <p className={classes.passwordcheckTrue}>ถูกต้อง</p>
                <p className={classes.passwordcheckFalse}>
                  รหัสผ่านต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร
                </p>
              )}
            </FormHelperText>
          </FormControl>
          {/* <abel htmlFor="component-outlined-helptext">{helpTextPassword}</abel> */}

          <FormControl variant="outlined" className={classes.FormControlmargin}>
            <InputLabel htmlFor="component-outlined">ยืนยันรหัสผ่าน</InputLabel>
            <OutlinedInput
              name="password"
              type={showPassword1 ? "text" : "password"}
              id="component-outlined"
              label="ยืนยันรหัสผ่าน"
              required
              error={errpwd1}
              variant="outlined"
              onChange={(e) => validates(e.target.value)}
              value={ConfirmPassword}
              labelWidth={66}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={ConfirmPassword}
                    onClick={handleClickShowPassword1}
                    onMouseDown={handleMouseDownPassword1}
                    edge="end"
                  >
                    {showPassword1 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <FormHelperText id="filled-weight-helper-text">
              {helpTextPassword1 !== false ? (
                <></>
              ) : (
                // <p className={classes.passwordcheckTrue}>ถูกต้อง</p>
                <p className={classes.passwordcheckFalse}>
                  รหัสผ่านต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร
                </p>
              )}
            </FormHelperText>

            {check === true ? (
              <></>
            ) : (

              <FormHelperText id="filled-weight-helper-text">
                <p className={classes.passwordcheckFalse}>* รหัสผ่านไม่ตรงกัน</p>
              </FormHelperText>
            )}
          </FormControl>

          <TextField
            name="email"
            className={classes.TextFieldmargin}
            type="email"
            label="อีเมล"
            required
            id="validation-outlined-input"
            // helperText="ERROR"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          />

          <ThemeProvider theme={theme}>
            <TextField
              name="surename"
              className={classes.TextFieldmargin}
              label="ชื่อจริง"
              required
              id="mui-theme-provider-standard-input"
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />

            <TextField
              name="lastname"
              className={classes.TextFieldmargin}
              label="นามสกุล"
              required
              id="mui-theme-provider-standard-input"
              onChange={(e) => setLname(e.target.value)}
              value={Lname}
            />

            <TextField
              name="school"
              className={classes.TextFieldmargin}
              label="มหาวิทยาลัย/โรงเรียน"
              required
              id="mui-theme-provider-standard-input"
              onChange={(e) => setSchool(e.target.value)}
              value={school}
            />
          </ThemeProvider>

          <FormControl variant="standard" className={classes.TextFieldmargin}>
            <InputLabel htmlFor="grouped-select">จังหวัด</InputLabel>
            <Select defaultValue="" id="grouped-select" onChange={e => setProvince(e.target.value)} required>
              <MenuItem value="">
                <em>-- เลือกจังหวัดของคุณ --</em>
              </MenuItem>
              <ListSubheader ListSubheader style={{ backgroundColor: 'white' }}><b>-- ภาคกลาง --</b></ListSubheader>
              {locations && locations.filter(z => z.location_zone === 1).map(p => (
                <MenuItem value={p.location_name}>{p.location_name}</MenuItem>
              ))}

              <ListSubheader style={{ backgroundColor: 'white' }}><b>-- ภาคอีสาน --</b></ListSubheader>
              {locations && locations.filter(z => z.location_zone === 2).map(p => (
                <MenuItem value={p.location_name}>{p.location_name}</MenuItem>
              ))}

              <ListSubheader style={{ backgroundColor: 'white' }}><b>-- ภาคเหนือ --</b></ListSubheader>
              {locations && locations.filter(z => z.location_zone === 3).map(p => (
                <MenuItem value={p.location_name}>{p.location_name}</MenuItem>
              ))}

              <ListSubheader style={{ backgroundColor: 'white' }}><b>-- ภาคใต้ --</b></ListSubheader>
              {locations && locations.filter(z => z.location_zone === 4).map(p => (
                <MenuItem value={p.location_name}>{p.location_name}</MenuItem>
              ))}

            </Select>
          </FormControl>

          <Button
            className={classes.button}
            type="submit"
            // onClick={handleSignup}
            variant="outlined"
            color="inherit"
          >
            สมัครสมาชิก
          </Button>
        </div>
      </Container >
    </form >
  );
};

export default Signup;
