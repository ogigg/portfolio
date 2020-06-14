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
            {projectsCards}
            
          </div>
        </ThemeProvider>


  );
}

export default App;
