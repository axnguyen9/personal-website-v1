import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { SkillsTags } from '../skillsTags';

// Requires: img, theme color (string), projTitle (string),
// blurb (string), skills[]           
export const ProjectCard = props => {
  const color = props.color;
  const projTitle = props.projTitle;
  const blurb = props.blurb;
  const skills = props.skills;

  return(
    <Card>
      <CardMedia>
        <img src={props.img} />
      </CardMedia>
      <CardContent>
        <Typography variant="h2">{projTitle}</Typography>
        <Typography variant="body1">{blurb}</Typography>
        <SkillsTags tags={skills} color={color}/>
      </CardContent>
    </Card>
  )
};