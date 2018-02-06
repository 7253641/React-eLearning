<<<<<<< .merge_file_CQ3Eac
import React, { Component } from 'react';
import Video from '../components/Videos/index';
import Classes from './App.css';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Route } from 'react-router-dom';
import Content from '../components/Content/Content';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Wrapper from '../components/Hoc/Hoc';
import Contain from '../components/Contain/Contain';
import Radium from 'radium';
import ShowListChapter from '../components/showListChapter/ShowListChapter';

=======
import React, { Component } from "react";
import Video from "../components/Videos/index";
import Classes from "./App.css";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Wrapper from "../components/Hoc/Hoc";
import Radium from "radium";
import Index from "../components/showListChapter/Index";
import ListCourse from "../components/Contain/ListCourse/ListCourse.js";
>>>>>>> .merge_file_ZBxTKb
const theme = createMuiTheme();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
<<<<<<< .merge_file_CQ3Eac
            <div className={Classes}>
              <Wrapper>
                <Route path="/" exact component={Contain} />
                <Route path="/Content" component={Content}/>
                <Route path="/index" component={ShowListChapter}/>
                <Route path="/video" component={Video}/>
              </Wrapper>
            </div>
=======
          <div className={Classes}>
            <Wrapper>
              <Route path="/" exact component={ListCourse} />
              <Route path="/index" component={Index} />
              <Route path="/video" component={Video} />
            </Wrapper>
          </div>
>>>>>>> .merge_file_ZBxTKb
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default Radium(App);
