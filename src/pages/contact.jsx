import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contact() {
    return (
      <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
        <h1>Contact Me</h1>
        <TextField required id="standard-required" label="Name" color="secondary" variant="standard" />
        <TextField required id="standard-required" label="Email" color="secondary" variant="standard" />
        <TextField required id="standard-required" label="Phone" color="secondary" variant="standard"/>
        
      </Box>
    );
  }

  