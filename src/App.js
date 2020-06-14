import React, { useState, useEffect, useRef  } from 'react';
import './App.css';

import ProjectCard from './ProjectCard';
import { projects } from './projects';

import { lightTheme, darkTheme } from './styles';

import { useTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from "@material-ui/core/styles";

import { useStyles } from './styles';
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

import { Button } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';


function App() {
  
  const classes = useStyles();

  const projectsCards = projects.map((project) => 
    <ProjectCard project = {project}></ProjectCard>
  );
  const [rainbowText, setRainbowText] = useState(false);
  const [header, setHeader] = useState(<h2>My projects:</h2>)
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  const GitHubButton = <div className = "gh-button">
    <Button  
    color="primary" 
    href="https://github.com/ogigg" 
    startIcon={<GitHubIcon />}
    target="_blank">
       My GitHub </Button>
    </div>
  

  useEffect(() => {
    
    // console.log(rainbowText);

    if(rainbowText){
      const header = <h2 class = "rainbow">My projects:</h2>
      setHeader(header)
      // toggleTheme();
      // console.log(lightTheme);
    }
    
    else{

      setHeader(<h2>My projects:</h2>)
    }
    
  }, [rainbowText]);




  return (

          <ThemeProvider   theme={theme === 'light' ? lightTheme : darkTheme}>
          
          <div className={classes.app}>
            
            <div onMouseOver={() => setRainbowText(true)}
              onMouseLeave = {() => setRainbowText(false)}
              className={classes.header}
            >{header}</div>
            {GitHubButton}
            {projectsCards}
            
          </div>
        </ThemeProvider>


  );
}

export default App;
