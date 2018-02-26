import React, { Component } from 'react';
import MenuVideo from '../components/Videos/MenuVideo/MenuVideo';
import Classes from './App.css';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Wrapper from '../components/Hoc/Hoc';
import Radium from 'radium';
import ShowListChapter from '../components/showListChapter/ShowListChapter';
import ListCourse from '../components/Contain/ListCourse/ListCourse';

const theme = createMuiTheme();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={Classes}>
            <Wrapper>
              <Route path="/" exact component={ListCourse} />
              <Route path="/listchapter/:id" component={ShowListChapter} />
              <Route path="/courses/:id/:url/:name" component={MenuVideo} />
            </Wrapper>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default Radium(App);
