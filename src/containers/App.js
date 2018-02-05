import React, { Component } from 'react';
import Video from '../components/Videos/index';
import Classes from './App.css';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Route } from 'react-router-dom';
import Content from '../components/Content/Content';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Wrapper from '../components/Hoc/Hoc';
import Radium from 'radium';
import Index from '../components/showListChapter/Index';
import ListCourse from '../components/Contain/ListCourse/ListCourse.js';
const theme = createMuiTheme();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={Classes}>
            <Wrapper>
              <Route path="/" exact component={ListCourse} />
              <Route path="/Content" component={Content}/>
              <Route path="/index" component={Index}/>
              <Route path="/video" component={Video}/>
            </Wrapper>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default  Radium(App);
