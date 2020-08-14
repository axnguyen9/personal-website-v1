import React from 'react';
import Routes from "./routes";

import {CustomTheme} from "./components/customTheme";
import {MuiThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import './App.css';

function App() {
  return (
    <div>
      <MuiThemeProvider theme={responsiveFontSizes(CustomTheme)}>
        <Routes />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
