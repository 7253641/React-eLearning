import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import classes from './Index.css';
import Toolbar from 'material-ui/Toolbar';
import MapChapter from './MapChapter';
class ShowListChapter extends Component {
  render() {
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography
              type="title"
              color="inherit"
              style={{ fontSize: '18px' }}
            >
              Category
            </Typography>
          </Toolbar>
        </AppBar>
        <MapChapter id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ShowListChapter;
