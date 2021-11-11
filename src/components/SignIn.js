import React,{useState} from 'react'
import { Grid,Paper, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import HomePage from './HomePage';
const Login=()=>{
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [bool,setBool]=useState(null)
    const paperStyle={padding :10,width:380, margin:"50px auto"}
    const btnstyle={margin:'8px 0'}

    const usernamehandler=(e)=>{
        setName(e.target.value)
    }

    const passwordhandler=(e)=>{
        setPassword(e.target.value) 
    }

    const formHandler=(e)=>{
      e.preventDefault()
      if(name==="" && password===""){
          setBool(false)
      }
      else{
        setBool(true)
      }
     
    }
    if(!bool){
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <h1 style={{color:"red",fontSize:"50px"}}>Quora</h1>
                <h4>A place to share knowledge and better understand the world</h4>
                </Grid>
                <form onSubmit={formHandler}>
                <TextField label='Username' 
                placeholder='Enter username' 
                label="User Name" 
                id="outlined-basic"
                variant="outlined" 
                onChange={usernamehandler} fullWidth required/>

                <br/><br/>

                <TextField label='Password' 
                placeholder='Enter password' 
                label="Password" 
                id="outlined-basic"
                variant="outlined"
                onChange={passwordhandler} 
                type='password' fullWidth required/>
                <br/><br/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <br/>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>     
    )
   }
   else{
       return(
           <HomePage/>
       )
   }
}

export default Login