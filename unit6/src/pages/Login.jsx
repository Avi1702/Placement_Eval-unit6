import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loging_in } from '../Redux/auth/action';


export const Login = () => {
    const [state,setstate]=useState({

        email:"",
        password:""
    })

    const dispatch=useDispatch()

    const {token}=useSelector(state=>state)

   
    const handleChange=(e)=>{
        const {name,value}=e.target

        setstate(prev=>({...prev,[name]:value}))
    }

    const handleLogin=(payload)=>{
        dispatch(Loging_in(payload))

    }
    
    if(token){
        return <Navigate to="/" />
    }


  return (
    
    
    <div className='Login'>
   
    <Box className='input_part'
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Email" variant="outlined" name='email' value={state.email} onChange={handleChange}/>
    <TextField id="outlined-basic" label="Password" variant="outlined" name="password" type={"password"} value={state.password} onChange={handleChange} />
    <Button variant="outlined" onClick={()=>{handleLogin(state)}}>Log In</Button>
  
  </Box>
  
  </div>
    
  )
  
}
