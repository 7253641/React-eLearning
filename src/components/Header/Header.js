import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radium from 'radium';
// import Button from 'material-ui/Button';
// import Divider from 'material-ui/Divider/Divider';
const styles = theme => ({
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
  },
});

const header = props => {
  return (
    <header id="header">
      <div className="Logo">
        <ul>
          <a href="/">E-LEARNING</a>
        </ul>
      </div>
      <div className="Nav" dir="ltr">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/ListChapter">ListChapter</a>
            </li>
            <li>
              <a href="/Video">Videos</a>
            </li>
            <li>
              <a>|</a>
            </li>
            <li>
              <a href="/Login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Radium(withStyles(styles)(header));
