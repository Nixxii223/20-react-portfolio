import React, { useState } from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !phone || !email || !message) {
      alert('All fields required. Please provide all required information.');
    }

    if (name && phone && validateEmail(email) && message) {
      alert(`Thank you for your message, ${name}! I will be in touch soon.`);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }

    if (!validateEmail(email)) {
      alert('Please provide a valid email address.');
    }
  };

  const handleBlur = (field) => () => {
    setTouched({ ...touched, [field]: true });
  };

  return (
    <Box
      className="contact-form"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1.5 },
      }}
      noValidate
      autoComplete="off"
    >
      <h2 className="birthstone-bounce-medium">Contact Me</h2>
      <Stack>
        <TextField
          required
          id="outlined-name"
          label="Name"
          color="secondary"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur('name')}
          error={touched.name && name === ''}
          helperText={touched.name && name === '' ? 'This field is required' : ''}
        />
        <TextField
          required
          id="outlined-phone"
          label="Phone"
          color="secondary"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={handleBlur('phone')}
          error={touched.phone && phone === ''}
          helperText={touched.phone && phone === '' ? 'This field is required' : ''}
        />
        <TextField
          required
          id="outlined-email"
          label="Email"
          color="secondary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur('email')}
          error={touched.email && email === ''}
          helperText={touched.email && email === '' ? 'This field is required' : ''}
        />
        <TextField
          required
          id="outlined-message"
          defaultValue=""
          label="Message"
          width="auto"
          multiline
          rows={5}
          color="secondary"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={handleBlur('message')}
          error={touched.message && message === ''}
          helperText={touched.message && message === '' ? 'This field is required' : ''}
        />
      </Stack>
      <Button variant="contained" color="secondary" width="25ch" type="submit">
        Submit
      </Button>
    </Box>
  );
}