import React from 'react';
import { Link, Switch } from 'react-router-dom';
import './style.css';
import { GridContainer } from './Styled/GridContainer';
import About from './Pages/About';
import { ProjectContainer } from './Styled/ProjectContainer';

function Grid() {
  return (
    <GridContainer>
      <ProjectContainer>
        <Link to="/">👆 Homepage</Link>
      </ProjectContainer>
      <ProjectContainer>
        <Link to="/dizzy">I feel Dizzy</Link>
      </ProjectContainer>
      <ProjectContainer>
        <Link to="/story">Never Ending Story</Link>
      </ProjectContainer>
    </GridContainer>
  );
}

export default Grid;
