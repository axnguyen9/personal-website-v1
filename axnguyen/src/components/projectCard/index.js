import React from 'react';
import { Card, CardMedia, CardContent, Typography, rgbToHex, hexToRgb } from '@material-ui/core';
import { SkillsTags } from '../skillsTags';

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    borderRadius: '10px',
  },
  imageContainer: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    margin: '10%',
  },
  infoContainer: {
    width: '50%',
  },
  info: {
    width: '80%',
    margin: '10%',
  },
};

// Requires: img, theme color (string), projTitle (string),
// blurb (string), skills[]           
export const ProjectCard = props => {
  const color = props.color;
  const projTitle = props.projTitle;
  const blurb = props.blurb;
  const skills = props.skills;
  
  return(
    <Card style={styles.card}>
      <CardMedia style={{...styles.imageContainer, ...{backgroundColor: `rgb(${color})`}}}>
        <img src={require(`../../assets/${props.img}`)} style={styles.image}/>
      </CardMedia>
      <CardContent style={{...styles.infoContainer, ...{backgroundColor: `rgba(${color}, 0.25)`}}}> 
        <div style={styles.info}>
          <Typography variant="h2">{projTitle}</Typography>
          <Typography variant="body1">{blurb}</Typography>
          <SkillsTags tags={skills} color={color}/>
        </div>
      </CardContent>
    </Card>
  )
};