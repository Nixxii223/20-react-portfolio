import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <TextField required id="outlined-required" label="Name" variant="outlined" />
        <TextField required id="outlined-required" label="Email" variant="outlined" />
        <TextField required id="outlined-required" label="Number" variant="outlined" />
      </div>
    );
  }