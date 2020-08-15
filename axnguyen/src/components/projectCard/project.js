import React from 'react';
import pigpocket from "../../assets/pigpocket.png";

export const devProjs = [{
  category: 'dev',
  title: 'PigPocket Customer Website',
  img: 'pigpocket.png',
  blurb: 'A website assisting the literacy mobile application \
          by answering user’s questions and interacting with users.',
  skills: ['React', 'Material UI', 'Figma', 'react-router-dom', 'mobX', 'Git'],
  color: '104, 38, 52'
}, {
  category: 'dev',
  title: 'Art Wall Website',
  img: 'artwall.png',
  blurb: 'A gallery of my artworks, with the option of temporarily \
          editing tags to images or uploading new images.',
  skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQLite', 'Heroku', 'Git', 'Figma'],
  color: '198, 218, 232'
}, ];

export const designProjs = [{
  category: 'design',
  title: 'Next Health',
  img: 'artwall.png',
  blurb: 'A mobile application empowering users to take control \
          of their health and communicate effectively with their doctors.',
  skills: ['Figma', 'visual design', 'prototyping', 'design thinking', 'wireframing'],
  color: '127, 194, 182'
}];

export const allProjs = devProjs.concat(designProjs);
