import React ,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
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
  
  const [Username, setUsername] = useState("")
  const [Pwd, setPwd] = useState("")
  
  let base_url = "http://172.18.41.162:8000"

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault()

    const form_data = {
      username : Username,
      password: Pwd
    };

  
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(form_data),
      url: base_url+'/token',
    };

    console.log(form_data)

    axios(options)
    .then(res => {
        console.log(res)
        // console.log(res.data)
        
    });

    axios.get(base_url+'/users/info')
    .then(res => {
      console.log("user : " + res)
      // console.log(res.data)
      
    });

  }
  
    return (
        
        <form onSubmit={handleSubmit}>
     <Alert severity="error">This is an error alert — check it out!</Alert>
      <div className={classes.margin}>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>

          <Grid item >
            <TextField  id="input-with-icon-grid" label="USER" onChange={(e)=>setUsername(e.target.value)} value={Username}/>
          </Grid>
        </Grid> <br></br>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>

          <Grid item >
            <TextField id="input-with-icon-grid" label="PASSWORD"  onChange={(e)=>setPwd(e.target.value)} value={Pwd} />
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