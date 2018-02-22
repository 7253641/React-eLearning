import React, { Component } from 'react';
import classes from './Index.css';
import ListChapter from './ListChapter';
class ShowListChapter extends Component {
  render() {
    return (
      <div className={classes.root}>
        <ListChapter />
      </div>
    );
  }
}

export default ShowListChapter;
