import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import classes from './Index.css';
import Toolbar from 'material-ui/Toolbar';
import ListChapter from './ListChapter';
class Index extends Component {
  render() {
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              Category
            </Typography>
          </Toolbar>
        </AppBar>
        <ListChapter />
      </div>
    );
  }
}

export default Index;
