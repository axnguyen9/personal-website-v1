import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import { Link } from 'react-router-dom';
import { SocialMedia } from '../../components/socialMedia';
import { ProjectCard } from '../../components/projectCard';
import { devProjs, designProjs, allProjs } from '../../components/projectCard/project.js';
import self from "../../assets/self.png";
import pigpocket from "../../assets/pigpocket.png";

const styles = {
  body: {
    margin: '0 10%',
  },
  intro: {
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
  categories: {
    display: 'flex',
    alignItems: 'center',
  },
};

export const HomeScreen = () => {
  const [catClicked, setCatClicked] = useState("all");

  const devCards = devProjs.map((proj) => {
    return(
      <ProjectCard 
        color={proj.color}
        projTitle={proj.title}
        img={proj.img}
        blurb={proj.blurb}
        skills={proj.skills}
      />
    );
  })

  const designCards = designProjs.map((proj) => {
    return(
      <ProjectCard 
        color={proj.color}
        projTitle={proj.title}
        img={proj.img}
        blurb={proj.blurb}
        skills={proj.skills}
      />
    );
  })

  const allCards = devCards.concat(designCards);

  return (
    <div style={styles.body}>
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
          <SocialMedia />
        </div>
      </div>
      <div style={styles.categories}>
        <Button onClick={() => setCatClicked('all')}>
          <Typography 
            variant="h1" 
            style={{color: catClicked === 'all' ? '#CE796B' : '#842640' }}
          >
            ALL
          </Typography>
        </Button>
        <FilterVintageIcon style={{ color: '#842640' }} />
        <Button onClick={() => setCatClicked('dev')}>
          <Typography 
            variant="h1"
            style={{color: catClicked === 'dev' ? '#CE796B' : '#842640' }}
          >
            DEV
          </Typography>
        </Button>
        <FilterVintageIcon style={{ color: '#842640' }} />
        <Button onClick={() => setCatClicked('design')}>
          <Typography 
            variant="h1"
            style={{color: catClicked === 'design' ? '#CE796B' : '#842640' }}
          >
            DESIGN
          </Typography>
        </Button>
      </div>
      <div>
        {catClicked === 'all' && allCards}
        {catClicked === 'dev' && devCards}
        {catClicked === 'design' && designCards}
      </div>
    </div>
  );
};