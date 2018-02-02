import React, { Component } from 'react';
import Video from '../components/Videos/index';
import Classes from './App.css';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Wrapper from '../components/Hoc/Hoc';
import Radium from 'radium';
import ListChapter from '../components/showListChapter/Index';
import Contain from '../components/Contain/Contain';
import Content from '../components/Content/Content';

const theme = createMuiTheme();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={Classes}>
            <Wrapper>
              <Route path="/Index" component={ListChapter} />
              <Route path="/" exact component={Contain} />
              <Route path="/Content" component={Content}/>
              <Route path="/video" component={Video}/>
            </Wrapper>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default Radium(App);
