import React, { useState } from 'react';
import { Box, TextField, Stack, Button } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send('service_xy833bh', 'template_cxo4n9u', {
      from_name: name,
      reply_to: email,
      message: message,
      to_name: name
    }, '-i49ofCuUoDiRMutM')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       alert('Your message has been sent successfully!');
    }, (err) => {
       console.log('FAILED...', err);
       alert('Failed to send the message. Please try again.');
    });
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
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          required
          id="outlined-email"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-message"
          label="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button type="submit">Send Email</Button>
      </Stack>
    </Box>
  );
};

export default ContactForm;