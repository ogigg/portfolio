import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';


export const lightTheme = createMuiTheme({
    body: 'white',
    background: 'green',
    text: 'black',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  })
  
  export const darkTheme = createMuiTheme({
    body: '#363537',
    text: '#FAFAFA',
    background: 'red',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
  })

export const useStyles = makeStyles((theme) => {
    // console.log(theme)
    return ({
    app:{
        textAlign: 'center',
        height: '100%',
        // color: theme.text,
        background: '#f5f5f5',
        paddingBottom: '100px',
    },
    cardRoot: {
      minWidth: 275,
      maxWidth: '70%',
      margin: 'auto',
      marginBottom: '10px',
      padding: '30px',
      background: theme.body,
    },
    title: {
      fontSize: 30,
    },
    header: {
        minHeight: '50px',
        display: 'inline-block',
      },
    
    technologies: {
      width: '100%',
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: '3px', 
      },
    },
  })});