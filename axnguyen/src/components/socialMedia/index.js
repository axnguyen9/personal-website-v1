import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    display: 'flex',
  },
};

export const SocialMedia = () => {
  return(
    <div>
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
  );
};