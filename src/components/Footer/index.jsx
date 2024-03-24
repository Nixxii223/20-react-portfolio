import React from 'react';
import { Box, Link, IconButton, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles.css';


export default function Footer() {
    return (
        <Container className="footer-container">
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
                
                <Link href="https://github.com/nixxii223" target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                </Link>
                <Link href="www.linkedin.com/in/nicki-barrett" target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                </Link>
            </Box>
            <p className='poppins-regular'>Made with ❤️ by Nicki Barrett 2024</p>
        </Container>
    );
}