import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

import yellowLights from '../images/yellow-lights.png';
import blueLights from '../images/blue-lights.png';
import fallLights from '../images/fall-lights.png';
import multiLights from '../images/multi-lights.png';
import pinkBlueLights from '../images/pink-blue-lights.png';
import drabLights from '../images/drab-lights.png';
import goldLights from '../images/gold-lights.png';
import pinkGreenLights from '../images/pink-green-lights.png';
import bluePurpleLights from '../images/blue-purple-lights.png';
import './styles.css';
import { Container } from '@mui/material';

export default function TitlebarImageList() {
    return (
        <Container className="portfolio-container">
            <ImageList className='d-flex flex-wrap' sx={{ width: 1000, height: 1000 }}>
                <h2 className="birthstone-bounce-medium">Portfolio</h2>
                <p className="poppins-regular"></p>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} className="image-list-item m-2">
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            onClick={() => {
                                alert('You are being redirected to the application.');
                                window.open(item.appLink, '_blank');
                            }}
                            alt={item.title}
                            loading="lazy"
                            className="img-fluid"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    onClick={() => {
                                        alert('You are being redirected to the GitHub repository.');
                                        window.open(item.gitRepo, '_blank');
                                    }}
                                >
                                    <GitHubIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}

const itemData = [
    {
        img: pinkBlueLights,
        title: 'RAG Books',
        appLink: 'https://ragbooks.com/',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: fallLights,
        title: 'Textbook Trade (GraphQL/React/Node.js/Express.js/MongoDB/Mongoose)',
        appLink: 'https://textbook-trade.onrender.com/',
        gitRepo: 'https://github.com/camillebagnani/textbook-trade.git',
    },
    {
        img: multiLights,
        title: 'Social Network API (Node.js/Express.js/MongoDB/Mongoose)',
        appLink: 'https://drive.google.com/file/d/1631aJak8RAaMU4ZOIT86Gji9t3acIe4x/view?usp=sharing',
        gitRepo: 'https://github.com/Nixxii223/18-Social-Network-API.git',
    },
    {
        img: blueLights,
        title: 'README Generator (Node.js/Inquirer)',
        appLink: 'https://drive.google.com/file/d/1HW6022Syl-NSyWZdtTCBOjGcLULfoXSJ/view?usp=sharing',
        gitRepo: 'https://github.com/Nixxii223/9-readme-generator.git',
    },
    {
        img: drabLights,
        title: 'E-Commerce Back End (Node.js/Express.js/MySQL)',
        appLink: 'https://drive.google.com/file/d/1AmqZ7BZKQimn_pwfpPT3522ZaTMz45U5/view?usp=sharing',
        gitRepo: 'https://github.com/Nixxii223/13-e-commerce-backend.git',
        cols: 2,
    },
    {
        img: goldLights,
        title: 'SVG Logo Maker (Node.js/Inquirer/Jest)',
        appLink: 'https://drive.google.com/file/d/1-ecX3u6XRRlzLcWE_tCAQVpj7iNPEBr9/view?usp=sharing',
        gitRepo: 'https://github.com/Nixxii223/10-SVG-Logo-Maker.git',
        cols: 2,
    },
    {
        img: pinkGreenLights,
        title: 'Weather Dashboard (OpenWeather API)',
        appLink: 'https://nixxii223.github.io/6-weather-dashboard/',
        gitRepo: 'https://github.com/Nixxii223/6-weather-dashboard.git',
        cols: 2,
    },
    {
        img: bluePurpleLights,
        title: 'Password Generator',
        appLink: 'https://nixxii223.github.io/3-password-generator-challenge/',
        gitRepo: 'https://github.com/Nixxii223/3-password-generator-challenge.git',
        cols: 2,
    },
    {
        img: yellowLights,
        title: 'Employee Tracker (Node.js/Inquirer)',
        appLink: 'https://drive.google.com/file/d/1f6ctitVAGGRzqhK9mQfNzlWBSqNx29jU/view?usp=sharing',
        gitRepo: 'https://github.com/Nixxii223/12-Employee-Tracker.git',
        rows: 2,
        cols: 2,
        featured: true,
    },
];