import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import ListSection from './ListSection';
class ShowListSection extends Component {
  render() {
    return (
      <div>
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
        <ListSection id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ShowListSection;
