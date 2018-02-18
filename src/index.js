import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './index.css';
// import App from './App';
//import Tabs from './tabs';
import Drawer from './main';

const rootElement = document.querySelector('#root');

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function Tab(){
  return(
    <MuiThemeProvider theme={theme}>
      <Drawer />
    </MuiThemeProvider>
  );
}

if (rootElement) {
  render(<Tab />, rootElement);
}
