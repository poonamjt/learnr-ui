import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import LoginComponent from "./common/Main";

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
              <LoginComponent />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
