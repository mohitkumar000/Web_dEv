import React from 'react'
import Image from 'next/image'
import logo from '../../assets/instagram.jpeg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
//import IconButton from "@mui/material/IconButton";



function index() {
  return (
    <div>
      <div className="signup-container">
       <div className="signup-card">
        <Image src={logo}/> 
        <TextField id="outlined-basic"  label="Email"   fullWidth="true" margin="dense" variant="outlined" />
        <TextField id="outlined-basic"  label="password" fullWidth="true" margin="dense" variant="outlined" />
        <TextField id="outlined-basic"  label="Full NAme" fullWidth="true" margin="dense"  variant="outlined" />
        <Button variant="contained"  color="secondary" fullWidth component="label">
        {/* <IconButton color="secondary">
        
        </IconButton> */}
        <CloudUploadIcon fontSize="large" />

         Upload profile Image
         <input hidden accept="image/*" type ="file"/>
          </Button>
          <Button style={{marginTop:"1rem"}} variant="outlined" color="success" fullWidth>
            Sign-up
          
          </Button>
          <div className="tnc">
           <center> By signing up,you agreeto our Terms, Condtions and Cookies policy</center>
          </div>
      
        
        

    </div>
    <div className="bottom-card">
        Already have an account ? login
      
    </div>
    </div>
  
    </div>
  
  );
}

export default index