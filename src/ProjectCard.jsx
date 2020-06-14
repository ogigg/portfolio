import React, {setState} from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { FaReact, FaAngular } from 'react-icons/fa';
import { DiDotnet } from 'react-icons/di';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { useStyles } from './styles';
import { makeStyles, ThemeProvider } from "@material-ui/styles";





function ProjectCard(props) {
  const project = props.project;
  const classes = useStyles();
  const listItems  = project.technologies.map((technology) => {
  let avatar = {};
  let technologyStyle = {};

  if(technology == 'react'){
    avatar = <FaReact></FaReact>
    technologyStyle = {}
  }
  if(technology == 'angular'){
    avatar = <FaAngular></FaAngular>
  }
  if(technology == '.NET'){
    avatar = <DiDotnet></DiDotnet>
  }
  if(technology == 'ant-design'){
    avatar = <AiOutlineAntDesign></AiOutlineAntDesign>
  }
  
  return(<Chip variant="outlined" label={technology} 
  onClick={()=>{}}
  className={technologyStyle}
  avatar={avatar} />
  )});

  let buttons = <Button color="primary" target="_blank" href={project.githubUrl} startIcon={<GitHubIcon />}>GitHub</Button>
  if(project.demoUrl != "") {
    buttons = (
      <>
      <Button color="primary" target="_blank" href={project.githubUrl} startIcon={<GitHubIcon />}>GitHub</Button>
      <Button color="primary" target="_blank" href ={project.demoUrl} >Demo</Button>
      </>
    );
  }  
  

  return (

    <React.Fragment>
      <Card className={classes.cardRoot} elevation={2}>
      <CardContent>
        <Typography className={classes.title} component="h2">
          {project.name}
        </Typography>

        <Typography component="body2">
          {project.description}
        </Typography>

        <Typography className={classes.technologies} component="h2">
          {listItems}
        </Typography>
        
      </CardContent>
      <CardActions>
        {buttons}
      </CardActions>
    </Card>
    </React.Fragment>
  );
}


const beautifyText = () => {
  console.log("Hello There traveller");
}
export default ProjectCard;
