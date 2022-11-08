import React from 'react'
import Image from 'next/image'
import logo from '../../assets/instagram.jpeg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function index() {
  return (
    <div>
      <div className="login-container">
       <div className="login-card">
        <Image src={logo}/> 
        <TextField id="outlined-basic"  label="Email"   fullWidth="true" margin="dense" variant="outlined" />
        <TextField id="outlined-basic"  label="password" fullWidth="true" margin="dense" variant="outlined" />
        <div style={{color:"blueviolet", marginTop:"1rem"}}>Forget password ?</div>
        
          <Button style={{marginTop:"1rem"}} variant="outlined" color="success" fullWidth>
            Log-in
          
          </Button>
         
      
        
        

    </div>
    <div className="bottom-card">
        Don,t have an acoount ? <span style={{color:"blueviolet"}}>Sign-up</span>
      
    </div>
    </div>
  
    </div>
  
  )
}

export default index