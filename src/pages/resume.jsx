import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import './styles.css';

const itemData = [
  {
    skill: 'HTML5',
  },
  {
    skill: 'CSS3',
  },
  {
    skill: 'JavaScript',
  },
  {
    skill: 'jQuery',
  },
  {
    skill: 'Bootstrap',
  },
  {
    skill: 'Node.js',
  },
  {
    skill: 'Express.js',
  },
  {
    skill: 'SQL',
  },
  {
    skill: 'MongoDB',
  },
  {
    skill: 'Mongoose',
  },
  {
    skill: 'React',
  },
  {
    skill: 'Sequelize',
  },
  {
    skill: 'RESTful APIs',
  },
  {
    skill: 'GraphQL',
  },
  {
    skill: 'Git/GitHub',
  },
  {
    skill: 'Heroku',
  },
  {
    skill: 'Jest',
  },
  {
    skill: 'Netlify',
  },
  {
    skill: 'Material-UI',
  },
];

export default function Resume() {
  return (

    <Container className="resume-container">
      <h2 className="birthstone-bounce-medium">Resume</h2>
      <Button variant="contained" color="secondary" width="25ch" href="https://docs.google.com/document/d/1nQAOCvICn-4vkEwdKeW--E-38WaOo6uW/edit?usp=sharing&ouid=112732874508907768431&rtpof=true&sd=true">Full Resume Here</Button>
      <h3 className="poppins-bold">Full Stack Web Developer & Speech Language Pathologist</h3>
      <h4 className="poppins-semibold">Technical Skills</h4>
      <List className="resume-skills">
        {itemData.map((item, index) => (
          <ListItem key={index} disablePadding>
            <StarBorderPurple500Icon />
            <ListItemText primary={item.skill} />
          </ListItem>
        ))}
      </List>
      
    </Container>
  );
}