import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Contact() {
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !phone || !email || !message) {
            alert('All fields required. Please provide all required information.');
        }
    };

    return (
        <Box component="form"
            onSubmit={handleSubmit}
            sx={{
                '& .MuiTextField-root': { m: 2, width: '50ch'},
            }}
            noValidate
            autoComplete="off">
            <h2>Contact Me</h2>
            <Stack>
                <TextField
                    required
                    id="outlined-name"
                    label="Name"
                    color="secondary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-phone"
                    label="Phone"
                    color="secondary"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-email"
                    label="Email"
                    color="secondary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                />
                
            </Stack>
            <Button variant="contained" color="secondary" width="25ch" type="submit">Submit</Button>
        </Box>
    );
}