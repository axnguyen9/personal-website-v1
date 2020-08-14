import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import self from "../../assets/self.png";

const styles = {
  intro: {
    margin: '0 10%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    //border: '1px solid black',
  },
  selfPortrait: {
    width: '50%',
    //border: '1px solid black',
  },
  blurb: {
    width: '40%',
    margin: '0 5%',
    //border: '1px solid black',
  },
  name: {
    color: '#CE796B',
  },
  link: {
    display: 'flex',
  },
};

export const HomeScreen = () => {
  return (
    <div>
      <div style={styles.intro}>
        <img src={self} style={styles.selfPortrait}/>
        <div style={styles.blurb}>
          <Typography variant="button">HEY THERE, I'M</Typography>
          <Typography variant="h1" style={styles.name}>ANNA NGUYEN</Typography>
          <Typography variant="body1">
            A CS + Design student @ Cornell University 
            dedicated to empowering myself and others 
            through the intersections of design, tech, 
            and socia impact, particularly youth 
            empowerment despite socioeconomic 
            disparities in education.  
          </Typography>
          <Typography variant="body1">axn3@cornell.edu</Typography>
          <IconButton aria-label="github" >
            <Link
              href="https://github.com/axnguyen9"
              target="_blank"
              rel="noopener"
              style={styles.link}>
                <GitHubIcon style={{ color: 'black' }}/>
            </Link>    
          </IconButton> 
          <IconButton>
            <Link
              href="https://www.linkedin.com/in/axnguyen/"
              target="_blank"
              rel="noopener"
              style={styles.link}>
                <LinkedInIcon style={{ color: 'black' }}/>
            </Link>
          </IconButton>
          <IconButton aria-label="instagram" >
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
              style={styles.link}>
                <InstagramIcon style={{ color: 'black' }}/>
            </Link>    
          </IconButton> 
          
          
        </div>
      </div>
    </div>
  );
};