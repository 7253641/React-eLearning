import React from 'react';
import './Header.css';
// import logo from '../../Asset/LOGO1.png';
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
          <a href="/Home">E-LEARNING</a>
        </ul>
      </div>
      <div className="Nav" dir="ltr">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Index">Courses</a>
            </li>
            <li>
              <a href="/About Us">About Us</a>
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
