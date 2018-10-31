import React, { Component } from 'react';
import Main from './common/Main';
import Header from "./common/Header";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1a73ba'
        }
    }
});



class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <div className="App">
              <Main/>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
