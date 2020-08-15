import React from 'react';
import { Box, Typography } from '@material-ui/core';

const styles = {
  tagsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  tags: {
    backgroundColor: '#F5F5F5',
    borderRadius: '30px',
    padding: '0 5%',
    marginRight: '2.5%',
  },
  tagContent: {
    
  }
};

export const SkillsTags = props => {
  const color = props.color;
  const tags = props.tags;

  return(
    <div style={styles.tagsContainer}>
      {tags.map((tag) => {
        return(
          <Box style={{...styles.tags, ...{border: `1px solid rgb(${color})`,}}}>
            <Typography variant="subtitle1" style={styles.tagContent}>
              {tag}
            </Typography>
          </Box>
        );
      })}
    </div>
  )
};